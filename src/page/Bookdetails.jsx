import { Link, useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import axios from "axios";
import Createcom from "../components/Createcom";
import Editcom from "../components/editcom";

function Bookdetails() {
  const params = useParams();
  const [book, setBook] = useState(null);
  const [showCreateCom, setShowCreateCom] = useState(false);//value not show
  const [editCommentId, setEditCommentId] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/books/${params.bookId}?_embed=comments`
      );
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!book) return <h3>loading...</h3>;

  // separate existing review (read-only) from user-added comments
  //Gestion des reviews et commentaires
  const existingReviews = book.review ? [{ 
    id: 'existing', //existing reviw between parethse so the code doesn tlook for it in the server withthe exact name c est une chaine litteral  
    //dynamique , identifant fixe
    user: book.review.reviewerName, 
    review: book.review.comment 
  }] : [];
  const userComments = book.comments || [];

  return (
    <div className="bookdetails">
      <div className="navbook">
        <div className="headerbookinfo">
          <Link to="/"><button>home</button></Link>
          <h4>all book info</h4>
          <Link to="/about"><button>about</button></Link>
        </div>
      </div>

      <div className="bookinfo">
        <div className="blocksinfo">
          <div>
            <img src={book.image} alt={book.title} />
          </div>
          <div className="textbook">
            <h1>{book.title}</h1>
            <p>{book.author}, {book.category}</p>
            <div className="synopsis-block">
              <p>{book.synopsis}</p>
            </div>
          </div>
        </div>

        {/* comments section */}
        <div className="comments">
          <div className="commentintro">
            <h1>comments</h1>
          </div>

          {/* create comment button */}
          <button onClick={() => setShowCreateCom(true)}>create comment</button>
            {/* chang the state so update the fonction , sorneder the fonction */}

          {/* create comment user */}
          {showCreateCom && (
            <div className="modal-overlay" onClick={() => setShowCreateCom(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}> {/* empeche l evenementd eremonter dans le dom */}
                 {/* close pop */}
                <Createcom
                  bookId={book.id}
                  getData={getData}
                  closeModal={() => setShowCreateCom(false)}
        
                 
                /> 
              </div>
            </div>
          )}

          <div className="userreviews">
            {/* existing review */}
            {existingReviews.map((review) => (
              <div key={review.id} className="review" style={{ marginBottom: "10px" }}>
                <p><strong>{review.user}</strong></p>
                <p>{review.review}</p>
              </div>
            ))}

            {/* user comments editable */ }{/* map parcou le tableau pour trouver each */ }{/* affiche en premeier reverse , si la longuer en plus grnade que que o alors */ }
            {userComments.length > 0
              ? [...userComments].reverse().map((comment) => (
                  <div
                    key={comment.id}
                    className="review"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <p><strong>{comment.user}</strong></p>
                      <p>{comment.review}</p>
                    </div>
                    <button onClick={() => setEditCommentId(comment.id)}>edit</button>
                  </div>
                ))
              : null}
          </div>

          {/* edit comment modal */}
          {editCommentId && (
            <div className="modal-overlay" onClick={() => setEditCommentId(null)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <Editcom
                  commentId={editCommentId}
                  bookId={book.id}
                  getData={getData}
                  closeModal={() => setEditCommentId(null)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookdetails;
