import { useState, useEffect } from "react";
import axios from "axios";

function Editcom({ commentId, bookId, getData, closeModal }) {
  const [user, setUser] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`
        );
        setUser(res.data.user);
        setReview(res.data.review);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComment();
  }, [commentId]);

  // UPDATE
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`,
        {
          user,
          review,
          bookId: Number(bookId),
        }
      );

      await getData();   // refresh first
      closeModal();      // then close modal
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const deleteComment = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`
      );

      await getData();   // refresh first
      closeModal();      // then close modal
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="AddComment">
      <h3>Edit Comment</h3>

      <form onSubmit={handleFormSubmit}>
        <label>User:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <label>Comment:</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <button type="submit">Update</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
        <button type="button" className="delete-btn" onClick={deleteComment}>
          Delete
        </button>
      </form>
    </div>
  );
}

export default Editcom;
