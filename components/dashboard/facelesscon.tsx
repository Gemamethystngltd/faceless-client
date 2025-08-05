"use client";
import Image from "next/image";

export default function FacelessCon() {
  return (
    <div className="bg-[#FAF4FF] mx-auto py-20 w-full min-h-screen">
      <div className="w-full flex flex-col lg:flex-row">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 px-4 space-y-6 flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl px-20 font-bold text-[#333] leading-snug">
            Your personal webinar hub.
          </h2>

          <p className="text-gray-700 px-20 text-lg leading-relaxed">
            Everything you need to attend, explore and engage in one smart
            dashboard
          </p>

          {/* Cards for Host and Attendees */}
          <div className="grid grid-cols-2 items-start gap-6">
            <div className="flex flex-row items-center justify-center text-center gap-3">
              <span>
                <Image
                  src={"/images/track-time.png"}
                  alt="Faceless icon"
                  width={34}
                  height={34}
                />
              </span>
              <span className="text-xl">Track what's live right now</span>
            </div>
            <div className="flex flex-row items-center justify-center text-center gap-3">
              <span>
                <Image
                  src={"/images/track-time.png"}
                  alt="Faceless icon"
                  width={34}
                  height={34}
                />
              </span>
              <span className="text-xl">See whats coming next</span>
            </div>
            <div className="flex flex-row items-center justify-center text-center gap-3">
              <span>
                <Image
                  src={"/images/track-cloud.png"}
                  alt="Faceless icon"
                  width={34}
                  height={34}
                />
              </span>
              <span className="text-xl">Access completed Webinars</span>
            </div>
            <div className="flex flex-row items-center justify-center text-center gap-3">
              <span>
                <Image
                  src={"/images/track-search.png"}
                  alt="Faceless icon"
                  width={34}
                  height={34}
                />
              </span>
              <span className="text-xl">Discover more Webinars</span>
            </div>
          </div>
          <div className="px-20">
            <button className="bg-[#662D91] text-white rounded-full p-5">Start Exploring</button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-10">
          <Image
            alt="Faceless Screenshot"
            src="/images/faceless-screenshot.png"
            width={550}
            height={300}
            className="rounded-xl h-auto"
          />
        </div>
      </div>
    </div>
  );
}
