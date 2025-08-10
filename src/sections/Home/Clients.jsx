import { motion } from "framer-motion";

// Import your logos from assets folder
import tcs from "../../assets/Images/clients/1.png";
import pwc from "../../assets/Images/clients/2.png";
import kpmg from "../../assets/Images/clients/3.png";
import airtel from "../../assets/Images/clients/4.png";
import jio from "../../assets/Images/clients/5.png";
import ericsson from "../../assets/Images/clients/6.png";
import teleperformance from "../../assets/Images/clients/7.png";
import niit from "../../assets/Images/clients/8.png";
import Container from "../../components/Container";

export default function Clients() {
  const clients = [
    { img: tcs, alt: "TCS" },
    { img: pwc, alt: "PWC" },
    { img: kpmg, alt: "KPMG" },
    { img: airtel, alt: "Airtel" },
    { img: jio, alt: "Jio" },
    { img: ericsson, alt: "Ericsson" },
    { img: teleperformance, alt: "Teleperformance" },
    { img: niit, alt: "NIIT" },
  ];

  return (
    <section className="py-8 bg-white">
      {/* Header */}
      <Container className=" px-4 py-10">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p className="text-primary font-semibold text-lg tracking-wide mb-2">
            Our Clients
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders Across India
          </h2>
          <p className="text-gray-600">
            From top telecom giants to global corporates, Millenium Global is
            the chosen partner for infrastructure, transport, logistics, and
            facility management across Delhi NCR, Mumbai, Kolkata, and beyond.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg flex items-center justify-center p-6 transition-shadow duration-300"
            >
              <img
                src={client.img}
                alt={client.alt}
                className="max-h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
