import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nabvar from "./components/navbar";
import Homepage from "./page/homepage";
import Aboutpage from "./page/Aboutpage";
import Bookspage from "./page/bookspage";
import Bookdetails from "./page/Bookdetails";
import Editcom from "./components/editcom";
import Romancepage from "./page/Romancepage";

import Nonfictionpage from "./page/nonfictionpage";

import Fictionpage from "./page/Fictionpage";
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
        <Route path="/bookspage/:bookId" element={<Bookdetails />} />
        <Route
          path="/books/:bookId/comments/:commentId/edit"
          element={<Editcom />}
        />
        <Route path="/Romance" element={<Romancepage />} />
        <Route path="/Nonfiction" element={<Nonfictionpage />}/>
        <Route path="/Fiction" element={<Fictionpage />}/>
      </Routes>
    </>
  );
}

export default App;
