import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Asterisk } from "lucide-react";

export default function Ticker({ services }) {
  const controls = useAnimation();
  const tickerRef = useRef(null);

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  // const handleMouseEnter = () => controls.stop();
  // const handleMouseLeave = () => {
  //   controls.start({
  //     x: ["0%", "-100%"],
  //     transition: {
  //       x: {
  //         repeat: Infinity,
  //         repeatType: "loop",
  //         duration: 20,
  //         ease: "linear",
  //       },
  //     },
  //   });
  // };

  return (
    <div
      className="w-full overflow-hidden bg-[#16254b] py-4"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex whitespace-nowrap gap-8 px-4"
        animate={controls}
        ref={tickerRef}
      >
        {[...services, ...services].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-white text-sm md:text-xl font-semibold shrink-0"
          >
            {/* <Asterisk size={12} className="text-orange-500" /> */}
            <span className="block md:hidden">
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 16C32 13.6448 31.48 11.3186 30.4772 9.18753L16 16H32Z"
                  fill="#FF6600"
                />
                <path
                  d="M24 29.8564C26.0397 28.6788 27.7942 27.0654 29.1384 25.1314L16 16L24 29.8564Z"
                  fill="#FF6600"
                />
                <path
                  d="M8 29.8564C10.0397 31.034 12.3142 31.7468 14.6612 31.9439L16 16L8 29.8564Z"
                  fill="#FF6600"
                />
                <path
                  d="M0 16C-2.059e-07 18.3552 0.519962 20.6814 1.52277 22.8125L16 16L0 16Z"
                  fill="#FF6600"
                />
                <path
                  d="M8 2.14359C5.96032 3.3212 4.20577 4.93459 2.86161 6.86858L16 16L8 2.14359Z"
                  fill="#FF6600"
                />
                <path
                  d="M24 2.14359C21.9603 0.965984 19.6858 0.253196 17.3389 0.0561152L16 16L24 2.14359Z"
                  fill="#FF6600"
                />
              </svg>
            </span>
            <span className="hidden md:block">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 16C32 13.6448 31.48 11.3186 30.4772 9.18753L16 16H32Z"
                  fill="#FF6600"
                />
                <path
                  d="M24 29.8564C26.0397 28.6788 27.7942 27.0654 29.1384 25.1314L16 16L24 29.8564Z"
                  fill="#FF6600"
                />
                <path
                  d="M8 29.8564C10.0397 31.034 12.3142 31.7468 14.6612 31.9439L16 16L8 29.8564Z"
                  fill="#FF6600"
                />
                <path
                  d="M0 16C-2.059e-07 18.3552 0.519962 20.6814 1.52277 22.8125L16 16L0 16Z"
                  fill="#FF6600"
                />
                <path
                  d="M8 2.14359C5.96032 3.3212 4.20577 4.93459 2.86161 6.86858L16 16L8 2.14359Z"
                  fill="#FF6600"
                />
                <path
                  d="M24 2.14359C21.9603 0.965984 19.6858 0.253196 17.3389 0.0561152L16 16L24 2.14359Z"
                  fill="#FF6600"
                />
              </svg>
            </span>

            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
