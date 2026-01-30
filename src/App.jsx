import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Highlights from "./pages/Highlights.jsx";
import ScrollToTop from "./components/ScrollToTop";
import Hackathon from "./pages/Hackathon.jsx";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
     <Toaster position="bottom-right" reverseOrder={false} />
     <div className="min-h-screen text-white bg-black">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/hackathon" element={<Hackathon />} />
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
