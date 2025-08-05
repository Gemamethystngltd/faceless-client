"use client";
import Image from "next/image";

export default function Speakers() {
  return (
    <div className="bg-white mt-32 w-full min-h-screen">
      {/* Header section */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-10">
        <p className="text-[#662D91] text-sm">START LEARNING</p>
        <h2 className="text-black font-bold text-3xl">Our Anonymous Speaker</h2>
        <p className="text-gray-700 text-lg">
          Real Experts. Real Insights. No Spotlight Needed. <br />
          Because the Brightest Minds Choose to Stay Faceless.
        </p>
      </div>

      {/* Speaker cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-8 justify-items-center">
        {/* Speaker Card */}
        <div className="bg-[#F1F1F1] rounded-2xl w-full max-w-sm p-6 flex flex-col gap-4 shadow-sm">
          {/* Icon */}
          <div>
            <Image
              alt="Speaker-icon"
              src="/images/speaker-icon.png"
              width={33}
              height={33}
            />
          </div>

          {/* Details */}
          <div className="text-sm text-gray-800 space-y-2">
            <p>
              <span className="text-gray-500">Name:</span>{" "}
              <strong>Speaker Alpha</strong>
            </p>
            <p>
              <span className="text-gray-500">Niche:</span> Digital
              Transformation
            </p>
            <p>
              <span className="text-gray-500">Bio:</span> A seasoned Digital
              Strategist with over 15 years of experience helping organizations
              embrace the...
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Rating */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  alt="star"
                  src="/images/star.png"
                  width={20}
                  height={20}
                />
              ))}
              <Image
                alt="half-star"
                src="/images/half-star.png"
                width={20}
                height={20}
              />
            </div>

            {/* Experience */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit text-sm text-gray-800">
              15+ Years of Experience
            </div>
          </div>
          <button className="rounded-full w-40 h-10 p-2 mt-2 text-white bg-[#662D91]">
            Access Content
          </button>
        </div>

         <div className="bg-[#F1F1F1] rounded-2xl w-full max-w-sm p-6 flex flex-col gap-4 shadow-sm">
          {/* Icon */}
          <div>
            <Image
              alt="Speaker-icon"
              src="/images/speaker-icon.png"
              width={33}
              height={33}
            />
          </div>

          {/* Details */}
          <div className="text-sm text-gray-800 space-y-2">
            <p>
              <span className="text-gray-500">Name:</span>{" "}
              <strong>Speaker Alpha</strong>
            </p>
            <p>
              <span className="text-gray-500">Niche:</span> Digital
              Transformation
            </p>
            <p>
              <span className="text-gray-500">Bio:</span> A seasoned Digital
              Strategist with over 15 years of experience helping organizations
              embrace the...
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Rating */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  alt="star"
                  src="/images/star.png"
                  width={20}
                  height={20}
                />
              ))}
              <Image
                alt="half-star"
                src="/images/half-star.png"
                width={20}
                height={20}
              />
            </div>

            {/* Experience */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit text-sm text-gray-800">
              15+ Years of Experience
            </div>
          </div>
          <button className="rounded-full w-40 h-10 p-2 mt-2 text-white bg-[#662D91]">
            Access Content
          </button>
        </div>

         <div className="bg-[#F1F1F1] rounded-2xl w-full max-w-sm p-6 flex flex-col gap-4 shadow-sm">
          {/* Icon */}
          <div>
            <Image
              alt="Speaker-icon"
              src="/images/speaker-icon.png"
              width={33}
              height={33}
            />
          </div>

          {/* Details */}
          <div className="text-sm text-gray-800 space-y-2">
            <p>
              <span className="text-gray-500">Name:</span>{" "}
              <strong>Speaker Alpha</strong>
            </p>
            <p>
              <span className="text-gray-500">Niche:</span> Digital
              Transformation
            </p>
            <p>
              <span className="text-gray-500">Bio:</span> A seasoned Digital
              Strategist with over 15 years of experience helping organizations
              embrace the...
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Rating */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  alt="star"
                  src="/images/star.png"
                  width={20}
                  height={20}
                />
              ))}
              <Image
                alt="half-star"
                src="/images/half-star.png"
                width={20}
                height={20}
              />
            </div>

            {/* Experience */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit text-sm text-gray-800">
              15+ Years of Experience
            </div>
          </div>
          <button className="rounded-full w-40 h-10 p-2 mt-2 text-white bg-[#662D91]">
            Access Content
          </button>
        </div>

         <div className="bg-[#F1F1F1] rounded-2xl w-full max-w-sm p-6 flex flex-col gap-4 shadow-sm">
          {/* Icon */}
          <div>
            <Image
              alt="Speaker-icon"
              src="/images/speaker-icon.png"
              width={33}
              height={33}
            />
          </div>

          {/* Details */}
          <div className="text-sm text-gray-800 space-y-2">
            <p>
              <span className="text-gray-500">Name:</span>{" "}
              <strong>Speaker Alpha</strong>
            </p>
            <p>
              <span className="text-gray-500">Niche:</span> Digital
              Transformation
            </p>
            <p>
              <span className="text-gray-500">Bio:</span> A seasoned Digital
              Strategist with over 15 years of experience helping organizations
              embrace the...
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Rating */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  alt="star"
                  src="/images/star.png"
                  width={20}
                  height={20}
                />
              ))}
              <Image
                alt="half-star"
                src="/images/half-star.png"
                width={20}
                height={20}
              />
            </div>

            {/* Experience */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit text-sm text-gray-800">
              15+ Years of Experience
            </div>
          </div>
          <button className="rounded-full w-40 h-10 p-2 mt-2 text-white bg-[#662D91]">
            Access Content
          </button>
        </div>

         <div className="bg-[#F1F1F1] rounded-2xl w-full max-w-sm p-6 flex flex-col gap-4 shadow-sm">
          {/* Icon */}
          <div>
            <Image
              alt="Speaker-icon"
              src="/images/speaker-icon.png"
              width={33}
              height={33}
            />
          </div>

          {/* Details */}
          <div className="text-sm text-gray-800 space-y-2">
            <p>
              <span className="text-gray-500">Name:</span>{" "}
              <strong>Speaker Alpha</strong>
            </p>
            <p>
              <span className="text-gray-500">Niche:</span> Digital
              Transformation
            </p>
            <p>
              <span className="text-gray-500">Bio:</span> A seasoned Digital
              Strategist with over 15 years of experience helping organizations
              embrace the...
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Rating */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  alt="star"
                  src="/images/star.png"
                  width={20}
                  height={20}
                />
              ))}
              <Image
                alt="half-star"
                src="/images/half-star.png"
                width={20}
                height={20}
              />
            </div>

            {/* Experience */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit text-sm text-gray-800">
              15+ Years of Experience
            </div>
          </div>
          <button className="rounded-full w-40 h-10 p-2 mt-2 text-white bg-[#662D91]">
            Access Content
          </button>
        </div>

         <div className="bg-[#F1F1F1] rounded-2xl w-full max-w-sm p-6 flex flex-col gap-4 shadow-sm">
          {/* Icon */}
          <div>
            <Image
              alt="Speaker-icon"
              src="/images/speaker-icon.png"
              width={33}
              height={33}
            />
          </div>

          {/* Details */}
          <div className="text-sm text-gray-800 space-y-2">
            <p>
              <span className="text-gray-500">Name:</span>{" "}
              <strong>Speaker Alpha</strong>
            </p>
            <p>
              <span className="text-gray-500">Niche:</span> Digital
              Transformation
            </p>
            <p>
              <span className="text-gray-500">Bio:</span> A seasoned Digital
              Strategist with over 15 years of experience helping organizations
              embrace the...
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Rating */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  alt="star"
                  src="/images/star.png"
                  width={20}
                  height={20}
                />
              ))}
              <Image
                alt="half-star"
                src="/images/half-star.png"
                width={20}
                height={20}
              />
            </div>

            {/* Experience */}
            <div className="flex items-center bg-[#E4E4E4] rounded-full px-4 py-2 w-fit text-sm text-gray-800">
              15+ Years of Experience
            </div>
          </div>
          <button className="rounded-full w-40 h-10 p-2 mt-2 text-white bg-[#662D91]">
            Access Content
          </button>
        </div>
      </div>

      <button className="rounded-full flex mx-auto items-center justify-center mb-40 text-[#662D91] p-2 w-40 h-10 bg-[#F0EAF4]">
        See all
      </button>
    </div>
  );
}
