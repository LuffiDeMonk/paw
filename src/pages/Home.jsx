import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import Collection from "../components/Collection";
import NewsLetter from "../components/NewsLetter";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Collection />
      <NewsLetter />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
