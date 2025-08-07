import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import BusinessWings from "./pages/BusinessWings";
import Projects from "./pages/Projects";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import GetInTouch from "./pages/GetInTouch";
import AllTestimonials from "./components/AllTestimonials";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/business-wings" element={<BusinessWings />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/testimonials" element={<AllTestimonials />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
