import axios from "axios";
import { use, useEffect, useState } from "react";
import ProjectBook from "../components/ProjectBook";
import { Link } from "react-router-dom";

function Bookspage() {
  const [allBooks, setAllBooks] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/books`);
      console.log(response);
      setAllBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (allBooks === null) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="allbookscontainers">
        <div className="headerbook">
           <Link to="/">
        <button>Home</button>
      </Link>
            <h4>All Books</h4>
            <Link to = "/about">
            <button>About</button></Link>
        </div>
<div className="allbookscontainer">
  <div className="booklist">
    {allBooks.map((eachBooks) => {
        return <ProjectBook key = {eachBooks.id} eachBooks= {eachBooks}/>//eachProject={eachProject}/> // {...eachProject}
      })}
      </div>
  </div>

  
  </div>
  )
}

export default Bookspage;
