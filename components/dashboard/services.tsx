"use client";
import Image from "next/image";

export default function Services() {
  const btnBase =
    "bg-white text-black px-6 py-3 rounded-full text-lg shadow-[0_4px_0_0_rgba(0,0,0,0.4)] border border-black flex items-center justify-center gap-3 w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px]";

  return (
    <div className="bg-white px-6 sm:px-8 md:px-16 mx-auto w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col items-center space-y-6 py-12">
        <div className="text-[#662D91] text-center w-full">
          <p>Faceless</p>
        </div>

        <p className="text-black text-center font-semibold text-2xl sm:text-3xl">
          POWER YOUR VOICE NOT YOUR FACE
        </p>

        <p className="text-center text-base sm:text-lg text-gray-700 max-w-2xl">
          Host, Learn and Sell Without Revealing Your Identity.
          <br /> A new era of Private Digital Experience.
        </p>

        {/* Vector Circle - responsive container (visible from `laptop` and up) */}
        <div className="relative hidden tablet:block w-[min(90vw,600px)] h-[min(90vw,600px)]">
          {/* Central Circle (scales responsively) */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-[120px] sm:w-[141px] md:w-[173px] h-[120px] sm:h-[141px] md:h-[173px] rounded-full flex items-center justify-center bg-[#F7ECFF]">
              <div className="w-[100px] sm:w-[120px] md:w-[141px] h-[100px] sm:h-[120px] md:h-[141px] rounded-full flex items-center justify-center bg-[#F2E0FF]">
                <div className="w-[86px] sm:w-[100px] md:w-[120px] h-[86px] sm:h-[100px] md:h-[120px] rounded-full flex justify-center items-center bg-[#9100FF]">
                  <Image alt="vector" src="/images/Vector.png" width={71} height={47} />
                </div>
              </div>
            </div>
          </div>

          {/* Grid overlay for positioning paired elements - scales naturally */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 items-center justify-items-center pointer-events-none">
            {/* Top-left */}
            <div className="col-start-1 row-start-1 pointer-events-auto flex items-center gap-4 justify-end pr-2 md:pr-6">
              <button className={`${btnBase} translate-y-0`}>
                <span className="flex items-center justify-center gap-2">
                  Host Webservers Anonymously
                  <Image alt="Podcast Icon" src="/images/podcast.png" width={24} height={24} />
                </span>
              </button>
              <Image alt="Top Left" src="/images/Vector-top-left.png" width={140} height={46} className="hidden sm:block" />
            </div>

            {/* Top-right */}
            <div className="col-start-3 row-start-1 pointer-events-auto flex items-center gap-4 justify-start pl-2 md:pl-6">
              <Image alt="Top Right" src="/images/Vector-top-right.png" width={140} height={46} className="hidden sm:block" />
              <button className={`${btnBase}`}>
                <span className="flex items-center justify-center gap-2">
                  <Image alt="pin" src="/images/pin.png" width={24} height={24} />
                  Attend Expert Webinars
                </span>
              </button>
            </div>

            {/* Middle-left */}
            <div className="col-start-1 row-start-2 pointer-events-auto flex items-center gap-4 justify-end pr-2 md:pr-6">
              <button className={btnBase}>
                <span className="flex items-center justify-center gap-2">
                  Sell Digital Products Easily
                  <Image alt="sale" src="/images/sale.png" width={24} height={24} />
                </span>
              </button>
              <Image alt="Middle Left" src="/images/middle-left.png" width={140} height={46} className="hidden sm:block" />
            </div>

            {/* Center (empty — central circle sits above) */}
            <div className="col-start-2 row-start-2"></div>

            {/* Middle-right */}
            <div className="col-start-3 row-start-2 pointer-events-auto flex items-center gap-4 justify-start pl-2 md:pl-6">
              <Image alt="Middle Right" src="/images/middle-right.png" width={140} height={46} className="hidden sm:block" />
              <button className={btnBase}>
                <span className="flex items-center justify-center gap-2">
                  <Image alt="lock" src="/images/lock.png" width={24} height={24} />
                  Stay Curious. Stay Private
                </span>
              </button>
            </div>

            {/* Bottom-left */}
            <div className="col-start-1 row-start-3 pointer-events-auto flex items-center gap-4 justify-end pr-2 md:pr-6">
              <button className={`${btnBase} translate-y-0`}>
                <span className="flex items-center justify-center gap-2">
                  Track Sales and Engagements
                  <Image alt="time" src="/images/time.png" width={24} height={24} />
                </span>
              </button>
              <Image alt="Bottom Left" src="/images/Vector-bottom-left.png" width={140} height={46} className="hidden sm:block" />
            </div>

            {/* Bottom-right */}
            <div className="col-start-3 row-start-3 pointer-events-auto flex items-center gap-4 justify-start pl-2 md:pl-6">
              <Image alt="Bottom Right" src="/images/Vector-bottom-right.png" width={140} height={46} className="hidden sm:block" />
              <button className={btnBase}>
                <span className="flex items-center justify-center gap-2">
                  <Image alt="book" src="/images/book.png" width={24} height={24} />
                  Access Exclusive Materials
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile fallback: stacked single-line buttons — VISIBLE BELOW `laptop` */}
        <div className="mt-6 flex flex-col space-y-4 tablet:hidden w-full items-center">
          <button className={`${btnBase} w-full max-w-lg`}>
            <span className="truncate">Host Webservers Anonymously</span>
          </button>
          <button className={`${btnBase} w-full max-w-lg`}>
            <span className="truncate">Attend Expert Webinars</span>
          </button>
          <button className={`${btnBase} w-full max-w-lg`}>
            <span className="truncate">Sell Digital Products Easily</span>
          </button>
          <button className={`${btnBase} w-full max-w-lg`}>
            <span className="truncate">Stay Curious. Stay Private</span>
          </button>
          <button className={`${btnBase} w-full max-w-lg`}>
            <span className="truncate">Track Sales and Engagements</span>
          </button>
          <button className={`${btnBase} w-full max-w-lg`}>
            <span className="truncate">Access Exclusive Materials</span>
          </button>
        </div>
      </div>
    </div>
  );
}
