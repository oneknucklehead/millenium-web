import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import img from "../assets/Images/services/telecom/3.webp";
import Container from "./Container";

export default function HowWeWork({
  description = "Default description",
  steps = [],
  imgHow = img,
}) {
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState("auto");
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
  );

  // Responsive detection
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update height after content (including image) loads
  useEffect(() => {
    if (isLargeScreen && leftRef.current) {
      const updateHeight = () =>
        setLeftHeight(leftRef.current.offsetHeight + "px");

      updateHeight();

      // Recalculate when images load
      const images = leftRef.current.querySelectorAll("img");
      images.forEach((img) => img.addEventListener("load", updateHeight));

      window.addEventListener("resize", updateHeight);

      return () => {
        images.forEach((img) => img.removeEventListener("load", updateHeight));
        window.removeEventListener("resize", updateHeight);
      };
    } else {
      setLeftHeight("auto");
    }
  }, [isLargeScreen]);

  return (
    <div className="bg-secondary">
      <Container className="px-4 md:px-10 py-16">
        <section className="flex flex-col md:flex-row items-start gap-8 text-white">
          {/* Left side */}
          <div ref={leftRef} className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">How We Work</h2>
            <h3 className="text-xl text-primary font-semibold">
              Our Proven Process
            </h3>
            <p className="text-gray-300">{description}</p>
            <img src={imgHow} alt="Telecom" className="rounded-lg w-full" />
          </div>

          {/* Right side */}
          <div
            className="relative w-full md:w-1/2"
            style={{ height: isLargeScreen ? leftHeight : "auto" }}
          >
            {isLargeScreen ? (
              <div
                className="h-full overflow-y-auto pr-2"
                style={{ scrollbarWidth: "thin" }} // Firefox
              >
                <div className="space-y-6 pb-12">
                  {steps.map((item, index) => (
                    <motion.div
                      key={index}
                      className="border border-white rounded-lg p-6 bg-secondary"
                    >
                      <p className="text-primary font-semibold">{item.step}</p>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              // Stacked layout on small screens
              <div className="space-y-6">
                {steps.map((item, index) => (
                  <motion.div
                    key={index}
                    className="border border-white rounded-lg p-6 bg-secondary"
                  >
                    <p className="text-primary font-semibold">{item.step}</p>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
}
