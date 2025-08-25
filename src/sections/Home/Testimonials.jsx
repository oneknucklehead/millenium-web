import React from "react";
import TestimonialsCard from "../../components/TestimonialsCard";
import { motion } from "framer-motion";
import TestimonialCarousel from "../../components/TestimonialCarousel";
import Container from "../../components/Container";

const testimonialsData = [
  {
    name: "Ravi Mehta",
    role: "TCS",
    image: "https://via.placeholder.com/40",
    text: "Millenium’s employee transport fleet transformed our daily operations with punctual pickups, real-time tracking, and top-tier safety compliance.",
    rating: 4.9,
  },
  {
    name: "Ananya Roy",
    role: "Bharti Airtel",
    image: "https://via.placeholder.com/40",
    text: "Their telecom rollout team handled our 5G deployment in record time efficient, reliable, and seamlessly executed across multiple cities.",
    rating: 4.7,
  },
  {
    name: "Deepak Sharma",
    role: "Teleperformance",
    image: "https://via.placeholder.com/40",
    text: "Millenium’s night cab services are a blessing zero complaints, prompt support, and full compliance across all our BPO shifts.",
    rating: 5.0,
  },
  {
    name: "Neha Ghosh",
    role: "Samsung India",
    image: "https://via.placeholder.com/40",
    text: "Exceptional handling of telecom infrastructure upgrades BTS, IBS and MW setup done with clean execution and proactive communication throughout.",
    rating: 4.6,
  },
  {
    name: "Vinod Krishnan",
    role: "NIIT",
    image: "https://via.placeholder.com/40",
    text: "Impressed by their green mobility push our employees love the EV commute, and we’ve reduced costs & emissions significantly.",
    rating: 4.8,
  },
  {
    name: "Shruti Desai",
    role: "PWC India",
    image: "https://via.placeholder.com/40",
    text: "Their MICE event services were professional, creative, and flawlessly organized great experience from logistics to on-site management.",
    rating: 4.7,
  },
];

const Testimonials = () => {
  return (
    <div className="py-8">
      <Container className=" px-4 py-10">
        <section className="w-full py-10">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <p className="text-lg text-primary font-semibold">
                Client Testimonials
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid md:flex md:justify-between gap-6 mt-2">
            {/* Left Content */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                What Our Clients Say About Us
              </h2>
            </motion.div>

            {/* Right Content */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-gray-600 max-w-md text-sm md:text-base"
            >
              Real reviews from India’s leading enterprises who trust Millenium
              Global for their transport, telecom, and facility management needs
              nationwide.
            </motion.p>
          </div>
        </section>
        <div className="">
          <TestimonialCarousel testimonials={testimonialsData} />
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
