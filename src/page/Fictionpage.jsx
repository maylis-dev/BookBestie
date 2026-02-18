import axios from "axios";
import { useEffect, useState } from "react";
import ProjectBook from "../components/ProjectBook";
import { Link } from "react-router-dom";

function Fictionpage() {
  const [fictionBooks, setFictionBooks] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/books`);
      console.log(response);

      // filter books by non-fiction category
      const filteredBooks = Array.isArray(response.data)
        ? response.data.filter((book) => book.category === "fiction")
        : [];

      setFictionBooks(filteredBooks);
    } catch (error) {
      console.log(error);
      setFictionBooks([]); 
    }
  };

  if (fictionBooks === null) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="allbookscontainer">
      <div className="headerbook">
        <Link to="/">
          <button>Home</button>
        </Link>
        <h4>Fiction</h4>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>

      <div className="booklist">
        {fictionBooks.map((eachBook) => (
          <ProjectBook key={eachBook.id} eachBooks={eachBook} />
        ))}
      </div>
    </div>
  );
}

export default Fictionpage;
