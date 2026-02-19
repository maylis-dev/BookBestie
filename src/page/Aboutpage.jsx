import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Editcom from "../components/Editcom";

function Aboutpage() {
  const [comments, setComments] = useState([]);
  const [editCommentId, setEditCommentId] = useState(null);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/comments?_sort=id&_order=desc`
      );
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="navigationabout">
        <Link to="/">
          <button>HOME</button>
        </Link>
        <h4>ABOUT</h4>
        <Link to="/about" className="about-button-link">
          <button className="about-button"></button>
        </Link>
      </div>

      <div className="containerabout">
        <div>
          <div className="textreview">
            <h4>My Review</h4>
          </div>

          <div className="myreviews">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="review-block">
                  <span className="review-user">{comment.user}</span>
                  <span className="review-text">{comment.review}</span>
                  <button onClick={() => setEditCommentId(comment.id)}>modify</button>
                </div>
              ))
            ) : (
              <p>No comments yet</p>
            )}
          </div>
        </div>
      </div>

      {editCommentId && (
        <div
          className="modal-overlay"
          onClick={() => setEditCommentId(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <Editcom
              commentId={editCommentId}
              getData={getComments}
              closeModal={() => setEditCommentId(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Aboutpage;
