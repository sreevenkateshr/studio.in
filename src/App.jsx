import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </>
  );
}

export default App;
