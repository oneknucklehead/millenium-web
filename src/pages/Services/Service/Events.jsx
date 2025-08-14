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
import Ticker from "../../../components/Ticker";

const steps = [
  {
    step: "Step - 1",
    title: " Conceptualization & Consultation:",
    description:
      "We start by collaborating with you to understand your event goals, audience, and vision. We then develop a unique concept and detailed plan that aligns with your brand and objectives.",
  },
  {
    step: "Step - 2",
    title: "Strategic Planning & Logistics:",
    description:
      "Our team meticulously plans every logistical detail, including venue sourcing, travel arrangements, sound and lighting, and on-ground coordination.",
  },
  {
    step: "Step - 3",
    title: "Creative Design & Production:",
    description:
      "We produce all creative elements for your event, from stage design and exhibition stalls to branding and communication materials, ensuring a cohesive and impactful experience.",
  },
  {
    step: "Step - 4",
    title: "Flawless Execution:",
    description:
      "Our expert team is on-site to manage and execute the event flawlessly. We handle all coordination and unexpected challenges, allowing you to relax and enjoy the magnificent event.",
  },
];

const data = [
  {
    title: "Bose India Product Launch:",
    description:
      "Full-scale media & dealer event with AV integration in Delhi.",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Deloitte India Townhall:",
    description:
      "Managed 2,500+ attendee conference in Mumbai with stage, AV, and logistics.",
    bgColor: "bg-secondary",
    textColor: "text-white",
  },
  {
    title: "Hewlett Packard (HP) Sales Kickoff:",
    description: "4-day international incentive trip to Phuket, Thailand.",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "Panasonic Media Launch:",
    description:
      "Concept-to-execution brand launch with curated guest experience.",
    bgColor: "bg-secondary",
    textColor: "text-white",
  },
];

const features = [
  "Pan-India & International Execution Capabilities",
  "In-House Creative, Production & Logistics Teams",
  "Strong Hotel & Venue Partnerships for best rates and locations",
  "Proven Expertise Across Corporate & Lifestyle Events",
];

const ticker = [
  "Corporate Events & MICE Solutions",
  "Full 360° Event Setup & Design",
  "Exhibitions & Trade Shows",
  "Brand Activations & BTL Campaigns",
];

export default function Events() {
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
              Events & MICE Management
            </h1>
            <h4 className="text-lg lg:text-2xl text-primary font-semibold mt-2">
              Crafting Experiences That Inspire, Engage & Deliver Results
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
              As the hospitality and events arm of Millenium Global, Millenium
              Leisure Hospitality Services Pvt. Ltd. delivers end-to-end event
              management, MICE solutions, and experiential marketing for
              corporates across India and abroad. We combine creative vision,
              logistical precision, and technical expertise to design
              unforgettable experiences from high-energy product launches to
              exclusive incentive trips.
            </p>
            <p>
              Our approach is 360° and turnkey: strategy, creative design, venue
              sourcing, travel & accommodation, artist management, event
              fabrication, and flawless on-site execution. No two Millenium
              events are the same; we tailor every detail to reflect your
              brand’s personality and purpose.
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
              Core Event Management Capabilities
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
          <div className="grid grid-rows-2 justify-between gap-8 h-full">
            <InfoCard
              title="Corporate Events & Conferences:"
              description="We specialize in managing a wide range of corporate events, including annual meets, sales kickoffs, town halls, and press conferences. Our services ensure every detail is handled, from venue sourcing and stage design to artist procurement and on-ground logistics, guaranteeing a seamless and professional event."
            />
            <InfoCard
              title="MICE & Incentive Tours:"
              description="Millenium Leisure is an expert in organizing Meetings, Incentives, Conferences, and Exhibitions. We help you conceive, plan, and execute incentive tours for your top performers, handling all travel, itinerary, and event arrangements to create a truly rewarding and motivating experience."
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
            title={"Product Launches & Brand Activations:"}
            description={
              "Make a big impact with our product launch and brand activation services. We handle the entire process, from conceptualizing the event to getting the right media to attend. Our creative and meticulous approach ensures your product launch is a standout success that captures attention and drives results."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <InfoCard
              title={"Full End-to-End 360° Event Setup:"}
              description={
                "Our 360-degree event services mean we manage everything from start to finish. This includes creative design, logistics, venue selection, artist management, and outdoor visuals. We handle all unseen details, transforming your vision into a magnificently executed event."
              }
            />
            <InfoCard
              title={"Exhibitions & Trade Shows:"}
              description={
                "Custom stall design, fabrication, and booth management for exhibitions and trade shows optimized for traffic flow and brand visibility."
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
              title="Leisure & Incentive Tours:"
              description="Destination research, travel arrangements, hotel booking, activity planning, and full tour management to reward and motivate high performers."
            />
            <InfoCard
              title="Corporate Celebrations & Social Events:"
              description="Annual days, gala dinners, family days, weddings, press conferences, and award functions events that leave lasting memories."
            />
          </div>
        </div>
      </Container>
      <ScrollSlide
        description={
          "We follow a creative and detail-oriented process to bring your event vision to life. No two Millenium events are the same, we tailor every detail to reflect your brand’s personality and purpose."
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
              for Events & MICE Management
            </h3>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              For over a decade, we’ve been the trusted events partner for
              global brands, delivering on-time, on-budget, and
              beyond-expectations results. Our portfolio includes
              high-complexity setups, international incentive tours, and
              large-scale corporate gatherings.
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
            Ready to{" "}
            <span className="text-black">create an unforgettable event?</span>
          </h2>

          {/* Paragraph */}
          <p className="max-w-3xl mx-auto text-sm md:text-base mb-4">
            Whether it’s a high-profile product launch, a team-building getaway,
            or a global conference,
            <span className="font-semibold"> Millenium Global </span> delivers
            experiences that connect people and elevate brands.
          </p>

          <p className="max-w-2xl mx-auto text-sm md:text-base mb-6">
            Get in touch today to start planning your next successful event.
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
