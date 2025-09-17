"use client";
import useAos from "@/hooks/useAos";
import Lenis from "lenis";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCartActions } from "@/lib/atoms/cart";
import { RiMenu3Fill } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";

import { usePathname } from "next/navigation";
import useResponsivness from "@/hooks/useResponsivness";
import SearchBar from "./search/SearchBar";
import useSearch from "./search/useSearch";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import CartSidebar from "@/components/view/cart/CartSidebar";
const navLinks = [
  {
    title: "Feature Products",
    link: "/shop",
  },
  {
    title: "Top 20",
    link: "/shop",
    anchor: true,
  },
  {
    title: "WHAT THE FAQ",
    link: "/faqs",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];
const Navbar = () => {
  useAos();

  const { cart, initializeCart } = useCartActions();
  const [open, setOpen] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { activeSearch, handleSearchActive } = useSearch();
  const { isDesktop } = useResponsivness();
  const pathname = usePathname();

  React.useEffect(() => {
    if (!cart?.checkoutUrl) initializeCart();
  }, [cart?.checkoutUrl, initializeCart]);

  const count = cart?.lines?.edges?.length ?? 0;
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      // duration: 1.2,

      // easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true, // Ensure touchpad support
      gestureOrientation: "both", // Supports both vertical & horizontal gestures
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  function toggleSidebar() {
    if (!isDesktop) {
      const body = document.querySelector("body");
      body.classList.toggle("active");
      setIsSidebarOpen(!isSidebarOpen);
    }
  }
  return (
    <header className="absolute z-[9] top-0 left-0 w-full bg-white">
      <SearchBar
        handleSearchActive={handleSearchActive}
        activeSearch={activeSearch}
      />
      <nav className="w-full borde r-b border-black lg:py-[1.66666666667vh] py-[20px]">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-x-4 ">
            <Link
              href={"/"}
              aria-label="Home. logo"
              role="img"
              className="relative lg:min-h-[13.8vh] lg:min-w-[13.8vh] lg:size-[13.8888888889vh] sm:size-[150px] size-[70px]"
            >
              <Image fill src="/images/icons/marquee-logo-1.png" alt="logo" />
            </Link>
            <span className="text-[14px] lg:text-[1.25vw] font-medium hidden lg:block">
              MAMA BOBS's IS{" "}
              <span className="text-[18px] lg:text-[1.8vw] font-bold">
                HOME
              </span>
            </span>
            <span className="text-[14px] lg:text-[1.25vw] font-medium lg:hidden block">
              MAMA BOBS's
            </span>
          </div>
          <div>
            {/* <button
              onClick={() => setShow(!show)}
              className={`${
                show ? "hidden" : ""
              } sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            >
              <svg
                aria-haspopup="true"
                aria-label="open Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden icon icon-tabler icon-tabler-menu"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </button> */}
            <div
              id="menu"
              className={` ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } lg:translate-x-0 absolute lg:relative top-0 bottom-0 left-0 right-0 bg-white lg:bg-transparent h-[100vh] lg:h-[unset] transition-all duration-300`}
            >
              <button
                onClick={toggleSidebar}
                className={`block lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed z-30 top-0 mt-6 right-6 sm:mt-8 sm:right-8`}
              >
                <IoCloseSharp className="text-foreground cursor-pointer size-6 sm:size-8 min-w-6 sm:min-w-8" />
              </button>
              <ul className="flex h-full lg:h-[unset] text-3xl lg:text-[1.25vw] items-center p-10 lg:p-0 md:flex gap-6 flex-col lg:flex-row justify-center ">
                {navLinks.map((navLink, index) => (
                  <li
                    onClick={toggleSidebar}
                    key={index}
                    className={`${
                      pathname == navLink.link ? "text-yellow" : ""
                    } text-foreground hover:text-[#ca8a04] cursor-pointer capitalize font-medium`}
                  >
                    {navLink.anchor ? (
                      <a href={navLink.link}>{navLink.title}</a>
                    ) : (
                      <Link href={navLink.link}>{navLink.title}</Link>
                    )}
                  </li>
                ))}
                {/* <Link
                  href={"/shop"}
                  className="w-full text-center lg:font-bold md:hidden block bg-[#a16207] transition duration-150 ease-in-out hover:bg-[#ca8a04] text-white rounded px-4 py-3 text-2xl"
                >
                  Shop now
                </Link> */}
              </ul>
            </div>
          </div>
          {/* <Link
            href={"/shop"}
            className="lg:text-lg lg:font-bold hidden md:block bg-[#a16207] transition duration-150 ease-in-out hover:bg-[#ca8a04] text-white rounded px-4 sm:px-4 lg:py-[0.625vw] py-1 sm:py-3 sm:text-sm"
          >
            Shop now
          </Link> */}

          {/* <div className="flex gap-x-4 items-center">
            <Link
              href={"/cart"}
              className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Search size={20} /> Search
            </Link>
            <Link
              href={"/cart"}
              className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <ShoppingCart size={20} /> Cart 
              <span className="bg-red-500 text-white text-xs px-1 rounded-full">
                0
              </span>
            </Link>
          </div> */}
          {/* <div className="flex gap-x-3 lg:gap-x-4 items-stretch">
            <LuSearch
              onClick={() => handleSearchActive(true)}
              className="text-foreground cursor-pointer sm:w-6 h-6 size-5 my-auto lg:flex hidden"
            />
            <div className="lg:flex hidden items-center relative z-[-1]">
              <span className="w-[1px] min-w-[1px] h-[70%] bg-foreground block opacity-70"></span>
            </div>{" "}
            <Link href={"/cart"} className="lg:flex hidden items-center gap-2">
              <BsCart2 className="text-foreground cursor-pointer sm:w-6 h-6 size-5" />

              <span className="bg-red-500 text-white text-xs px-1 rounded-full">
                0
              </span>
            </Link>
            <div className="lg: hidden  items-center relative z-[-1]">
              <span className="w-[1px] min-w-[1px] h-[70%] bg-foreground block opacity-70"></span>
            </div>{" "}
            <RiMenu3Fill
              onClick={toggleSidebar}
              className="text-foreground cursor-pointer w-6 h-6 sm:w-8 sm:h-8 block lg:hidden"
            />
          </div> */}
          <div className="flex items-center gap-x-2">
            <div className="flex items-center">
              <Button
                className="p-0 bg-transparent text-black hover:text-yellow hover:bg-transparent size-[unset]"
                onClick={() => setOpen(true)}
                aria-label="Open cart"
              >
                <ShoppingCart />
              </Button>
              {count > 0 && (
                <Badge variant="default" className="absolute -top-2 right-0">
                  {count}
                </Badge>
              )}
            </div>
            <span className="lg:hidden">|</span>
            <RiMenu3Fill
              onClick={toggleSidebar}
              className="text-foreground cursor-pointer w-6 h-6 sm:w-8 sm:h-8 block lg:hidden"
            />
            {/* <Link href="/auth">
            <Button size="sm">Login</Button>
          </Link> */}
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar open={open} onOpenChange={setOpen} />
    </header>
  );
};

export default Navbar;
