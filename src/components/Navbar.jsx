
import { Link } from "react-router-dom"; 

function Navbar() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="buttons">
          <Link to="/" className="explore">explore</Link>
          <Link to="/bookspage" className="discover">discover</Link>
          <Link to="/about" className="about">about</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
