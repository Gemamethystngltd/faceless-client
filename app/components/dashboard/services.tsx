"use client";
import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-white px-16 mx-auto w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col items-center space-y-6">
        <div className="text-[#662D91] text-center w-full">
          <p>Faceless</p>
        </div>
        <p className="text-black text-center font-semibold text-3xl">
          POWER YOUR VOICE NOT YOUR FACE
        </p>
        <p className="text-center text-lg text-gray-700">
          Host, Learn and Sell Without Revealing Your Identity.
          <br /> A new era of Private Digital Experience.
        </p>

        {/* Vector Circle */}
        <div className="relative w-[600px] h-[600px] flex items-center justify-center">
          {/* Central Circle */}
          <div className="w-[173px] h-[173px] rounded-full flex items-center justify-center bg-[#F7ECFF] z-10">
            <div className="w-[141px] h-[141px] rounded-full flex items-center justify-center bg-[#F2E0FF]">
              <div className="w-[120px] h-[120px] rounded-full flex justify-center items-center bg-[#9100FF]">
                <Image
                  alt="vector"
                  src="/images/Vector.png"
                  width={71}
                  height={47}
                />
              </div>
            </div>
          </div>

          {/* Top Left Pair */}
          <div className="flex items-center gap-4 absolute top-32 -left-[25rem]">
            <button className="bg-white relative -top-8 text-black px-6 py-3 rounded-full w-[25rem] text-lg shadow-[0_4px_0_0_rgba(0,0,0,0.4)] border border-black">
              <span className="flex items-center justify-center gap-2">
                Host Webservers Anonymously
                <Image
                  alt="Podcast Icon"
                  src="/images/podcast.png"
                  width={24}
                  height={24}
                />
              </span>
            </button>

            <Image
              alt="Top Left"
              src="/images/Vector-top-left.png"
              width={220}
              height={73}
            />
          </div>

          {/* Top Right Pair */}
          <div className="flex items-center gap-4 absolute top-32 -right-[25rem]">
            <Image
              alt="Top Right"
              src="/images/Vector-top-right.png"
              width={220}
              height={73}
            />
            <button className="bg-white relative -top-8 text-black px-6 py-3 rounded-full w-[25rem] text-lg shadow-[0_4px_0_0_rgba(0,0,0,0.4)] border border-black">
              <span className="flex items-center justify-center gap-2">
                <Image
                  alt="Podcast Icon"
                  src="/images/pin.png"
                  width={24}
                  height={24}
                />
                Attend Expert Wabinars
              </span>
            </button>
          </div>

          {/* Middle Left Pair */}
          <div className="flex items-center gap-4 absolute top-1/2 -translate-y-1/2 -left-[25rem]">
            <button className="bg-white relative text-black px-6 py-3 rounded-full w-[25rem] text-lg shadow-[0_4px_0_0_rgba(0,0,0,0.4)] border border-black">
              <span className="flex items-center justify-center gap-2">
                Sell Digital Products Easily
                <Image
                  alt="Podcast Icon"
                  src="/images/sale.png"
                  width={24}
                  height={24}
                />
              </span>
            </button>
            <Image
              alt="Middle Left"
              src="/images/middle-left.png"
              width={220}
              height={73}
            />
          </div>

          {/* Middle Right Pair */}
          <div className="flex items-center gap-4 absolute top-1/2 -translate-y-1/2 -right-[25rem]">
            <Image
              alt="Middle Right"
              src="/images/middle-right.png"
              width={220}
              height={73}
            />
            <button className="bg-white relative text-black px-6 py-3 rounded-full w-[25rem] text-lg shadow-[0_4px_0_0_rgba(0,0,0,0.4)] border border-black">
              <span className="flex items-center justify-center gap-2">
                <Image
                  alt="Podcast Icon"
                  src="/images/lock.png"
                  width={24}
                  height={24}
                />
                Stay Curious. Stay Private
              </span>
            </button>
          </div>

          {/* Bottom Left Pair */}
          <div className="flex items-center gap-4 absolute bottom-32 -left-[25rem]">
           <button className="bg-white relative top-8 text-black px-6 py-3 rounded-full w-[25rem] text-lg shadow-[0_4px_0_0_rgba(0,0,0,0.4)] border border-black">
              <span className="flex items-center justify-center gap-2">
                Track Sales and Engagements
                <Image
                  alt="Podcast Icon"
                  src="/images/time.png"
                  width={24}
                  height={24}
                />
              </span>
            </button>
            <Image
              alt="Bottom Left"
              src="/images/Vector-bottom-left.png"
              width={220}
              height={73}
            />
          </div>

          {/* Bottom Right Pair */}
          <div className="flex items-center gap-4 absolute bottom-32 -right-[25rem]">
            <Image
              alt="Bottom Right"
              src="/images/Vector-bottom-right.png"
              width={220}
              height={73}
            />
            <button className="bg-white relative top-8 text-black px-6 py-3 rounded-full w-[25rem] text-lg shadow-[0_4px_0_0_rgba(0,0,0,0.4)] border border-black">
              <span className="flex items-center justify-center gap-2">
                <Image
                  alt="Podcast Icon"
                  src="/images/book.png"
                  width={24}
                  height={24}
                />
                Access Exclusive Materials
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
