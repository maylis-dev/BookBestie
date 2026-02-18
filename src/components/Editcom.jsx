import { useState, useEffect } from "react";
import axios from "axios";

function Editcom({ commentId, bookId, getData, closeModal }) {
  const [user, setUser] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`)
      .then((res) => {
        setUser(res.data.user);
        setReview(res.data.review);
      })
      .catch((err) => console.log(err));
  }, [commentId]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`,
        { user, review, bookId: Number(bookId) }
      );

      getData();     // rafraîchit les commentaires
      closeModal();  // ferme la popup
    } catch (err) {
      console.log(err);
    }
  };

  const deleteComment = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`
      );

      getData();
      closeModal();
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
        <button type="button" onClick={deleteComment}>
          Delete
        </button>
      </form>
    </div>
  );
}

export default Editcom;
