import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Aboutus from "./pages/Aboutus";
import Portfolio from "./components/Portfolio";
import Kids from "./components/Kids";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Footer" element={<Footer />} />

      </Routes>
    </>
  );
}

export default App;
