import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import bannerImage from "../assets/Images/about/hero.webp";
import img1 from "../assets/Images/about/1.png";
import img2 from "../assets/Images/about/2.png";
import img3 from "../assets/Images/about/3.png";

import tcs from "../assets/Images/about/clients/1.png";
import pwc from "../assets/Images/about/clients/2.png";
import kpmg from "../assets/Images/about/clients/3.png";
import airtel from "../assets/Images/about/clients/4.png";
import jio from "../assets/Images/about/clients/5.png";
import ericsson from "../assets/Images/about/clients/6.png";
import teleperformance from "../assets/Images/about/clients/7.png";
import niit from "../assets/Images/about/clients/8.png";
import samsung from "../assets/Images/about/clients/9.png";
import isb from "../assets/Images/about/clients/11.png";
import vi from "../assets/Images/about/clients/10.png";
import hughes from "../assets/Images/about/clients/14.png";
import indus from "../assets/Images/about/clients/15.png";
import sunn from "../assets/Images/about/clients/13.png";
import hfcl from "../assets/Images/about/clients/12.png";
import godrej from "../assets/Images/about/clients/16.png";

import cert1 from "../assets/Images/about/certificates/cert1.webp";
import cert2 from "../assets/Images/about/certificates/cert2.webp";
import cert3 from "../assets/Images/about/certificates/cert3.webp";

const logos = [
  tcs,
  pwc,
  kpmg,
  airtel,
  jio,
  ericsson,
  teleperformance,
  niit,
  samsung,
  isb,
  vi,
  hfcl,
  hughes,
  indus,
  sunn,
  godrej,
];
import {
  RadioTower,
  Bus,
  Package,
  Users,
  Building2,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    // icon: <RadioTower className="w-5 h-5 text-blue-700" />,
    icon: "🛰️",
    text: "Telecom Solutions",
  },
  {
    // icon: <Bus className="w-5 h-5 text-yellow-500" />,
    icon: "🚖",
    text: "Employee Transport",
  },
  {
    // icon: <Package className="w-5 h-5 text-orange-500" />,
    icon: "📦",
    text: "3PL & Logistics",
  },
  {
    // icon: <Users className="w-5 h-5 text-red-500" />,
    icon: "👥",
    text: "HR & Recruitment",
  },
  {
    // icon: <Building2 className="w-5 h-5 text-gray-500" />,
    icon: "🏢",
    text: "Workspace Management",
  },
  {
    // icon: <CalendarCheck className="w-5 h-5 text-purple-500" />,
    icon: "🎤",
    text: "Event & MICE Management",
  },
];
const missionVision = [
  {
    title: "Our Mission",
    description:
      "To provide single-window corporate solutions across Telecom, Logistics, Employee Transport, Workspace Management, HR, and Events, delivering scalable, technology-driven, and value-added services to MNCs and enterprises across India and beyond.",
    bgColor: "bg-primary",
    titleUnderline: "bg-secondary",
    textColor: "text-white",
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted and innovative partner for businesses seeking operational excellence, driving a connected and efficient future through our diverse service verticals across India and beyond.",
    bgColor: "bg-secondary",
    titleUnderline: "bg-primary",
    textColor: "text-white",
  },
];
const cardData = [
  {
    title: "Pan-India Service Reach",
    description:
      "From Delhi NCR to Chennai, we operate across metros and Tier-2 cities with full operational depth.",
    bg: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "EV-Powered Transport Fleet",
    description:
      "Leading India’s green commute revolution with electric vehicles and smart routing systems.",
    bg: "bg-secondary",
    textColor: "text-white",
  },
  {
    title: "100% Compliance & Safety",
    description:
      "From Telecom Rollouts (OHS, EMF & QA standards) to Employee Transport (safety, licensing & legal compliance), every project meets strict national and client regulations.",
    bg: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Trusted by Telecom Giants",
    description:
      "Serving Jio, Airtel, Samsung, Ericsson, Nokia, and more with on-time, scalable telecom deployment.",
    bg: "bg-secondary",
    textColor: "text-white",
  },
];
const About = () => {
  return (
    <div className="pt-[80px] overflow-hidden">
      <Container className="px-4 py-12 ">
        <motion.section
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h3 className="text-primary text-xl md:text-3xl font-extrabold uppercase ">
            About Us
          </h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-4">
            Who We Are
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Millenium Global, a division of the Millenium Group of Companies,
            was founded in 2014 in Gurgaon by a team of seasoned ICT
            professionals. What started as a vision to serve the growing demands
            of the Indian Telecom Sector has today evolved into a Pan-India
            powerhouse for Telecom Infrastructure Services, Corporate Employee
            Transport Solutions, Logistics Solutions, HR Recruitment, Facility
            Management, and Event Management Services.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            With a commitment to client-centric innovation, 100% compliance, and
            green mobility, we deliver tailored, scalable solutions powered by
            an outsourced business model and cutting-edge technology.
          </p>

          {/* Button */}
          <Link
            to={"/contact"}
            className={`group transition duration-300 w-fit px-4 py-2 rounded-lg inline-flex border bg-white hover:bg-secondary hover:text-white items-center gap-2 text-sm font-semibold text-secondary`}
          >
            <p>Get in touch</p>
            <span>
              <ArrowRight
                size={24}
                className={`transition duration-300 p-1 text-white group-hover:text-secondary group-hover:bg-white bg-secondary rounded-full`}
              />
            </span>
          </Link>
        </motion.section>
        <img
          src={bannerImage}
          alt="banner"
          className="rounded-xl w-full object-cover my-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          {missionVision.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.bgColor} ${item.textColor} rounded-xl p-8 text-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Title */}
              <h3 className="text-xl md:text-3xl font-semibold mb-2">
                {item.title}
              </h3>
              {/* Underline */}
              <div
                className={`${item.titleUnderline} h-1 w-16 mx-auto mb-4`}
              ></div>
              {/* Description */}
              <p className="mt-4 md:mt-6 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-sm md:text-base my-12">
          At Millenium, we don’t just offer services - we deliver reliability,
          accountability,
          <br /> and future-ready growth for businesses across India.
        </p>
        <section className="my-12">
          <div className="border border-black rounded-xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-semibold text-black">
                What We Do
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                Core Capabilities
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                Millenium Global delivers a powerful suite of six core services,
                built to meet the needs of enterprise clients across India—from
                Delhi NCR to Mumbai, Kolkata, Chennai, Guwahati, and beyond. Our
                model is outsourced, scalable, tech-powered, and fully compliant
                with national standards.
              </p>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                Explore how we serve India’s leading industries:
              </p>

              <ul className="space-y-3 mb-6">
                {services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {service.icon}
                    <span className="text-gray-800 text-sm md:text-base">
                      {service.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-600 mb-6">
                Serving: Pan- India (Delhi NCR, Mumbai, Kolkata, Chennai,
                Hyderabad, Pune, Patna, etc.)
              </p>

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0a1f44] text-white px-5 py-2 rounded-md flex items-center gap-2 text-sm font-medium"
              >
                Explore More
                <ArrowRight size={16} />
              </motion.button> */}
              <Link
                to={"/services"}
                className={`group transition duration-300 w-fit px-4 py-2 rounded-lg inline-flex border bg-white hover:bg-secondary hover:text-white items-center gap-2 text-sm font-semibold text-secondary`}
              >
                <p>Explore More</p>
                <span>
                  <ArrowRight
                    size={24}
                    className={`transition duration-300 p-1 text-white group-hover:text-secondary group-hover:bg-white bg-secondary rounded-full`}
                  />
                </span>
              </Link>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Large tower image */}
              <img
                src={img1}
                alt="Telecom Tower"
                className="rounded-xl w-full lg:w-[70%] object-cover"
              />
              {/* Bottom left car image */}
              <img
                src={img3}
                alt="Employee Transport"
                className="absolute hidden lg:block bottom-3 left-0 w-[45%] rounded-xl border-4 border-white shadow-lg"
              />
              {/* Small top-right office image */}
              <img
                src={img2}
                alt="Workspace"
                className="absolute hidden lg:block top-6 right-0 w-[40%] rounded-xl border-4 border-white shadow-lg"
              />
            </motion.div>
          </div>
        </section>
        <section className="w-full bg-white my-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Heading */}
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-black"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.h2>

            {/* Orange underline */}
            <motion.div
              className="w-16 h-1 bg-primary mx-auto my-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />

            {/* Description */}
            <motion.p
              className="text-gray-600 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At Millenium Global, we don’t just deliver services—we create
              end-to-end experiences built on performance, precision, and
              partnerships. Here's what sets us apart across industries and
              geographies:
            </motion.p>
          </div>
        </section>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className={`rounded-xl flex flex-col justify-center p-8 ${card.bg} ${card.textColor} shadow-lg`}
                // whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-extrabold mb-4">{card.title}</h3>
                <p className="text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full my-12 bg-white">
          <div className="">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 rounded-lg flex items-center justify-center p-4 h-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <p className="max-w-5xl mx-auto text-center text-gray-600 text-sm md:text-base my-12">
          Millenium Global is the trusted partner for enterprises seeking
          scalable, future-ready solutions in telecom, transport, logistics,
          events, and facilities. Backed by 10+ years of industry leadership,
          advanced automation, and a relentless focus on quality, we’re building
          the infrastructure that keeps India moving.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 my-12">
          <a href={cert1} target="_blank" rel="noopener noreferrer">
            <img
              src={cert1}
              alt="certificate 1"
              className="w-60 cursor-pointer rounded shadow-md"
            />
          </a>

          <a href={cert2} target="_blank" rel="noopener noreferrer">
            <img
              src={cert2}
              alt="certificate 2"
              className="w-60 cursor-pointer rounded shadow-md"
            />
          </a>

          <a href={cert3} target="_blank" rel="noopener noreferrer">
            <img
              src={cert3}
              alt="certificate 3"
              className="w-60 cursor-pointer rounded shadow-md"
            />
          </a>
        </div>
        <motion.section
          className="bg-primary rounded-xl py-12 px-6 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-black">Scale Your Business?</span>
          </h2>

          {/* Paragraph */}
          <p className="max-w-3xl mx-auto text-sm md:text-base mb-4">
            We at Millenium Global provide you a powerful suite of integrated
            services tailored for enterprise efficiency, operational excellence,
            and nationwide scalability. From telecom infrastructure development
            to EV-powered employee transport, and from event management to
            logistics and facility solutions, our offerings are built to support
            growing businesses across India.
          </p>

          <p className="max-w-2xl mx-auto text-sm md:text-base mb-6">
            Request a proposal or schedule a technical call with our team to
            discuss scope, timelines, and a tailored commercial plan.
          </p>

          {/* Button */}
          <Link to={"/contact"}>
            <motion.button
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              className="bg-white cursor-pointer text-black font-medium px-5 py-2 rounded-md flex items-center gap-2 mx-auto"
            >
              Request a proposal
              <ArrowRight
                className="bg-black text-white rounded-full p-1"
                // size={18}
              />
            </motion.button>
          </Link>
        </motion.section>
      </Container>
    </div>
  );
};

export default About;
