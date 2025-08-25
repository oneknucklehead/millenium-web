import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/Images/services/EmpTransport/banner.webp";
import Container from "../../../components/Container";
import InfoCard from "../../../components/InfoCard";
import img1 from "../../../assets/Images/services/EmpTransport/core1.webp";
import img2 from "../../../assets/Images/services/EmpTransport/core2.webp";
import imgHow from "../../../assets/Images/services/EmpTransport/how.webp";
import ScrollSlide from "../../../components/ScrollSlide";

import brand1 from "../../../assets/Images/services/EmpTransport/logos/3.webp";
import brand2 from "../../../assets/Images/services/EmpTransport/logos/4.webp";
import brand3 from "../../../assets/Images/services/EmpTransport/logos/5.webp";
import brand4 from "../../../assets/Images/services/EmpTransport/logos/6.webp";
import Ticker from "../../../components/Ticker";

const steps = [
  {
    step: "Step - 1",
    title: " Needs Assessment:",
    description:
      "We start by thoroughly understanding your company’s specific requirements, including employee routes, shift timings, safety protocols, and any unique passenger preferences.",
  },
  {
    step: "Step - 2",
    title: "Technology Deployment:",
    description:
      "Our operations are powered by an advanced transport management system that handles automated rostering, real-time GPS tracking, geo-fencing, and instant billing for full transparency and control.",
  },
  {
    step: "Step - 3",
    title: "Fleet Allocation:",
    description:
      "We strategically match the right vehicles including EV, CNG, and diesel options and our trained drivers to your needs, optimizing for both cost-efficiency and employee comfort.",
  },
  {
    step: "Step - 4",
    title: "Daily Operations & Monitoring:",
    description:
      "Our team provides continuous, real-time trip monitoring from a central command center, conducts regular performance audits, and delivers detailed monthly KPI reports to ensure service excellence.",
  },
];

const data = [
  {
    title: "Working with Top Companies:",
    description:
      "Serving BPOs, IT parks, telecom projects, and manufacturing hubs across major Indian cities.",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Special Purpose Vehicle:",
    description:
      "India’s first mobile interview shuttle successfully deployed for Teleperformance’s CSR hiring drive in Northeast India.",
    bgColor: "bg-secondary",
    textColor: "text-white",
  },
  {
    title: "Focus on EV Future:",
    description:
      "EV segment introduced to corporate fleets, lowering client transport tariffs and reducing carbon footprint.",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Always On-Time:",
    description:
      "Thousands of on-time trips completed monthly, with 24×7 support and automated billing.",
    bgColor: "bg-secondary",
    textColor: "text-white",
  },
];

const features = [
  "Pan-India Corporate Mobility Expertise",
  "Technology-Driven Transport Management",
  "EV & Sustainable Fleet Options",
  "Safety-First, Compliance-Guaranteed Operations",
];

const ticker = [
  "Employee Transportation Services",
  "Dedicated Project & Telecom Fleet",
  "Rent-a-Cab & Spot Rentals",
  "Special Purpose Vehicles",
];
export default function Employee() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="pt-[80px]">
      {/* SECTION 1 */}
      <Container className="px-4 md:px-10 py-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={bannerImg}
            alt="Telecom Banner"
            className="w-full h-auto object-cover"
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-12">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-5xl font-bold text-secondary">
              Employee Transport Solutions
            </h1>
            <h4 className="text-lg lg:text-2xl text-primary font-semibold mt-2">
              Smart, Safe & Scalable Corporate Mobility Across India
            </h4>

            <Link
              to={"/contact"}
              className={`group mt-4 transition duration-300 w-fit px-4 py-2 rounded-lg inline-flex border bg-white hover:bg-secondary hover:text-white items-center gap-2 text-sm font-semibold text-secondary`}
            >
              <p>Request a proposal</p>
              <span>
                <ArrowRight
                  size={24}
                  className={`transition duration-300 p-1 text-white group-hover:text-secondary group-hover:bg-white bg-secondary rounded-full`}
                />
              </span>
            </Link>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=" text-sm md:text-base text-gray-600 space-y-4 leading-relaxed"
          >
            <p>
              At Millenium Global, we revolutionize corporate mobility with our
              end-to-end Employee Transportation Solutions. Our tech-driven
              approach ensures a safe, reliable, and comfortable commute for
              your workforce, enhancing productivity and peace of mind. As a
              trusted partner for businesses in Gurgaon, Chennai, Mumbai, and
              other major hubs, we deliver seamless logistics, professional
              fleet management, and tailored services that perfectly align with
              your operational needs.
            </p>
            <p>
              Millenium Global delivers end-to-end corporate transportation
              solutions for enterprises, BPOs, telecom projects, and industrial
              hubs across Delhi NCR, Mumbai, Kolkata, Chennai, and Pan-India.
              From daily employee commute to dedicated project fleets, we
              combine technology, safety, and sustainability to ensure on-time,
              compliant, and comfortable travel for thousands of passengers
              daily.
            </p>
          </motion.div>
        </div>
      </Container>
      <Ticker services={ticker} />
      <Container className="px-4 md:px-10 py-12 overflow-hidden">
        {/* SECTION 2 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-12">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-black">
              What We Offer
            </h2>
            <h3 className="text-2xl lg:text-4xl text-primary font-semibold">
              Core Transport Capabilities
            </h3>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              We provide customized, fully-managed transport programs designed
              for both high-volume corporate travel and specialized project
              requirements. We deploy a modern fleet of vehicles, including our
              eco-friendly EVs, alongside our professionally trained and vetted
              drivers, ensuring a high standard of service from day one.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <div className="grid grid-rows-2 justify-between gap-8 h-full">
            <InfoCard
              title="Employee Transportation Solution:"
              description={
                "We offer end-to-end employee transportation management, from routing and scheduling to real-time tracking and emergency support. Our solutions are designed to optimize routes for efficiency, reduce travel time, and provide a comfortable and safe commuting experience for your entire workforce. AI-powered pick-up and drop services via cabs and buses, optimized through automated rostering, routing, and scheduling for maximum on-time performance and minimum travel time."
              }
            />
            <InfoCard
              title="Rent a Cab/Spot Rental:"
              description="For flexible business needs, our Rent a Cab and Spot Rental services provide on-demand mobility. Whether it's for executive travel, ad-hoc team movements, or guest transportation, our professional drivers and well-maintained vehicles are available to meet your specific requirements in cities like Chennai and Bengaluru. Flexible cab booking for short-term or urgent corporate needs, with full compliance and vetted professional drivers."
            />
          </div>

          {/* Right Column */}
          <motion.div
            className="flex items-center justify-center h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full max-h-[550px]">
              {/* Decorative diagonal stripes */}
              <div className="absolute -bottom-2 md:-bottom-5 -right-2 md:-right-5 w-full h-full bg-[repeating-linear-gradient(135deg,_#000_0px,_#000_2px,_transparent_2px,_transparent_6px)] " />

              {/* Main image */}
              <motion.img
                src={img1}
                alt="Team"
                className="relative w-full h-full object-cover rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
        {/* SECTION 3 */}
        <div className="my-12">
          <InfoCard
            title={"Project Cab & Logistics:"}
            description={
              "Our specialized Project Cab services cater to project-based requirements, ensuring your teams have reliable transportation for the duration of a project. We integrate this with our 3PL logistics expertise to provide comprehensive fleet and transportation solutions for both personnel and project-specific cargo. 12-hour and 24-hour dedicated cabs and project-specific vehicles, including site vans for telecom companies, ensuring uninterrupted crew and equipment mobility."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <InfoCard
              title={"Special Purpose Vehicles:"}
              description={
                "Medical vans, mobile interview shuttles (India’s first, delivered for Teleperformance in the Northeast), and training vans equipped with all necessary onboard facilities."
              }
            />
            <InfoCard
              title={"EV-Powered Fleet:"}
              description={
                "Eco-friendly electric vehicles reduce emissions and fuel costs while offering quiet, comfortable commutes for passengers and contributing to clients’ sustainability goals."
              }
            />
          </div>
        </div>
        {/* SECTION 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            className="flex items-center justify-center h-full max-h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full max-h-fit">
              {/* Decorative diagonal stripes */}
              <div className="absolute -bottom-2 md:-bottom-5 -left-2 md:-left-5 w-full h-full bg-[repeating-linear-gradient(135deg,_#000_0px,_#000_2px,_transparent_2px,_transparent_6px)] " />

              {/* Main image */}
              <motion.img
                src={img2}
                alt="Team"
                className="relative w-full h-full object-cover rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </motion.div>
          {/* Right Column */}
          <div className="grid grid-rows-2 gap-8 h-full">
            <InfoCard
              title="Interview Shuttle Services:"
              description="Make a strong first impression with our dedicated interview shuttle services. We provide professional, punctual transportation for job candidates, ensuring a seamless and positive experience from their door to your office, reflecting your company’s commitment to excellence and care. Specially designed, fully-equipped mobile units to conduct remote recruitment drives, enabling corporate HR teams to access untapped talent pools in tier-2 and tier-3 cities."
            />
            <InfoCard
              title="Professional Driver Training:"
              description="Safety is our top priority. Our drivers undergo rigorous professional training that covers defensive driving, first aid, and customer service. This ensures that every journey is not only efficient but also conducted with the highest standards of safety and professionalism. All drivers undergo professional safety training, background verification, and regular compliance checks. Trips are tracked in real-time, with emergency response protocols in place."
            />
          </div>
        </div>
      </Container>
      <ScrollSlide
        imgHow={imgHow}
        description="We follow a meticulous four-step process to ensure a reliable and efficient transportation service. We run corporate transport like a precision logistics operation"
        steps={steps}
      />
      <Container className="px-4 md:px-10 py-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-12">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-black">
              Why Choose Millenium
            </h2>
            <h3 className="text-2xl lg:text-4xl text-primary font-semibold">
              for Corporate Transport
            </h3>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              With a strong operational footprint in major metropolitan areas
              like Delhi NCR, Mumbai, Kolkata, and Guwahati, we provide scalable
              corporate mobility solutions wherever your business is located.
              Our top priority is safety, with every vehicle and driver adhering
              to strict safety protocols, regular audits, and all regulatory
              compliance standards.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.bgColor} ${item.textColor} flex flex-col justify-center rounded-xl p-8 shadow-lg`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-extrabold mb-4">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <Check className="text-white bg-primary rounded-full p-1 flex-shrink-0" />
              <span className="text-sm font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-6 items-center justify-center my-8 flex-wrap">
          <img src={brand1} className="w-36" alt="jio logo" />
          <img src={brand2} className="w-36" alt="ericsson logo" />
          <img src={brand3} className="w-36" alt="nokia logo" />
          <img src={brand4} className="w-36" alt="samsung logo" />
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
            Move Your People,{" "}
            <span className="text-black">Power Your Business</span>
          </h2>

          {/* Paragraph */}
          <p className="max-w-3xl mx-auto text-sm md:text-base mb-4">
            Whether you need daily employee transport, dedicated project cabs,
            or special-purpose vehicles for recruitment and medical services,{" "}
            <span className="font-semibold"> Millenium Global</span> provides
            the fleet, technology, and expertise to keep your business moving.
          </p>

          <p className="max-w-2xl mx-auto text-sm md:text-base mb-6">
            Request a proposal or schedule a transport consultation with our
            Corporate Mobility Team today.
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
    </section>
  );
}
