"use client";

import { Bell, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import NotificationDropdown from "./NotificationDropDown";
import AccountDropDown from "./AccountDropDown";
import { Breadcrumbs } from "./Breadcrumbs";

const notifications = [
  {
    id: 1,
    message: "New webinars available. Go register now!!",
  },
  {
    id: 2,
    message: "Checkout the materials uploaded by the speakers",
  },
];

export default function AppTopNav() {
  const [notifOpen, setNotifOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node)
      ) {
        setNotifOpen(false);
      }
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target as Node)
      ) {
        setAccountOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between py-2 px-5">
      <Breadcrumbs />
      <div className="flex justify-between items-center space-x-3 w-4/5">
        <div className="relative w-3/4">
          <input className="w-full bg-[#F1F1F1] rounded-full p-2 outline-none focus:ring-2 focus:ring-[#532174] transition-colors duration-200 peer" />
          <div className="absolute inset-y-0 left-3 flex items-center space-x-1 text-gray-500 peer-focus:hidden">
            <Search />
            <span>Search</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <div className="relative" ref={notifRef}>
            <button
              type="button"
              className="relative p-2 rounded-full bg-[#F1F1F1] transition cursor-pointer"
              aria-label="Notifications"
              onClick={() => setNotifOpen((prev) => !prev)}
            >
              <Bell className="w-6 h-6 text-gray-950" />
              <span className="absolute -top-1.5 -right-1.5 text-red-500 text-sm w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                {notifications.length}
              </span>
            </button>
            {notifOpen && (
              <NotificationDropdown notifications={notifications} />
            )}
          </div>
          <div className="relative" ref={accountRef}>
            <div
              className="flex items-center space-x-2 bg-[#F1F1F1] rounded-full py-2 px-3 cursor-pointer"
              onClick={() => setAccountOpen((prev) => !prev)}
            >
              <Image
                src="/svgs/profile-head.svg"
                alt="Profile Img"
                width={20}
                height={20}
              />
              <p className="text-gray-950">Emverse</p>
            </div>
            {accountOpen && <AccountDropDown />}
          </div>
        </div>
      </div>
    </div>
  );
}
