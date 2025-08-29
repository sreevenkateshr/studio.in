import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Aboutus from "./pages/Aboutus";
import Portfolio from "./components/Portfolio";
import Hinduwedding from "./components/Hinduwedding";
import Blogs from "./components/Blogs";
import Kidspage from "./pages/Kidspage";
import Traditional from "./components/Traditional";
import Christian from "./components/Christian";
import Muslim from "./components/Muslim";
import Footer from "./components/Footer";
import PreWedding from "./components/Prewedding";
import Engagement from "./components/Engagement";
import Outdoor from "./components/Outdoor";

// Kids Pages
import Kidshome from "./components/Kidshome";
import Kidsindoor from "./components/Kidsindoor";
import Kidsoutdoor from "./components/Kidsoutdoor";
import Kidsbirthday from "./components/Kidsbirthday";
import Kidsgallery from "./components/Kidsgallery";

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

        <Route path="/portfolio/Hinduwedding" element={<Hinduwedding />} />

        <Route path="/footer" element={<Footer />} />

         {/* Kids Routes */}
        <Route path="/kids" element={<Kidshome />} />
        <Route path="/kids/indoor" element={<Kidsindoor />} />
        <Route path="/kids/outdoor" element={<Kidsoutdoor />} />
        <Route path="/kids/birthday" element={<Kidsbirthday />} />
        <Route path="/kids/gallery" element={<Kidsgallery />} />
      </Routes>
    </>
  );
}

export default App;
