import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Properties from "./Pages/Properties/Properties";
import PropertyDetails from "./Pages/Property Details/PropertyDetails";
import ContactUs from "./Pages/Contact Us/ContactUs";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/task1" element={<Home />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Property Details" element={<PropertyDetails />} />
        <Route path="/Contact Us" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
