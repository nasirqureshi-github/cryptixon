"use client";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Icon } from "@iconify/react";
import { Bell } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import RightSideDrawer from "../Drawer";
import { ModeToggle } from "../Modetoggler";

const notification = [
  { notify: "📩 New message from Nasir" },
  { notify: "✅ Payment received" },
  { notify: "📦 Order shipped" },
  { notify: "📩 New message from Umair" },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const [open, setOpen] = useState(false);
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <header className="flex h-25 w-full shrink-0 items-center px-4 bg-[#FFFFFF] dark:bg-neutral-900  fixed z-20 shadow">
      <div className="flex items-center gap-4 ">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <div className="hidden md:flex gap-4 px-4 py-2 bg-[#F1F1F1] rounded-full items-center dark:bg-black ">
          <Input
            type="text"
            placeholder="Search here..."
            className="px-2 py-1.5 !outline-none !border-none w-full !text-lg placeholder:text-gray-400 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-transparent"
          />
          <Icon
            icon="circum:search"
            width="35"
            height="35"
            className="cursor-pointer dark:text-white hover:text-[#2258BF]"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto md:ml-96">
        <ModeToggle />
        <div
          ref={dropdownRef}
          className="relative size-12 flex justify-center items-center rounded-full cursor-pointer bg-[#F1F1F1] dark:bg-background"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <Bell />
          <div className="absolute -top-2 -right-2 size-6 flex justify-center items-center bg-primary text-primary text-xs rounded-full">
            12
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div
              className=" absolute top-14 w-74 bg-white border rounded-lg shadow-lg p-2 z-50
    right-0 sm:right-0 sm:left-auto
    max-sm:left-1/2 max-sm:-translate-x-1/2 overflow-y-auto dark:bg-neutral-900"
            >
              {notification.map((item) => {
                return (
                  <div key={item.notify} className="border-b pb-4">
                    <div className="p-2 hover:bg-gray-100 rounded dark:hover:bg-background">
                      {item.notify}
                    </div>
                  </div>
                );
              })}

              <div className="text-center py-2">
                <Link
                  href=""
                  className="text-blue-600 pt-22 hover:text-blue-800 transition-all dark:text-white dark:hover:text-blue-800 "
                >
                  See all Notification
                </Link>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative size-12 flex justify-center items-center rounded-full cursor-pointer bg-[#F1F1F1] dark:bg-black "
          onClick={toggleDrawer(true)}
        >
          <Icon icon="tabler:message" width="24" height="24" />
          <div className="absolute -top-2 -right-2 size-6 flex justify-center items-center bg-primary text-primary text-xs rounded-full">
            5
          </div>
        </div>
        <RightSideDrawer opendrawer={open} toggleDrawer={toggleDrawer(false)} />
      </div>
    </header>
  );
};

export default Navbar;
