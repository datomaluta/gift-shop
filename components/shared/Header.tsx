"use client";

import { navbarCategoryLinks } from "@/constants";
import Link from "next/link";
import { BsFillBasketFill } from "react-icons/bs";
import { FaChevronDown, FaUser } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <header className="max-w-[1200px] mx-auto text-primary  flex justify-between items-center py-4 px-4 xl:px-0">
        <div className=" uppercase text-primary">
          <Link
            href={"/"}
            className="text-2xl font-extrabold font-sans leading-none"
          >
            Regalo
          </Link>
          <p className="tracking-[3.7px] text-xs">Gift Shop</p>
        </div>

        <div className="font-semibold  gap-10  h-[50px] justify-center items-center hidden lg:flex">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <div className="relative group h-full flex items-center">
            <p className="flex items-center gap-2 cursor-pointer ">
              Shop by Category <FaChevronDown className="text-xs" />
            </p>
            <div className="bg-white  flex-col gap-6 text-sm px-4 py-4 shadow-md border-t-2  border-primary rounded-b absolute top-[100%]  whitespace-nowrap hidden group-hover:flex">
              {navbarCategoryLinks.map((link) => (
                <Link
                  key={link.id}
                  className="hover:underline hover:text-primary"
                  href={link.href}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <Link className="hover:underline" href="/products">
            About Us
          </Link>
          <Link className="hover:underline" href="/products">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-6 lg:gap-7">
          <div className="flex gap-2 relative">
            <button className="hidden lg:inline-block hover:text-tint">
              <MdOutlineSearch className="text-2xl" />
            </button>
          </div>

          <button className="text-2xl lg:hidden ">
            <RxHamburgerMenu />
          </button>

          <button className="flex items-center gap-1 font-medium relative hover:text-tint">
            <BsFillBasketFill className="text-2xl" />
            <span
              className="bg-primary text-white  h-5 w-5 text-[10px]  flex items-center justify-center rounded-full
           absolute -right-4 -translate-y-1/2"
            >
              0
            </span>
          </button>

          <button className="hover:text-tint">
            <FaUser className="text-xl" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
