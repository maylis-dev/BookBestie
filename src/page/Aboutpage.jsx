import { Link } from "react-router-dom";

function Aboutpage() {
  return (
    <div>
      <div className="navigationabout">
      <Link to="/">
        <button>home</button>
      </Link>
      <h4>about page</h4>
      <Link to="/about">
        <button>about</button>
      </Link>
      </div>

      <div className="containerabout">
        <div>
          
          
          <div className ="textreview">

            <h4>my review </h4>
            </div>
          <div className = "myreviews">
            <button>delete</button>
            <button>modify</button>
          <p>jggthuhyhiy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
