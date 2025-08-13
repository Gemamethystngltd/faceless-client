"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "lib/data";
import { AnimatePresence, motion } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-[#F0EAF4] w-full px-4 sm:px-8 lg:px-16 py-16">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-10">
        <p className="text-[#662D91] text-xs sm:text-sm mt-4 sm:mt-8">TESTIMONIALS</p>
        <h2 className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl">
          What They're Saying About Faceless
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Unfiltered reviews from the people who use it <br className="hidden sm:block" /> speakers and
          learners alike.
        </p>
      </div>

      {/* Image + Box container */}
      <div className="relative w-full h-[28rem] sm:h-[35rem] lg:h-[50rem] mx-auto mb-20 rounded-2xl overflow-hidden">
        <Image
          src="/images/testimonial.jpg"
          alt="face image"
          fill
          className="object-contain lg:object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10 rounded-2xl" />

        <div
          className="
            absolute z-20
            bottom-4 right-4
            w-64
            sm:top-1/2 sm:right-10 sm:w-[28rem]
            lg:right-20 lg:w-[40rem]
            transform sm:-translate-y-1/2
          "
        >
          <div className="bg-white w-full rounded-xl p-4 sm:p-8 shadow-lg flex flex-col justify-between min-h-[10rem] sm:min-h-[18rem] lg:min-h-[20rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-1 sm:gap-2"
              >
                <span className="text-black text-sm sm:text-base lg:text-lg leading-snug">
                  {testimonials[currentIndex].quote}
                </span>
                <span className="text-black text-base sm:text-lg lg:text-xl font-semibold">
                  {testimonials[currentIndex].name}
                </span>
                <span className="text-[#9D9D9D] italic text-xs sm:text-sm">
                  {testimonials[currentIndex].title}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Nav + dots */}
            <div className="flex justify-between items-center mt-4 sm:mt-6">
              {/* Arrows */}
              <div className="flex gap-2 sm:gap-3">
                <button onClick={goPrev} aria-label="Previous testimonial" className="p-0">
                  <Image
                    alt="left button"
                    src="/images/left-button.png"
                    width={28}
                    height={28}
                    className="cursor-pointer hover:opacity-80"
                  />
                </button>
                <button onClick={goNext} aria-label="Next testimonial" className="p-0">
                  <Image
                    alt="right button"
                    src="/images/right-button.png"
                    width={28}
                    height={28}
                    className="cursor-pointer hover:opacity-80"
                  />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-1 sm:gap-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      i === currentIndex ? "bg-[#662D91]" : "bg-[#662D91]/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
