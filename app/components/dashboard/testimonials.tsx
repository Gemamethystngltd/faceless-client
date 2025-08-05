"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

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
    const interval = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-[#F0EAF4] w-full px-16 min-h-screen">
      {/* Header section */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-10">
        <p className="text-[#662D91] mt-32 text-sm">TESTIMONIALS</p>
        <h2 className="text-black font-bold text-4xl">
          What They're Saying About Faceless
        </h2>
        <p className="text-gray-700 text-lg">
          Unfiltered reviews from the people who use it <br /> speakers and
          learners alike.
        </p>
      </div>

      {/* Image background container */}
      <div className="relative w-full max-w-[100rem] h-[50rem] mx-auto mb-40 rounded-2xl overflow-hidden">
        <Image
          src="/images/testimonial.jpg"
          alt="face image"
          fill
          className="object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10 rounded-2xl" />

        {/* Testimonial box */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-20">
          <div className="bg-white h-[20rem] w-[40rem] rounded-xl p-10 shadow-lg flex flex-col justify-between">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2"
              >
                <span className="text-black text-lg leading-snug">
                  {testimonials[currentIndex].quote}
                </span>
                <span className="text-black text-xl font-semibold">
                  {testimonials[currentIndex].name}
                </span>
                <span className="text-[#9D9D9D] italic">
                  {testimonials[currentIndex].title}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons + dots */}
            <div className="flex justify-between items-center mt-6">
              {/* Arrows */}
              <div className="flex gap-3">
                <Image
                  alt="left button"
                  src="/images/left-button.png"
                  width={40}
                  height={40}
                  className="cursor-pointer hover:bg-[#662D91] "
                  onClick={goPrev}
                />
                <Image
                  alt="right button"
                  src="/images/right-button.png"
                  width={40}
                  height={40}
                  className="cursor-pointer hover:bg-[#662D91]"
                  onClick={goNext}
                />
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "bg-[#662D91]"
                        : "bg-[#662D91]/30"
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
