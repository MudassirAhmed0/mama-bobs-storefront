import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import FeaturedProducts from "./featured-products/FeaturedProducts";
import Values from "./values/Values";
import Gallery from "./gallery/Gallery";
import Testimonials from "./testimonials/Testimonials";
import Cta from "./cta/Cta";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProducts fromHome />
      <Values />
      <Gallery />
      <Testimonials />
      <Cta />
    </>
  );
};

export default HomePage;
