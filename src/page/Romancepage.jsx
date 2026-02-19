import axios from "axios";
import { useEffect, useState } from "react";
import ProjectBook from "../components/ProjectBook";
import { Link } from "react-router-dom";

function Romancepage() {
  const [romanceBooks, setRomanceBooks] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/books`,
      );
      console.log(response);

      // filter books by romance category
      const filteredBooks = Array.isArray(response.data)
        ? response.data.filter((book) => book.category === "romance")
        : [];

      setRomanceBooks(filteredBooks);
    } catch (error) {
      console.log(error);
      setRomanceBooks([]);
    }
  };

  if (romanceBooks === null) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="allbookscontainers">
      <div className="headerbook">
        <Link to="/">
          <button>Home</button>
        </Link>
        <h4>Romance</h4>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
      <div className="allbookscontainer">
        <div className="booklist">
          {romanceBooks.map((eachBook) => (
            <ProjectBook key={eachBook.id} eachBooks={eachBook} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Romancepage;
