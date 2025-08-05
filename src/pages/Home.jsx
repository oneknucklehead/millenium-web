import React from "react";
import HomeCarousel from "../sections/Home/HomeCarousel";
import Ticker from "../components/Ticker";
import WhyMillenium from "../sections/Home/WhyMillenium";
import ServicesGrid from "../sections/Home/ServicesGrid";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <Ticker />
      <WhyMillenium />
      <ServicesGrid />
    </div>
  );
};

export default Home;
