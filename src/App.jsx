import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });

    setTimeout(() => setFade(true), 900);
    setTimeout(() => setLoading(false), 1600);
  }, []);

  if (loading) return <Loader fade={fade} />;

  return (
    <div className="font-poppins dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

