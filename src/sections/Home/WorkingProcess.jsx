import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/Images/steps/1.png";
import img2 from "../../assets/Images/steps/2.png";
import img3 from "../../assets/Images/steps/3.png";
import img4 from "../../assets/Images/steps/4.png";

import carMini from "../../assets/Images/carMini.png";
import car2 from "../../assets/Images/car2.png";

const steps = [
  {
    id: "STEP 01",
    img: img1,
    title: "Discovery Call",
    desc: "Understand your goals and market to build a strong foundation.",
  },
  {
    id: "STEP 02",
    img: img2,
    title: "Requirement Quotation",
    desc: "Craft a clear roadmap and implement strategies efficiently.",
  },
  {
    id: "STEP 03",
    img: img3,
    title: "Cabs at your service",
    desc: "We deliver consistent support for your ongoing business success.",
  },
  {
    id: "STEP 04",
    img: img4,
    title: "Payment",
    desc: "Monitor results and improve strategies for better performance.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="bg-white py-16">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-orange-500 font-medium mb-2">Working Process</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Simple 4 Step Process to get <br className="hidden md:block" />
          Dedicated Cab Fleet
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We follow a well-structured, results-driven process to ensure seamless
          execution and outstanding outcomes. From in-depth research to final
          implementation, every step is designed to drive business success.
        </p>
      </div>
      {/* STEP OWN */}
      <div className="flex justify-center items-start flex-wrap">
        {steps.map((step, index) => (
          <div className="flex flex-col mx-[2px]" key={index}>
            {/* TOP BORDER */}
            <div className=" border-t-2 border-dashed border-gray-300 mx-2 w-full"></div>
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
              className="max-w-xs bg-white p-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={step.img}
                alt="Payment"
                className="w-full h-48 object-cover rounded-t-xl"
              />

              {/* Text content */}
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="relative flex items-center justify-between w-full bg-primary rounded-full px-6 py-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left - Blinker */}
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center">
            {/* Ripple Effect */}
            <motion.div
              className="absolute w-12 h-12 rounded-full bg-gray-200"
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
              className="absolute w-12 h-12 rounded-full bg-gray-200"
              animate={{
                scale: [1, 2],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.75, // offset for second ripple
              }}
            />

            {/* Icon Circle */}
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 z-10">
              <img src={carMini} alt="Blinker" className="h-10" />
            </div>
          </div>

          {/* Text */}
          <span className="text-white font-bold text-lg">
            For bookings please call us on{" "}
            <span className="font-extrabold">9999842400</span>
          </span>
        </div>

        {/* Right - Car Image Animation */}
        <motion.img
          src={car2}
          alt="Car"
          className="absolute right-0 object-contain"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      </motion.div>
    </section>
  );
}
