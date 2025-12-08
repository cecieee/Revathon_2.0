import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Revathon1 from "./pages/Revathon1";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/revathon-1" element={<Revathon1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
