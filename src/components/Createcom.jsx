import axios from "axios";
import { useState } from "react";

function Createcom({ bookId, getData, closeModal }) {
  const [user, setUser] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      user: user,
      review: review,
      bookId: bookId,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/comments`,
        body
      );

      getData();        
      closeModal();     // ferme popup

      setUser("");
      setReview("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddComment">
      <h3>Add New Comment</h3>

      <form onSubmit={handleSubmit}>
        <label>User:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />

        <label>Comment:</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />

        <button type="submit">Add</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Createcom;
