import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Highlights from "./pages/Highlights.jsx";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
     <Toaster position="bottom-right" reverseOrder={false} />
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
