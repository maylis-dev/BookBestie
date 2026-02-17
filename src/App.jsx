import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nabvar from "./components/navbar";
import Homepage from "./page/homepage";
import Aboutpage from "./page/Aboutpage";
import Bookspage from "./page/bookspage";
import Bookdetails from "./page/Bookdetails";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nabvar />
              <Homepage />
            </>
          }
        />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/bookspage" element={<Bookspage />} />
        <Route path = "/bookspage/:bookId" element = {<Bookdetails/>}/>
        

      </Routes>
    </>
  );
}

export default App;
