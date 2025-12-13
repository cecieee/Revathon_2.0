import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Revathon1 from "./pages/Revathon1.jsx";
import Highlights from "./pages/Highlights.jsx";

function App() {
  return (
    <BrowserRouter>
     <div className="bg-black text-white min-h-screen">

      <Routes>
        <Route path="/revathon-1" element={<Revathon1 />} />
        <Route path="/" element={<Home />} />
        <Route path="/highlights" element={<Highlights />} />
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
