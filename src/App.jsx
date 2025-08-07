import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Shirt from "./pages/Shirt"
import Hoodie from "./pages/Hoodie"
import TShirt from "./pages/T_Shirt"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirt" element={<Shirt />} />
        <Route path="/hoodie" element={<Hoodie />} />
        <Route path="/tshirt" element={<TShirt />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection" element={<Collection />} />

      </Routes>
    </>
  );
}

export default App;

