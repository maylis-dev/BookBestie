import { Link } from "react-router-dom";

function ProjectBook ({eachBooks: {id ,title, image,}}) {
  
  return (
    <div className="ProjectBook">
     <Link to={`/bookspage/${id}`}>
      <img src={image} alt="image" />
      </Link>
      <p>{title}</p>
    </div>
  );
}

export default ProjectBook;