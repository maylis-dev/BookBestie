import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import Bookspage from "./page/Bookspage";
import Bookdetails from "./page/Bookdetails";
import Editcom from "./components/Editcom";
import Romancepage from "./page/Romancepage";

import Nonfictionpage from "./page/Nonfictionpage";

import Fictionpage from "./page/Fictionpage";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
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
