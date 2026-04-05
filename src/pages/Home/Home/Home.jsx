import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import Services from "../Services/Services";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch('/public/data/reviews.json').then((res) =>
  res.json(),
);
const Home = () => {
  return (
    <div className="bg-accent">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
