import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import Services from "../Services/Services";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <div className="bg-accent">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
    </div>
  );
};

export default Home;
