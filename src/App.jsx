import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Highlights from "./pages/Highlights.jsx";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
     <div className="bg-black text-white min-h-screen">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/highlights" element={<Highlights />} />
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
