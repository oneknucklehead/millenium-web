import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/Images/steps/1.png";
import img2 from "../../assets/Images/steps/2.png";
import img3 from "../../assets/Images/steps/3.png";
import img4 from "../../assets/Images/steps/4.png";

import carMini from "../../assets/Images/carMini.png";
import car2 from "../../assets/Images/car2.png";
import Container from "../../components/Container";

const steps = [
  {
    id: "STEP 1",
    img: img1,
    title: "Request Quote",
    desc: "Submit requirements, receive tailored corporate transport quotation in 24 hours.",
  },
  {
    id: "STEP 2",
    img: img2,
    title: "Route Planning",
    desc: "AI-driven route mapping optimized for time, safety, and cost efficiency.",
  },
  {
    id: "STEP 3",
    img: img3,
    title: "Fleet Allocation",
    desc: "Assign dedicated EV cab fleet per passenger volume and compliance.",
  },
  {
    id: "STEP 4",
    img: img4,
    title: " Payment & Launch",
    desc: "Activate corporate transport service with 24×7 support and real-time tracking.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="bg-white  py-8">
      <Container className=" px-4 py-10">
        {/* Heading */}
        <div className=" px-4 text-center">
          <p className="text-primary tracking-wide text-lg font-semibold mb-2">
            Working Process
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Corporate Transport: <br className="hidden md:block" />
            4-Step Dedicated Cab Fleet Setup
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience hassle-free employee commute with our AI-optimized,
            EV-powered dedicated cab fleet—serving Delhi NCR, Mumbai, Kolkata,
            Chennai and Pan-India locations.
          </p>
        </div>
        {/* STEP OWN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
          {/* <div className="bg-primary -mt-[6px] border-4 border-secondary rounded-full w-4 h-4"></div> */}

          {steps.map((step, index) => (
            <div className="flex flex-col mx-[2px] h-fit" key={index}>
              {/* TOP BORDER */}
              <div className=" border-t-2 border-dashed border-gray-300 w-full"></div>
              {/* MID BORDER */}
              <div className="flex justify-center">
                <div className=" border-l-2 h-[100px] border-dashed border-gray-300 mx-2"></div>
              </div>
              {/* STEP COUNTER */}
              <div className="flex justify-center items-center">
                <span className="bg-primary-alt px-4 py-2 rounded-lg font-semibold text-primary">
                  {step.id}
                </span>
              </div>
              {/* CARD */}
              <motion.div
                className="lg:max-w-xs bg-white p-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <img
                  src={step.img}
                  alt="Payment"
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* Text content */}
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
          {/* <div className="bg-primary -mt-[6px] border-4 border-secondary rounded-full w-4 h-4"></div> */}
        </div>

        {/* Call to Action */}
        <div className="flex mx-auto w-full justify-center px-4 sm:px-6">
          <motion.div
            className="relative my-10 sm:my-16 flex flex-col sm:flex-row items-center w-full sm:w-fit justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left - Blinker + Text */}
            <div className="flex  rounded-lg px-6 sm:px-10 py-4 sm:py-3 bg-primary items-center space-x-3 sm:space-x-4">
              <div className="relative flex items-center justify-center shrink-0">
                {/* Ripple Effect */}
                <motion.div
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200"
                  animate={{
                    scale: [1, 2],
                    opacity: [0.6, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <motion.div
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200"
                  animate={{
                    scale: [1, 2],
                    opacity: [0.6, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.75,
                  }}
                />
                {/* Icon Circle */}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-100 z-10">
                  <img src={carMini} alt="Blinker" className="h-6 sm:h-10" />
                </div>
              </div>

              {/* Text */}
              <span className="text-white font-extrabold text-lg lg:text-2xl text-center sm:text-left leading-snug">
                For bookings please call us on{" "}
                <span className="font-extrabold">9999842400</span>
              </span>
            </div>

            {/* Right - Car Image Animation */}
            <motion.img
              src={car2}
              alt="Car"
              className="hidden md:block absolute sm:static mt-6 sm:mt-0 sm:-ml-6 object-contain w-40 sm:w-60 md:w-72"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 10 }}
              viewport={{ once: true, amount: 0.2 }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
