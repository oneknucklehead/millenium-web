import { motion } from "framer-motion";
import {
  CheckCircle,
  PhoneCall,
  ArrowRight,
  Check,
  Handshake,
} from "lucide-react";
import Container from "../../components/Container";
import team from "../../assets/Images/WhyBusiness.webp";
import { Link } from "react-router-dom";

export default function WhyMillenium() {
  const features = [
    "Client-Centric Approach",
    "Innovation-Driven Solutions",
    "Pan-India Expertise",
    "24x7 Expert Support",
  ];

  const cards = [
    {
      id: 1,
      numbers: "10+",
      title: "Years",
      text: " Industry leadership since 2014 across Delhi NCR, Mumbai, Kolkata, Chennai & beyond.",
      color: "bg-primary",
    },
    {
      id: 2,
      numbers: "3,682+",
      title: "Sites",
      text: " End‑to‑end 4G/5G rollout, RF optimization & turnkey network projects.",
      color: "bg-secondary",
    },
    {
      id: 3,
      numbers: "2,500+",
      title: "Daily Commutes",
      text: " Tech‑driven, EV‑powered employee transport with real‑time tracking & on‑time performance.",
      color: "bg-primary",
    },
    {
      id: 4,
      numbers: "500+",
      title: "EV & ICE FLEET",
      text: "Green mobility solutions delivering cost savings, safety & Net Zero alignment.",
      color: "bg-secondary",
    },
  ];

  return (
    <div className="w-full px-4 md:px-10 py-10 bg-white">
      {/* <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center"> */}
      <Container className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-primary text-xl font-semibold mb-1">
            Why Businesses Love Millenium?
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold text-black mb-4">
            Empowering Businesses <br /> with Proven Solutions
          </h2>
        </div>
        <p className="text-[#666666] font-medium text-sm mb-4">
          Delivering pan‑India telecom infrastructure, automated employee
          transport, 3PL logistics and facility management with 10+ years of
          industry leadership, cutting‑edge technology and unwavering
          compliance.
          <br />
          <br />
          For over a decade, Millenium Global has been the trusted catalyst for
          business growth across India. We combine deep industry expertise with
          an unwavering commitment to innovation, delivering integrated,
          high-performance solutions in telecom, logistics, events, and facility
          management that consistently exceed expectations.
        </p>
      </Container>
      <Container className="grid md:grid-cols-2 gap-10 h-fit">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-xl">
            {/* Decorative diagonal stripes */}
            <div className="absolute -bottom-5 -right-5 w-full h-full bg-[repeating-linear-gradient(135deg,_#000_0px,_#000_2px,_transparent_2px,_transparent_6px)]" />

            {/* Main image */}
            <motion.img
              src={team}
              alt={"Team"}
              className="relative rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {/* Stat Cards */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`flex flex-col justify-between rounded-xl px-4 py-6 text-white min-h-40 md:min-h-48 xl:min-h-64 ${card.color} flex flex-col gap-2`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Handshake className="w-5 h-5" />
                <div>
                  <div className="mb-2">
                    <h3 className="text-3xl md:text-5xl font-bebas">
                      {card.numbers}
                    </h3>
                    <p className="text-base font-bebas">{card.title}</p>
                  </div>
                  <p className="text-xs">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Horizontal ruler */}
          <hr className="text-[#666666] bg-[#666666]" />

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4  my-4">
            {features.map((feature, idx) => (
              <div className="flex items-center gap-4" key={idx}>
                <span className=" bg-primary text-white  rounded-full p-1">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-base text-black">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to={"/about"}
              className="cursor-pointer flex items-center group gap-4 border border-secondary text-secondary hover:bg-secondary hover:text-white px-5 py-3 rounded-md transition duration-300"
            >
              <p>More About Us</p>
              <span className="transition duration-300 text-white group-hover:text-secondary bg-secondary group-hover:bg-white rounded-full p-1">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <div className="flex items-center gap-2">
              {/* <PhoneCall className="text-primary w-4 h-4" /> */}
              <span className="bg-[#FFF9F5] rounded-full p-2">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4776 15.8209L15.9139 11.6715C15.6981 11.4754 15.4147 11.3709 15.1233 11.3799C14.8319 11.3889 14.5554 11.5108 14.3522 11.7198L11.6657 14.4827C11.019 14.3592 9.71894 13.9539 8.3807 12.619C7.04247 11.2797 6.63718 9.97626 6.51706 9.33409L9.27772 6.6464C9.487 6.44334 9.60907 6.16681 9.61808 5.87535C9.62708 5.58389 9.52234 5.30035 9.326 5.08475L5.1777 0.52219C4.98128 0.305913 4.70829 0.174726 4.4167 0.156488C4.12511 0.138251 3.8379 0.2344 3.61606 0.424517L1.17985 2.51382C0.985747 2.70862 0.869896 2.96789 0.854269 3.24244C0.837429 3.52311 0.516343 10.1716 5.67168 15.3292C10.1691 19.8255 15.8027 20.1545 17.3543 20.1545C17.581 20.1545 17.7203 20.1477 17.7573 20.1455C18.0318 20.1301 18.2909 20.0137 18.4848 19.8188L20.573 17.3814C20.7639 17.1603 20.8607 16.8733 20.8429 16.5818C20.8251 16.2902 20.6939 16.0171 20.4776 15.8209Z"
                    fill="#FF6600"
                  />
                </svg>
              </span>

              <div>
                <p className="text-[#666666] text-sm">Let’s Talk</p>
                <span className="font-medium font-base">+91 99107 24900</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* </div> */}
    </div>
  );
}
