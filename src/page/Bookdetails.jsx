import { Link, useParams } from "react-router-dom";
import taskreveiw from "../components/taskreview";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";

function Bookdetails() {
  const params = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/books/${params.bookId}`,
        //`${import.meta.env.VITE_SERVER_URL}/projects/${params.projectId}?_embed=tasks`,
      );
      console.log(response);
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (book === null) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="bookdetails">
      <div className="navbook">
        <div className="headerbookinfo">
          <Link to="/">
            <button>home</button>
          </Link>
          <h4>all bookinfo</h4>
          <Link to="/about">
            <button>about</button>
          </Link>
        </div>
      </div>
      <div className="bookinfo">
        <div className="blocksinfo">
          <div>
            <img src={book.image} alt="" />
          </div>
          <div className="textbook">
            <h1>{book.title}</h1>
            <p>
              {book.author}, {book.category}
            </p>
            <div className="synopsis-block ">
              <p>{book.synopsis}</p>
            </div>

            <p></p>
          </div>
        </div>

     <div className="comments">
  <div className="commentintro">
    <h1>comments</h1>
    <button>create</button>
  </div>
  <div className="userreviews">
    {book.review ? (
      <div className="review">
        <p>
          <strong>{book.review.reviewerName}</strong>
          {book.review.rating && <> rated it {book.review.rating}⭐</>}
        </p>
        <p>{book.review.comment}</p>
      </div>
    ) : (
      <p>No reviews yet.</p>
    )}
  </div>
</div>

      </div>

      <h1></h1>
    </div>
  );
}

export default Bookdetails;
