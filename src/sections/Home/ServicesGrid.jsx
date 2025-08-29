import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

import events from "../../assets/Images/services/Events.webp";
import facility from "../../assets/Images/services/FacilityManagement.webp";
import hr from "../../assets/Images/services/HR-Recruiter-Job-Description.webp";
import logistics from "../../assets/Images/services/Logistics.webp";
import telecom from "../../assets/Images/services/Telecom.webp";
import employeeRransportation from "../../assets/Images/services/EmployeeRransportation.webp";

const services = [
  {
    title: "Telecom Solutions",
    description:
      "Comprehensive 4G/5G Network Rollout and Optimization services across Pan‑India regions.",
    image: telecom,
    cta: "/services/telecom",
  },
  {
    title: "Employee Transport",
    description:
      "Automated EV‑powered Employee Transport Solutions ensuring safety and efficiency nationwide.",
    image: employeeRransportation,
    cta: "/services/employee",
  },
  {
    title: "3PL Logistics",
    description:
      "End‑to‑end 3PL Logistics, first/last‑mile and reverse operations across Pan‑India hubs.",
    image: logistics,
    cta: "/services/logistics",
  },
  // Duplicating to match 6 cards like in the image
  {
    title: "Facility Management",
    description:
      "Integrated Facility Management services including soft, security, and support nationwide.",
    image: facility,
    cta: "/services/workspace",
  },
  {
    title: " Event Management",
    description:
      "Full‑spectrum MICE and Corporate Event Management services with turnkey execution.",
    image: events,
    cta: "/services/events",
  },
  {
    title: "HR Recruitment",
    description:
      "Specialized Telecom Recruitment, RPO services driving talent acquisition across India.",
    image: hr,
    cta: "/services/workspace",
  },
];

export default function ServicesGrid() {
  return (
    <div className="bg-secondary text-white py-8">
      <Container className="px-4 md:px-10 py-10">
        <div className="text-center mb-12">
          <p className="text-primary text-xl font-semibold">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Unlock Business Growth with <br /> Expert Services
          </h2>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-5 text-black rounded-xl shadow-md overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover rounded-xl"
              />
              <div className="pt-5 flex flex-col gap-2 flex-grow">
                <h3 className="font-semibold text-xl">{service.title}</h3>
                <p className="text-sm text-[#666666] font-medium flex-grow">
                  {service.description}
                </p>
                <Link to={service.cta}>
                  <button className="text-sm w-fit cursor-pointer font-medium text-black group hover:text-primary inline-flex items-center gap-1 mt-2">
                    <p>Discover More</p>
                    <span className="text-white bg-black group-hover:bg-primary rounded-full p-[3px]">
                      <ArrowRight size={14} />
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
