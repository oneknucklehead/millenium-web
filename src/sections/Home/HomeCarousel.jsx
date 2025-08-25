import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import carouselImg1 from "../../assets/Images/1.webp";
import carouselImg2 from "../../assets/Images/2.webp";
import carouselImg3 from "../../assets/Images/3.webp";
import carouselImg4 from "../../assets/Images/4.webp";

const slides = [
  {
    id: 1,
    image: carouselImg1,
    heading: "Smart Corporate Mobility",
    subheading: "Revolutionizing Employee Transportation.",
  },
  {
    id: 2,
    image: carouselImg2,
    heading: " Building India's Future Networks:",
    subheading: "4G & 5G Rollouts.",
  },
  {
    id: 3,
    image: carouselImg3,
    heading: "Integrated 3PL & ",
    subheading: "Reverse Logistics.",
  },
  {
    id: 4,
    image: carouselImg4,
    heading: "Full-Service Event Production:",
    subheading: "From Concept to Grand Finale.",
  },
];

const transition = { duration: 0.8, ease: "easeInOut" };

export default function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="absolute inset-0"
        >
          {/* Slide Image */}
          <img
            src={slides[currentSlide].image}
            alt="slide"
            className="h-full w-full object-cover"
          />

          {/* Animated Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="absolute inset-0 bg-black/40"
          />

          {/* Text Content */}
          <div className="absolute inset-0 flex items-end justify-end px-6 md:px-28 pb-20 md:pb-24 z-10">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                {slides[currentSlide].heading}
                <br />
                <span className="text-primary">
                  {slides[currentSlide].subheading}
                </span>
              </h2>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Right Dots Navigation */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 cursor-pointer rounded-full transition-colors duration-300 ${
              currentSlide === i ? "bg-primary" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
