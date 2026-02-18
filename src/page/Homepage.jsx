import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Homepage() {
  const [bestBooks, setBestBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/books`);
      setBestBooks(response.data.slice(0, 4)); // first 4 books
    } catch (error) {
      console.log("Failed to fetch books:", error);
    }
  };

  return (
    <div className="homepage">
      <div className="blocks">
        <div className="block1">
          <h1>REPAIR WITH BOOKS</h1>
        </div>

        <div className="block2">
          <div className="titre">
            <h2>Book of the Month</h2>
          </div>

          <div className="booksmonth" style={{ display: "flex", gap: "10px" }}>
            {bestBooks.map((book) => (
              <Link key={book.id} to={`/bookspage/${book.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={book.image}
                    alt={book.title}
                    style={{ width: "150px", height: "220px", objectFit: "cover" }}
                  />
                  <p>{book.title}</p>
                  <p>{book.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
