import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialsCard from "./TestimonialsCard"; // your prebuilt card

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
    <div className="relative mx-auto px-3">
      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute cursor-pointer left-2 sm:-left-5 top-[45%] -translate-y-1/2 z-10 bg-orange-500 p-2 rounded-full text-white shadow-md hover:bg-orange-600 transition"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute cursor-pointer right-2 sm:-right-5  top-[45%] -translate-y-1/2 z-10 bg-orange-500 p-2 rounded-full text-white shadow-md hover:bg-orange-600 transition"
      >
        <ArrowRight size={20} />
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
  );
};

export default TestimonialCarousel;
