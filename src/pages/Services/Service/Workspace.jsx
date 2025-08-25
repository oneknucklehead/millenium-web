import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/Images/services/Workspace/banner.webp";
import Container from "../../../components/Container";
import InfoCard from "../../../components/InfoCard";
import img1 from "../../../assets/Images/services/Workspace/core1.webp";
import img2 from "../../../assets/Images/services/Workspace/core2.webp";
import imgHow from "../../../assets/Images/services/Workspace/how.webp";
import ScrollSlide from "../../../components/ScrollSlide";

import brand1 from "../../../assets/Images/services/EmpTransport/logos/3.webp";
import brand2 from "../../../assets/Images/services/EmpTransport/logos/4.webp";
import Ticker from "../../../components/Ticker";

const steps = [
  {
    step: "Step - 1",
    title: "Consultation & Needs Analysis:",
    description:
      "We begin with a detailed consultation to understand your specific requirements for facility management, interior design, and staffing. We assess your goals to create a customized and comprehensive service plan.",
  },
  {
    step: "Step - 2",
    title: "Design & Planning:",
    description:
      " For workspace projects, our design team develops a detailed plan, including layouts, furniture selection, and material specifications. For HR, we create a targeted recruitment strategy to find the ideal candidates for your roles.",
  },
  {
    step: "Step - 3",
    title: "Execution & Implementation:",
    description:
      "Our experienced team executes the plan with precision, whether it's managing a facility transition, overseeing an interior design project, or conducting candidate interviews. We ensure all work is completed to the highest standards.",
  },
  {
    step: "Step - 4",
    title: "Ongoing Management & Support:",
    description:
      "We provide continuous support and management for our facility services and remain a partner for your ongoing HR needs. We perform regular quality checks and adapt our services to meet your evolving requirements.",
  },
];

const data = [
  {
    title: "Godrej Properties Corporate Offices:",
    description:
      " Complete facility management and ergonomic furniture deployment across multiple locations.",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Ford India Workspace Design: ",
    description:
      "End-to-end interior build and workstation setup for operational efficiency and brand consistency.",
    bgColor: "bg-secondary",
    textColor: "text-white",
  },
  {
    title: "NIIT HR Recruitment & Staffing:",
    description:
      "Specialized hiring for IT and corporate roles with full onboarding support.",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Multi-City Facility Operations:",
    description:
      "Integrated workspace management and corporate transport for pan-India client sites.",
    bgColor: "bg-secondary",
    textColor: "text-white",
  },
];

const features = [
  "Pan-India Service Delivery with metro and Tier-2 presence",
  "Design-to-Delivery Expertise, single-window project execution",
  "Compliance & Quality Assured in facility & HR operations",
  "Trusted by Industry Leaders across telecom, IT, and corporate sectors",
];

const ticker = [
  "Workspace Management Solutions",
  "Full Interior Design & Build",
  "Office & Workstation Furniture Solutions",
  "HR Recruitment & Consultancy",
];
export default function Workspace() {
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
              Workspace & HR Solutions
            </h1>
            <h4 className="text-lg lg:text-2xl text-primary font-semibold mt-2">
              Integrated Facility & HR Services
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
              At Millenium Global, we bring together end-to-end workspace
              management, premium office furniture solutions, full interior
              design & build services, and comprehensive HR recruitment &
              consultancy under one trusted partner.
            </p>
            <p>
              From conceptualizing and constructing inspiring office spaces to
              supplying ergonomic furniture and managing your facilities, we
              ensure productivity, comfort, and brand alignment at every stage.
              Our HR division extends this expertise by sourcing, training, and
              placing top talent to keep your business performing at its peak.
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
              Core Management Capabilities
            </h3>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Serving Delhi NCR, Mumbai, Kolkata, Chennai, Patna, Bhubaneswar,
              Guwahati, and beyond, Millenium Global is the single window for
              organizations looking to streamline their work environments and
              workforce operations. We deliver to corporate offices, industrial
              hubs, government facilities, IT parks, hospitals, schools, banks,
              malls, and events with tailored approaches for each sector
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <div className="grid grid-rows-2  justify-between gap-8 h-full">
            <InfoCard
              title="Workspace Management Solutions:"
              description="Complete facility management services including soft services, security, housekeeping, pantry, reception, landscaping, pest control, and preventive maintenance — designed for operational efficiency and cost control. Our team ensures seamless day-to-day operations so you can focus entirely on your core business."
            />
            <InfoCard
              title="Full Interior Design & Build:"
              description="From concept to execution, our architects and project managers deliver tailor-made office designs that balance function, aesthetics, and productivity — on time and within budget. We manage every detail from space planning to final handover for a stress-free experience."
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <InfoCard
              title={"Office & Workstation Furniture Solutions:"}
              description={
                "End-to-end sourcing and installation of high-quality workstations, desks, meeting tables, and modular storage from global and Indian brands. We offer custom furniture solutions that align with your brand’s identity and workspace needs."
              }
            />
            <InfoCard
              title={"Ergonomic Office Chairs:"}
              description={
                "Supply of premium ergonomic seating designed to reduce fatigue, improve posture, and enhance workplace health. Our chairs combine long-lasting durability with modern design to create comfortable, professional environments."
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
              title={"Corporate Accommodation & Transport:"}
              description={
                "Dedicated solutions for staff housing, daily pick-up/drop, and project-based mobility for your teams nationwide. All services are managed with compliance, safety, and comfort as top priorities."
              }
            />
            <InfoCard
              title="HR Recruitment & Consultancy:"
              description="Specialized recruitment for telecom, IT, and corporate roles, along with talent management, compliance, onboarding, and HR process consulting. We provide end-to-end HR support to help businesses build and retain high-performing teams. Recruitment Process Outsourcing goes beyond simply filling open positions. It's a collaborative partnership that leverages the expertise of a dedicated recruitment team. RPO providers offer a full spectrum of services, from identifying your talent needs to onboarding new hires, ensuring a seamless and efficient recruitment experience."
            />
          </div>
        </div>
      </Container>
      <ScrollSlide
        imgHow={imgHow}
        description={
          "We follow a structured and collaborative approach to deliver tailored workspace and HR solutions."
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
              for Workspace & HR Solutions
            </h3>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Millenium Global has transformed workspaces for Fortune 500
              companies, fast-growing startups, and national telecom leaders,
              combining design excellence with operational precision. Our HR
              services have placed hundreds of skilled professionals in
              mission-critical roles, helping businesses scale without
              compromise.
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
            <span className="text-black">
              create an exceptional workspace and team?
            </span>
          </h2>

          {/* Paragraph */}
          <p className="max-w-3xl mx-auto text-sm md:text-base mb-4">
            From facility management and ergonomic furniture to full-scale
            office design and HR recruitment,{" "}
            <span className="font-semibold"> Millenium Global </span>is your
            single-window partner for building productive, inspiring, and
            compliant workplaces.
          </p>

          <p className="max-w-2xl mx-auto text-sm md:text-base mb-6">
            Request a proposal or schedule a workspace consultation with our
            team today — let’s design and manage the environment your business
            deserves.
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
