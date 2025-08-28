import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Aboutus from "./pages/Aboutus";
import Portfolio from "./components/Portfolio";
import Hinduwedding from "./components/Hinduwedding";
import Blogs from "./components/Blogs"
import Kidspage from "./pages/Kidspage";
import Traditional from "./components/Traditional";
import Christian from "./components/Christian"
import Muslim from "./components/Muslim"
import Footer from "./components/Footer";
import PreWedding from "./components/Prewedding";
import Engagement from "./components/Engagement";
import Outdoor from "./components/Outdoor";



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
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/wedding/traditional" element={<Traditional />} />
        <Route path="/wedding/christian" element={<Christian />} />
        <Route path="/wedding/muslim" element={<Muslim />} />
        <Route path="/wedding/prewedding" element={<PreWedding />} />
        <Route path="/wedding/engagement" element={<Engagement />} />
        <Route path="/wedding/outdoor" element={<Outdoor />} />






        
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
