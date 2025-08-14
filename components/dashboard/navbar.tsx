"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEquals, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import RegisterAsModal from "../RegisterAsModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { isModalOpen, setIsModalOpen } = useAuth();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    setTimeout(() => {
      router.push(path);
    }, 400);
  };

  const navData = [
    { linkto: "/about", name: "About" },
    { linkto: "/speakers", name: "Speakers" },
    { linkto: "/schedule", name: "Schedule" },
    { linkto: "/workshop", name: "Workshops" },
    { linkto: "/expo", name: "Expo" },
  ];

  const toggleNavBar = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <nav
        className={`
    fixed top-0 left-0 z-60
    flex items-center justify-between
    px-6 w-full h-20 bg-[#F0EAF4] shadow-md

    /* Laptop and above: center & rounded */
    laptop:top-6 laptop:left-1/2 laptop:-translate-x-1/2
    laptop:max-w-[63rem]
    laptop:rounded-full laptop:px-16 laptop:py-4
  `}
      >
        {/* Left: Hamburger on mobile */}
        <button
          className="block laptop:hidden p-2 rounded-md text-white bg-[#662D91]"
          onClick={toggleNavBar}
          style={{
            backgroundColor: isOpen ? "#F0EAF4" : "#662D91",
          }}
        >
          {isOpen ? (
            <FaTimes className="w-6 h-7 text-[#130022]" />
          ) : (
            <FaEquals className="w-6 h-7" />
          )}
        </button>

        {/* Middle: Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/images/header-logo.png"
            alt="FacelessCon Logo"
            width={55}
            height={49}
            className="w-10 h-auto sm:w-12 lg:w-[55px]"
          />
          <span className="text-xl lg:text-3xl font-bold text-[#130022]">
            FacelessCon
          </span>
        </div>

        {/* Right: Desktop Nav Links + Auth */}
        <div className="hidden laptop:flex items-center gap-10">
          <ul className="flex gap-6 text-[#130022] font-medium">
            {navData.map((item) => (
              <li
                key={item.linkto}
                className="cursor-pointer hover:text-[#662D91]"
                onClick={() => handleNavClick(item.linkto)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <ul className="flex gap-4 items-center text-[#130022]">
            <li className="cursor-pointer hover:text-[#662D91]">Login</li>
            <li className="cursor-pointer bg-[#662D91] text-white px-4 py-2 rounded-full hover:bg-[#4b1a74] transition" onClick={() => setIsModalOpen(true)}>
              Start for free
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 text-xl font-semibold"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col gap-6 items-center">
              {navData.map((data, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-md tablet:text-lg"
                >
                  <button
                    className="hover:underline"
                    onClick={() => handleNavClick(data.linkto)}
                  >
                    {data.name}
                  </button>
                </motion.li>
              ))}
              <hr className="border border-t-4 w-full text-webpurple" />
              <motion.li variants={itemVariants}>
                <button className="mt-6 px-4 py-2 rounded-md bg-[#662D91] text-white font-bold text-md tablet:text-lg uppercase tracking-widest">
                  Login
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    toggleNavBar();
                  }}
                  className="mt-6 px-4 py-2 rounded-md bg-[#662D91] text-white font-bold text-md tablet:text-lg uppercase tracking-widest"
                >
                  Start For Free
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {isModalOpen && <RegisterAsModal />}
    </>
  );
}
