"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";

const Header = () => {
  const [sidebar, setSidebar] = useState("");
  return (
    <div className="w-full lg:px-16 px-3 text-center bg-white shadow-lg py-5 flex flex-row items-center justify-between fixed">
      <div className="w-full flex justify-start">
        <button
          className="rounded-full p-5 hover:bg-gray-200 duration-300 lg:hidden"
          onClick={() => setSidebar(sidebar === "showNav" ? "" : "showNav")}
        >
          <RiMenu4Fill size={25} />
        </button>
      </div>
      <nav
        className={`flex flex-col ${
          sidebar ? "nav-menu active" : "nav-menu"
        } shadow-lg w-full`}
      >
        <div className="w-full text-end">
          <button
            className="p-3 hover:bg-gray-200"
            onClick={() => setSidebar("")}
          >
            <IoMdClose size={25} />
          </button>
        </div>
        <ul className="flex navLinks flex-col lg:flex-row text-center lg:text-left gap-4 lg:gap-0">
          <li className="cursor-pointer" onClick={() => setSidebar("")}>
            Home
          </li>
          <li className="flex flex-col gap-4 mx-6">
            <Link
              href={"/auth/login"}
              className="bg-[#3498db] hover:bg-[#2980b9] px-6 py-2 rounded-lg text-white font-medium duration-300"
            >
              Login
            </Link>
            <Link
              href={"/auth/register"}
              className="bg-[#34495e] hover:bg-[#2c3e50] px-6 py-2 rounded-lg text-white font-medium duration-300"
            >
              Signup
            </Link>
            <button className="bg-[#f39c12] hover:bg-[#d35400] px-6 py-2 rounded-lg text-white font-medium duration-300">
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <div className="w-full">
        <h1 className="font-semibold sm:text-4xl text-xl lg:text-center text-start">
          NEXINVOICE
        </h1>
        <p className="sm:text-xl text-sm text-gray-500 lg:text-center text-start">
          Your Website for Invoice
        </p>
      </div>
      <div className="lg:flex gap-4 w-full justify-end hidden">
        <Link
          href={"/auth/login"}
          className="bg-[#3498db] hover:bg-[#2980b9] px-6 py-2 rounded-lg text-white font-medium duration-300"
        >
          Login
        </Link>
        <Link
          href={"/auth/register"}
          className="bg-[#34495e] hover:bg-[#2c3e50] px-6 py-2 rounded-lg text-white font-medium duration-300"
        >
          Signup
        </Link>
        <button className="bg-[#f39c12] hover:bg-[#d35400] px-6 py-2 rounded-lg text-white font-medium duration-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
