import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Createcom from "../components/Createcom";
import Editcom from "../components/Editcom";

function Bookdetails() {
  const params = useParams();
  const [book, setBook] = useState(null);
  const [showCreateCom, setShowCreateCom] = useState(false);
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

  const existingReviews = book.review
    ? [
        {
          id: "existing",
          user: book.review.reviewerName,
          review: book.review.comment,
        },
      ]
    : [];

  const userComments = book.comments || [];

  return (
    <div className="bookdetails">
      <div className="navbook">
        <div className="headerbookinfo">
          <Link to="/"><button>home</button></Link>
          <h4 className="book-info-title"> Book info</h4>

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

        <div className="comments">
          <div className="commentintro">
            <h1>Comments</h1>
          </div>

          <button onClick={() => setShowCreateCom(true)}>
            Create Comment
          </button>

          {/* CREATE MODAL */}
          {showCreateCom && (
            <div
              className="modal-overlay"
              onClick={() => setShowCreateCom(false)}
            >
              <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
              >
                <Createcom
                  bookId={book.id}
                  getData={getData}
                  closeModal={() => setShowCreateCom(false)}
                />
              </div>
            </div>
          )}

          <div className="userreviews">
            {existingReviews.map((review) => (
              <div key={review.id} className="review">
                <p><strong>{review.user}</strong></p>
                <p>{review.review}</p>
              </div>
            ))}

            {[...userComments].reverse().map((comment) => (
              <div
                key={comment.id}
                className="review"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p><strong>{comment.user}</strong></p>
                  <p>{comment.review}</p>
                </div>
                <button
                  onClick={() => setEditCommentId(comment.id)}
                >
                  Edit
                </button>
              </div>
            ))}
          </div>

          {/* EDIT MODAL */}
          {editCommentId !== null && (
            <div
              className="modal-overlay"
              onClick={() => setEditCommentId(null)}
            >
              <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
              >
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
