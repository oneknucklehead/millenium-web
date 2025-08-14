import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import img from "../assets/Images/services/telecom/3.png";
import Container from "./Container";

export default function HowWeWork({
  description = "Default description",
  steps = [],
}) {
  const leftRef = useRef(null);
  const scrollRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState("auto");
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  // Mouse drag scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  // Handle responsive detection
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set dynamic height only on large screens
  useEffect(() => {
    if (isLargeScreen && leftRef.current) {
      setLeftHeight(leftRef.current.offsetHeight + "px");
    } else {
      setLeftHeight("auto");
    }
  }, [isLargeScreen]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(scrollRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientY - startY;
    scrollRef.current.scrollTop = scrollTop - delta;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-secondary">
      <Container className="px-4 md:px-10 py-16">
        <section
          className="flex flex-col md:flex-row items-start gap-8 text-white"
          onMouseMove={isLargeScreen ? handleMouseMove : undefined}
          onMouseUp={isLargeScreen ? handleMouseUp : undefined}
          onMouseLeave={isLargeScreen ? handleMouseUp : undefined}
        >
          {/* Left side */}
          <div ref={leftRef} className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">How We Work</h2>
            <h3 className="text-xl text-primary font-semibold">
              Our Proven Process
            </h3>
            <p className="text-gray-300">{description}</p>
            <img src={img} alt="Telecom" className="rounded-lg w-full" />
          </div>

          {/* Right side */}
          <div
            className={`relative w-full md:w-1/2`}
            style={{ height: isLargeScreen ? leftHeight : "auto" }}
          >
            {isLargeScreen ? (
              // Scrollable for large screens
              <>
                <div
                  ref={scrollRef}
                  className="h-full overflow-y-auto no-scrollbar pr-2"
                  onMouseDown={handleMouseDown}
                  style={{
                    cursor: isDragging ? "grabbing" : "grab",
                    paddingBottom: "33%", // prevents last card from hiding
                  }}
                >
                  <div className="space-y-6">
                    {steps.map((item, index) => (
                      <motion.div
                        key={index}
                        className="border border-white rounded-lg p-6 bg-secondary"
                      >
                        <p className="text-primary font-semibold">
                          {item.step}
                        </p>
                        <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-300">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Fixed gradient */}
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary to-transparent" />
              </>
            ) : (
              // Normal stacked layout for small screens
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
