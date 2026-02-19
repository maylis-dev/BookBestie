
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();

  const categories = ["all", "fiction", "non-fiction", "romance"];

  const handleCategoryClick = (category) => {
    setShowCategories(false);
    if (category === "all") {
      navigate("/bookspage");
    } else if (category === "romance") {
      navigate("/Romance"); // romance
    } else if (category === "non-fiction") {
      navigate("/Nonfiction"); 
    }else if (category === "fiction") {
      navigate("/Fiction"); 
    }
    
    
  };

  return (
    <div className="navigation">
      <div className="container">
        <div className="buttons">
      

          <div className="discover">
            <div onClick={() => setShowCategories(!showCategories)}>
              discover
            </div>
            {showCategories && (
              <div className="category-menu">
                {categories.map((cat) => (
                  <div key={cat} onClick={() => handleCategoryClick(cat)}>
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="about">about</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
