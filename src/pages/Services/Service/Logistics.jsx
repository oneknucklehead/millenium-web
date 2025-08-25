import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/Images/services/Logistics/banner.webp";
import Container from "../../../components/Container";
import InfoCard from "../../../components/InfoCard";
import img1 from "../../../assets/Images/services/Logistics/core1.webp";
import img2 from "../../../assets/Images/services/Logistics/core2.webp";
import imgHow from "../../../assets/Images/services/Logistics/how.webp";
import ScrollSlide from "../../../components/ScrollSlide";

import brand1 from "../../../assets/Images/services/Logistics/logos/2.webp";
import brand2 from "../../../assets/Images/services/Logistics/logos/3.webp";
import brand3 from "../../../assets/Images/services/Logistics/logos/4.webp";

import Ticker from "../../../components/Ticker";
const steps = [
  {
    step: "Step - 1",
    title: "Needs Assessment:",
    description:
      "We begin by defining the specifics of your cargo, including type, handling requirements, and compliance needs, as well as mapping out the most efficient delivery routes.",
  },
  {
    step: "Step - 2",
    title: "Route & Fleet Planning:",
    description:
      "Our logistics team strategically allocates the right vehicles and trained drivers for each shipment, using GPS-enabled tracking to optimize routes and provide real-time updates.",
  },
  {
    step: "Step - 3",
    title: "Secure Handling & Transport:",
    description:
      "We execute the loading, transit, and unloading of goods with the utmost care and security. Clients receive real-time status updates throughout the entire journey.",
  },
  {
    step: "Step - 4",
    title: "Delivery & Documentation:",
    description:
      " We ensure on-time arrival at the destination, with a strict process for client verification. All shipments are accompanied by complete documentation, ensuring audit readiness and transparency.",
  },
];
const data = [
  {
    title: "Telecom and Special Project:",
    description:
      "Logistics support for nationwide 4G/5G network rollouts and major corporate projects.",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Numbers Prove itself:",
    description:
      " Thousands of first-mile, last-mile, and reverse logistics trips completed annually.",
    bgColor: "bg-secondary",
    textColor: "text-white",
  },
  {
    title: "Ensuring Smooth Operations:",
    description:
      "Strategic hubs in North, East, West, and North-East India for regional efficiency.",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Experienced Handling:",
    description:
      " Handling high-value telecom and IT equipment with zero damage incidents in multiple projects.",
    bgColor: "bg-secondary",
    textColor: "text-white",
  },
];

const features = [
  " Pan-India Project Logistics Expertise",
  "Large Fleet & Regional Warehousing",
  "Trained & Safety-Certified Drivers",
  " Full Compliance & Real-Time Tracking",
];

const ticker = [
  "First-Mile & Last-Mile Delivery",
  "Reverse Logistics & Asset Retrieval",
  "Scalable Warehousing Solutions",
  "Yard Management",
];

export default function Logistics() {
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
              3PL & Logistics Services
            </h1>
            <h4 className="text-lg lg:text-2xl text-primary font-semibold mt-2">
              Seamless Telecom Supply Chain Solutions
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
              Millenium Global offers comprehensive Third-Party Logistics (3PL)
              services, specializing in the complex demands of the telecom
              industry. From forward and reverse logistics for partners like
              Samsung and Jio Infocom to end-to-end supply chain management, our
              scalable solutions optimize every step of the process. With a
              strong presence in regions like Assam, North East India, and
              Kolkata, we ensure timely, secure, and cost-effective delivery of
              goods, empowering your business to focus on core operations. From
              first-mile and last-mile deliveries to reverse logistics,
              warehousing, and fleet management, we handle every stage of the
              supply chain with speed, compliance, and care.
            </p>
            <p>
              Millenium Global delivers end-to-end 3PL and logistics services
              that keep telecom, IT, and enterprise projects running smoothly
              across Delhi NCR, Mumbai, Kolkata, Guwahati, and Pan-India. Our
              integrated model ensures on-time, damage-free deliveries even in
              challenging terrains and remote project sites.
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
              Core Logistics Capabilities
            </h3>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              We design custom logistics solutions to meet the specialized needs
              of telecom operators, OEMs, corporates, and industrial hubs.From
              first-mile and last-mile deliveries to reverse logistics,
              warehousing, and fleet management, we handle every stage of the
              supply chain with speed, compliance, and care.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <div className="grid grid-rows-2 justify-between gap-8 h-full">
            <InfoCard
              title="Forward & Reverse Logistics:"
              description="We provide seamless forward and reverse logistics for telecom goods. Our services include delivering equipment from your warehouse to installation sites as well as efficiently managing returns and faulty items back from sites, ensuring a streamlined and transparent process."
            />
            <InfoCard
              title="First-Mile & Last-Mile Delivery:"
              description="Seamless pickup and delivery of critical project materials, network equipment, and corporate goods across metros, Tier-2, and remote locations. Our GPS-tracked vehicles and skilled handlers ensure each delivery is secure, on-time, and fully documented."
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
            title={"Reverse Logistics & Asset Retrieval:"}
            description={
              "Efficient collection, dismantling, and safe return of telecom and IT assets  including VSAT units, active network gear, and passive infrastructure. We manage every retrieval with damage prevention protocols and compliance-driven inventory control."
            }
          />
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
              title={"Warehousing & Yard Management:"}
              description={
                "Secure, strategically located warehouses and yards for short-term and long-term storage, asset staging, and regional distribution. Each site is monitored 24×7 with digital inventory systems for real-time stock visibility. This agility helps reduce shipping zones and lower costs, ensuring your products reach customers more quickly."
              }
            />
            <InfoCard
              title={"Specialized Project Logistics:"}
              description={
                "Custom solutions for telecom rollouts, large-scale event setups, and corporate relocations including coordinated deliveries, on-site equipment handling, and emergency dispatches. Our dedicated project teams align logistics with your operational timelines for flawless execution."
              }
            />
          </div>
        </div>
      </Container>
      <ScrollSlide
        imgHow={imgHow}
        description={
          "Our process is designed for precision and reliability, ensuring a smooth supply chain from start to finish. We manage logistics like a mission-critical operation: "
        }
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
              for Logistics
            </h3>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              With years of hands-on experience in managing complex, high-volume
              logistics operations, Millenium Global has supported nationwide
              telecom rollouts, corporate relocations, and critical event
              deployments. Our track record reflects zero-compromise safety
              standards, timely deliveries, and a client-first approach that has
              earned the trust of industry leaders across multiple sectors.
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
            Ready to{" "}
            <span className="text-black"> streamline your supply chain?</span>
          </h2>

          {/* Paragraph */}
          <p className="max-w-3xl mx-auto text-sm md:text-base mb-4">
            From telecom network deployments to corporate supply chain needs,{" "}
            <span className="font-semibold">Millenium Global’s</span> logistics
            division delivers speed, security, and scalability you can count on.
          </p>

          <p className="max-w-2xl mx-auto text-sm md:text-base mb-6">
            Request a logistics proposal or schedule a supply chain consultation
            today.
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
