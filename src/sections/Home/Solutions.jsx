import { motion } from "framer-motion";
import img1 from "../../assets/Images/solutions/1.webp";
import img2 from "../../assets/Images/solutions/2.webp";
import img3 from "../../assets/Images/solutions/3.webp";
import { ArrowRight } from "lucide-react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

export default function Solutions() {
  const cardData = [
    {
      title: "Network Rollout & Implementation",
      img: img1,
      description:
        "Our end-to-end network rollout services, including 4G/5G deployments, BTS installation, MW, IBS, Small Cell, UBR, and B2B enterprise work, ensure efficient project completion.",
    },
    {
      title: "Network Optimization & Performance",
      img: img2,
      description:
        "Enhance your network's efficiency with our Radio Frequency Engineering, Drive Test, and Network Optimization services. We ensure your systems perform at their peak for superior user experience.",
    },
    {
      title: "Telecom Infrastructure Solutions",
      img: img3,
      description:
        "We deliver comprehensive solutions for active and passive telecom infrastructure, including expert civil work services, meticulous site acquisition, and ongoing support for network setup.",
    },
  ];

  return (
    <section className="bg-secondary text-white py-8 px-4 md:px-12">
      {/* Header */}
      <Container className=" px-4 py-10">
        <div className="w-full flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-semibold tracking-wide text-lg mb-2">
            Telecom
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Telecom Solutions: Connecting Your World
          </h2>
          <p className="text-gray-300 mb-6">
            Millenium Global delivers comprehensive telecom solutions,
            optimizing your network from infrastructure to operations as your
            trusted partner.
          </p>
          <Link
            to={"/services/telecom"}
            //   whileHover={{ scale: 1.05 }}
            //   whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 group cursor-pointer border border-white text-white hover:text-secondary px-5 py-2 rounded-lg font-medium bg-secondary hover:bg-white transition-colors duration-300"
          >
            Discover More
            <span className="bg-white group-hover:bg-secondary text-secondary group-hover:text-white transition-colors duration-300 rounded-full p-1 flex items-center justify-center">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-lg h-[500px] flex flex-col justify-between"
              style={{
                backgroundImage: `url("${card.img}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Title */}
              <div className="bg-white text-black p-4 rounded-xl m-4 shadow-md w-full max-w-[90%]">
                <h3 className="font-bold text-xl">{card.title}</h3>
              </div>

              {/* Description */}
              <div className="bg-white text-gray-700 p-4 rounded-xl m-4 shadow-md text-sm max-w-[90%]">
                {card.description}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
