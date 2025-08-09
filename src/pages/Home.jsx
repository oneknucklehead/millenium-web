import React from "react";
import HomeCarousel from "../sections/Home/HomeCarousel";
import Ticker from "../components/Ticker";
import WhyMillenium from "../sections/Home/WhyMillenium";
import ServicesGrid from "../sections/Home/ServicesGrid";
import Solutions from "../sections/Home/Solutions";
import Clients from "../sections/Home/Clients";
import Testimonials from "../sections/Home/Testimonials";
import Footer from "../components/Footer";
import WorkingProcess from "../sections/Home/WorkingProcess";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <Ticker />
      <WhyMillenium />
      <ServicesGrid />
      <WorkingProcess />

      {/* ADD WORKING PROCESS HERE */}
      <Solutions />
      <Clients />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
