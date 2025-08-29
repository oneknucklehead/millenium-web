import React from "react";
import HomeCarousel from "../sections/Home/HomeCarousel";
import Ticker from "../components/Ticker";
import WhyMillenium from "../sections/Home/WhyMillenium";
import ServicesGrid from "../sections/Home/ServicesGrid";
import Solutions from "../sections/Home/Solutions";
import Clients from "../sections/Home/Clients";
import Testimonials from "../sections/Home/Testimonials";
import WorkingProcess from "../sections/Home/WorkingProcess";
const services = [
  "Employee Transportation",
  "Corporate Car Rental",
  "Logistics Services",
  "Workspace Management",
  "HR Consultancy",
  "Telecom Infrastructure Services",
];
const Home = () => {
  return (
    <div className="overflow-hidden">
      <HomeCarousel />
      <Ticker services={services} />
      <WhyMillenium />
      <ServicesGrid />
      <WorkingProcess />
      <Solutions />
      <Clients />
      <Testimonials />
    </div>
  );
};

export default Home;
