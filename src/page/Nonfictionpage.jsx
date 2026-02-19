import axios from "axios";
import { useEffect, useState } from "react";
import ProjectBook from "../components/ProjectBook";
import { Link } from "react-router-dom";

function Nonfictionpage() {
  const [nonfictionBooks, setNonfictionBooks] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/books`,
      );
      console.log(response);

      // filter books by non-fiction category
      const filteredBooks = Array.isArray(response.data)
        ? response.data.filter((book) => book.category === "non-fiction")
        : [];

      setNonfictionBooks(filteredBooks);
    } catch (error) {
      console.log(error);
      setNonfictionBooks([]);
    }
  };

  if (nonfictionBooks === null) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="allbookscontainers">
      <div className="headerbook">
        <Link to="/">
          <button>Home</button>
        </Link>
        <h4>Non-Fiction</h4>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
      <div className="allbookscontainer">
        <div className="booklist">
          {nonfictionBooks.map((eachBook) => (
            <ProjectBook key={eachBook.id} eachBooks={eachBook} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nonfictionpage;
