import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Wishlists from "./pages/Wishlists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wishlists" element={<Wishlists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
