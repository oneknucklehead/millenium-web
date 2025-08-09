import React from "react";
import TestimonialsCard from "../../components/TestimonialsCard";
import { motion } from "framer-motion";
import TestimonialCarousel from "../../components/TestimonialCarousel";
import Container from "../../components/Container";

const testimonialsData = [
  {
    name: "Priyanka Mukherjee",
    role: "COO, Horizon Logistics",
    image: "https://via.placeholder.com/40",
    text: "Millenium Global brought a fresh perspective to our growth challenges. We saw a 35% increase in operational efficiency within the first quarter.",
    rating: 4.9,
  },
  {
    name: "Abhijeet Dasani",
    role: "Director, Finora Capital",
    image: "https://via.placeholder.com/40",
    text: "From strategy to execution, Millenium Global delivered. The UI revamp not only elevated our brand presence but improved our lead conversion.",
    rating: 4.7,
  },
  {
    name: "Riva Singhania",
    role: "Founder, Visionary Edge",
    image: "https://via.placeholder.com/40",
    text: "They understood our business inside out and crafted solutions that aligned perfectly with our goals.",
    rating: 4.8,
  },
  {
    name: "Abhijeet Dasani",
    role: "Director, Finora Capital",
    image: "https://via.placeholder.com/40",
    text: "From strategy to execution, Millenium Global delivered. The UI revamp not only elevated our brand presence but improved our lead conversion.",
    rating: 4.7,
  },
  {
    name: "Riva Singhania",
    role: "Founder, Visionary Edge",
    image: "https://via.placeholder.com/40",
    text: "They understood our business inside out and crafted solutions that aligned perfectly with our goals.",
    rating: 4.8,
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
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 mt-2">
            {/* Left Content */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                What Our Clients Say About <br /> Working With Us
              </h2>
            </motion.div>

            {/* Right Content */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-gray-600 max-w-md text-sm md:text-base"
            >
              Real experiences from businesses we've helped grow through
              strategic insight and tailored consulting solutions.
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
