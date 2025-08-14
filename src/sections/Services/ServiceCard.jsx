import React from "react";
import { motion } from "framer-motion";
import teamImage from "../../assets/Images/team.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({
  teamImg = teamImage,
  bg = "primary",
  reverse = false,
  title = "Service Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  cta = "/services/telecom",
}) => {
  return (
    <div
      className={`relative mx-auto grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-6 p-6 md:p-12 h-full w-full bg-${bg} shadow-lg rounded-lg`}
    >
      {/* TEXT SECTION */}
      <div
        className={`${
          reverse ? "order-2 md:order-2" : "order-2 md:order-1"
        } text-white z-10 flex flex-col justify-center`}
      >
        <h1 className="text-3xl md:text-4xl font-bebas mb-4">{title}</h1>
        <p className="text-sm leading-relaxed">{description}</p>
        <Link
          to={cta}
          className={`group mt-4 transition duration-300 w-fit px-4 py-2 rounded-lg inline-flex border hover:bg-white hover:text-${bg} items-center gap-2 text-sm font-semibold text-white`}
        >
          <p>Learn More</p>
          <span>
            <ArrowRight
              size={24}
              className={`transition duration-300 p-1 text-${bg} group-hover:text-white group-hover:bg-${bg} bg-white rounded-full`}
            />
          </span>
        </Link>
      </div>

      {/* IMAGE SECTION */}
      <div
        className={`${
          reverse ? "order-1 md:order-1" : "order-1 md:order-2"
        } relative flex justify-center`}
      >
        <motion.img
          src={teamImg}
          alt="team"
          className="relative z-10 rounded-xl shadow-lg border-4 border-white object-cover -mt-18 md:-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
