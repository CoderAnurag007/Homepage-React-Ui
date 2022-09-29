import React from "react";
import "./Main.css";
import Tags from "../Tags Section/Tags";
import Services from "../Services/Services";
import Working from "../Working/Working";
import Doubt from "../Doubt/Doubt";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Land from "../Land/Land";

const Main = () => {
  return (
    <div className="land-page">
      <Land />
      <Tags />
      <Services />
      <Working />
      <Doubt />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
