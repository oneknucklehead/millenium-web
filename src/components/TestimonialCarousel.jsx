import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TestimonialsCard from "./TestimonialsCard";

const TestimonialCarousel = ({ testimonials }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full flex justify-center">
      <div className="relative max-w-[1200px] w-full px-4">
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute hidden lg:flex items-center justify-center cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-full lg:translate-x-[-50%] z-10 bg-primary p-2 rounded-full text-white shadow-md hover:bg-primary transition"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
              >
                <TestimonialsCard {...t} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="absolute hidden lg:flex items-center justify-center cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-full lg:translate-x-[50%] z-10 bg-primary p-2 rounded-full text-white shadow-md hover:bg-primary transition"
        >
          <ArrowRight size={20} />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-primary w-8" : "bg-[#FFB380] w-2"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
