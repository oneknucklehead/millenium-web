import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../../components/Container";

const services = [
  {
    title: "Logistics Services",
    description:
      "Identify, assess, and mitigate potential risks to secure sustainable business growth.",
    image: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg",
  },
  {
    title: "HR Consultancy",
    description:
      "Scale your business with data-driven strategies and expert consulting support.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    title: "Corporate Event Management",
    description:
      "Receive expert guidance on corporate governance, restructuring, and compliance.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
  },
  // Duplicating to match 6 cards like in the image
  {
    title: "Logistics Services",
    description:
      "Identify, assess, and mitigate potential risks to secure sustainable business growth.",
    image: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg",
  },
  {
    title: "HR Consultancy",
    description:
      "Scale your business with data-driven strategies and expert consulting support.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    title: "Corporate Event Management",
    description:
      "Receive expert guidance on corporate governance, restructuring, and compliance.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
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
                <button className="text-sm w-fit cursor-pointer font-medium text-black group hover:text-primary inline-flex items-center gap-1 mt-2">
                  <p>Discover More</p>
                  <span className="text-white bg-black group-hover:bg-primary rounded-full p-[3px]">
                    <ArrowRight size={14} />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
