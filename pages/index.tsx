import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import NavMovile from "../components/NavMovile";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Price from "../components/Price";
import Reviews from "../components/Reviews";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <NavMovile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Project />
      <Price />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
