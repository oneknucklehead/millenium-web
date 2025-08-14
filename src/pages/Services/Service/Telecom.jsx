import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/Images/services/telecom/banner.png";
import Container from "../../../components/Container";
import InfoCard from "../../../components/InfoCard";
import img1 from "../../../assets/Images/services/telecom/1.png";
import img2 from "../../../assets/Images/services/telecom/2.png";
import ScrollSlide from "../../../components/ScrollSlide";

import brand1 from "../../../assets/Images/services/telecom/companies/1.png";
import brand2 from "../../../assets/Images/services/telecom/companies/2.png";
import brand3 from "../../../assets/Images/services/telecom/companies/3.png";
import brand4 from "../../../assets/Images/services/telecom/companies/4.png";

const data = [
  {
    title: "Ericsson rollouts & optimizations:",
    description:
      "Thousands of cell installations and optimization packages completed (All-Cell rollout counts listed in our program data).",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Nokia deployments:",
    description:
      "High-volume 4G/5G TDD/FDD rollout projects and optimization engagements across multiple circles.",
    bgColor: "bg-secondary",
    textColor: "text-white",
  },
  {
    title: "Samsung & OEM work",
    description:
      "Triband / pentaband swaps, upgrades and large scale installations with strict QA regimes.",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Logistics footprint:",
    description:
      "Thousands of forward & reverse logistics movements and VSAT dismantles managed with regional hubs and tracked execution.",
    bgColor: "bg-secondary",
    textColor: "text-white",
  },
];

const features = [
  "Pan-India Multi-Vendor Rollout Expertise",
  "Strong Operator & OEM Partnerships",
  "In-House Logistics & Field Workforce",
  "100% Safety and Compliance Assurance",
];
export default function Telecom() {
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
          whileInView={{ opacity: 1, y: 0 }}
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
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-5xl font-bold text-secondary">
              Telecom Solutions Across India
            </h1>
            <h4 className="text-lg lg:text-2xl text-primary font-semibold mt-2">
              End-to-End Network Rollout, Optimization & O&M Across India
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
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=" text-sm md:text-base text-gray-600 space-y-4 leading-relaxed"
          >
            <p>
              At Millenium Global, we are at the forefront of India's
              telecommunications revolution. We provide end-to-end, integrated
              telecom solutions designed to build, optimize, and maintain robust
              network infrastructures. Millenium Global delivers full-spectrum
              telecom solutions, from planning and site acquisition to 4G/5G
              rollout, RF optimization.
            </p>
            <p>
              From cutting-edge 4G/5G deployments in Delhi NCR and Mumbai to
              critical network management across Kolkata and Chennai, we are the
              trusted partner for leading telecom operators and ISPs seeking
              efficiency, scalability, and technical excellence nationwide.
              We’ve executed thousands of rollout and optimization packages for
              leading operators and OEM partners, demonstrating deep field
              capability and robust logistics support.
            </p>
          </motion.div>
        </div>
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
              Core Telecom Capabilities
            </h3>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              We break complex telecom programs into manageable, high-quality
              deliverables. Each capability below is designed to reduce
              time-to-market, improve KPIs, and secure operational continuity
              across metros and remote regions.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-between gap-8 h-full">
            <InfoCard
              title="Network Rollout & Implementation:"
              description="We deliver comprehensive network rollout services, including 4G/5G deployments, BTS equipment installation, and microwave (MW) installation. Our expertise extends to Indoor Building Solutions(IBS), Small Cell, UBR, and B2B enterprise work, ensuring projects are completed efficiently and on schedule across India. Comprehensive BTS/NodeB/eNodeB installations, small-cell and UBR deployments, delivered with end-to-end project management and safety governance. We manage civil works, mast/tower work, and final acceptance testing for multi-site rollouts."
            />
            <InfoCard
              title="Network Optimization & RF Engineering:"
              description="Enhance your network's efficiency and user experience with our specialized services. Our team provides expert Radio Frequency(RF) Engineering, Drive-test based RF optimization, SCFT/SSCVT/CLOT methodologies, capacity tuning and inter-site coordination to maximize spectral efficiency and QoE and advanced network optimization solutions to ensure your systems perform at their peak, supporting peak-hour traffic and seamless connectivity. Our RF teams perform systematic performance audits and corrective actions to improve call/drop rates, throughput, and coverage continuity."
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
            title={"Telecom Infrastructure Solutions (Active & Passive)"}
            description={
              "We manage all aspects of telecom infrastructure, both active and passive, Turnkey active and passive infrastructure delivery including power, grounding, BTS shelters, passive cabling, civil foundations, and solar/UPS integration.This includes professional civil work services, meticulous site acquisition, and ongoing support for network setup and expansion. We provide the foundational support needed for a stable and scalable telecommunication network. We handle site acquisition, permissions, and vendor coordination for rapid site readiness."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <InfoCard
              title={"Testing, Commissioning & Acceptance"}
              description={
                "LOS/IBS surveys, site validation, acceptance testing, and post-commissioning QA. We execute acceptance tests for BTS/MW/TXN equipment and provide detailed test reports to meet OEM and operator SLAs."
              }
            />
            <InfoCard
              title={"Field Logistics & Reverse/Forward Logistics"}
              description={
                "End-to-end logistics for telecom assets, warehouse handling, first-mile and last-mile deliveries, site returns, and VSAT dismantling, backed by dedicated vehicles and regional hubs for timely, accountable field support."
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
              title="Managed Services, O&M & NOC Support"
              description="Ensure continuous network uptime and reliability with our Operations & Maintenance (O&M) services. 24×7 operations & maintenance, equipment health monitoring, preventive maintenance, fault restoration, and NOC services for sustained network performance. Our managed services include spare management, escalation processes, and SLA reporting. Our team provides round-the-clock, total care for your communication systems, from routine maintenance to emergency support, giving you peace of mind and operational stability."
            />
            <InfoCard
              title="Telecom HR & Recruitment"
              description="Build a high-performing team with our specialized HR solutions. We source and place qualified professionals for a wide range of telecom projects, from field engineers to technical project managers, helping you build the expert workforce needed to drive your initiatives forward."
            />
          </div>
        </div>
      </Container>
      <ScrollSlide />
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
              for Telecom Projects
            </h3>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Over a decade of proven experience delivering successful telecom
              projects across India for top-tier clients like Samsung and Jio.
              We maintain 100% compliance with industry regulations and a
              relentless focus on quality, ensuring reliable, high-performance
              network delivery.
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
          <img src={brand1} alt="jio logo" />
          <img src={brand2} alt="ericsson logo" />
          <img src={brand3} alt="nokia logo" />
          <img src={brand4} alt="samsung logo" />
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
            Ready to <span className="text-black">Scale Your Network?</span>
          </h2>

          {/* Paragraph */}
          <p className="max-w-3xl mx-auto text-sm md:text-base mb-4">
            Whether you’re building new 4G/5G capacity, optimizing live
            performance, or outsourcing O&M and logistics,
            <span className="font-semibold"> Millenium Global</span> provides
            the field expertise, regional reach and operational rigor to deliver
            on time and on spec.
          </p>

          <p className="max-w-2xl mx-auto text-sm md:text-base mb-6">
            Request a proposal or schedule a technical call with our Telecom
            Delivery team to discuss scope, timelines, and a tailored commercial
            plan.
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
