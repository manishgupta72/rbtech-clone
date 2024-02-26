import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import Footer from "./components/Footer";
import OurWork from "../src/pages/OurWork";

import Home from "./Home";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Router>
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourwork" element={<OurWork />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
