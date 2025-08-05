"use client";
import Image from "next/image";

export default function Navbar() {
  return (
   <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#F0EAF4] flex items-center justify-between rounded-full px-16 py-4 w-[96rem] shadow-md">
   {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/header-logo.png"
          alt="FacelessCon Logo"
          width={55}
          height={49}
        />
        <span className="text-3xl font-bold text-[#130022]">FacelessCon</span>
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex gap-6 text-[#130022] font-medium">
        <li className="cursor-pointer hover:text-[#662D91]">About</li>
        <li className="cursor-pointer hover:text-[#662D91]">Speakers</li>
        <li className="cursor-pointer hover:text-[#662D91]">Schedule</li>
        <li className="cursor-pointer hover:text-[#662D91]">Workshops</li>
        <li className="cursor-pointer hover:text-[#662D91]">Expo</li>
      </ul>

      {/* Right: Auth Buttons */}
      <ul className="flex gap-4 items-center text-[#130022] font-medium">
        <li className="cursor-pointer hover:text-[#662D91]">Login</li>
        <li className="cursor-pointer bg-[#662D91] text-white px-4 py-2 rounded-full hover:bg-[#4b1a74] transition">
          Start for free
        </li>
      </ul>
    </nav>
  );
}
