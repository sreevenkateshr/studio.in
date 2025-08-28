import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Aboutus from "./pages/Aboutus";
import Portfolio from "./components/Portfolio";
import Hinduwedding from "./components/Hinduwedding";
import Kidspage from "./pages/Kidspage";
import Footer from "./components/Footer";

// portfolio category pages
// later you can add Tamilwedding, Teluguwedding, Christianwedding, etc.

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kidspage" element={<Kidspage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/portfolio" element={<Portfolio />} />
        
        {/* portfolio detail routes */}
         <Route path="/portfolio/Hinduwedding" element={<Hinduwedding />} /> 
        {/* add others here:
            <Route path="/portfolio/tamil-wedding" element={<Tamilwedding />} />
            <Route path="/portfolio/telugu-wedding" element={<Teluguwedding />} />
            <Route path="/portfolio/christian-wedding" element={<Christianwedding />} />
        */}

        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
