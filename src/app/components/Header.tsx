"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import MiniLoader from "./MiniLoader";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [sidebar, setSidebar] = useState("");
  // const [token, setToken] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isAuthenticated, logout, isLoading, setShowSavedInvoices } =
    useAuth();

  // useEffect(() => {
  //   const storedToken =
  //     typeof window !== "undefined" ? localStorage.getItem("token") : null;
  //   setToken(storedToken);
  //   setIsLoading(false);
  // }, []);

  // const handleLogout = () => {
  //   setToken(null);
  //   localStorage.clear();
  // };

  return (
    <div className="w-full lg:px-16 px-1 py-2 text-center bg-white shadow-lg flex flex-row items-center justify-between fixed">
      <div className="sm:w-full w-auto flex justify-start">
        <button
          className="rounded-full sm:p-5 p-3 hover:bg-gray-200 duration-300 lg:hidden sm:text-2xl text-lg"
          onClick={() => setSidebar(sidebar === "showNav" ? "" : "showNav")}
        >
          <RiMenu4Fill  />
        </button>
      </div>
      <nav
        className={`flex flex-col ${
          sidebar ? "nav-menu active" : "nav-menu"
        } shadow-lg w-full`}
      >
        <div className="w-full text-end">
          <button
            className="p-3 hover:bg-gray-200 duration-300 rounded-bl-2xl"
            onClick={() => setSidebar("")}
          >
            <IoMdClose size={25} />
          </button>
        </div>
        <ul className="flex navLinks flex-col lg:flex-row text-center lg:text-left gap-2 lg:gap-0 mt-10">
          <li
            className="cursor-pointer hover:bg-gray-200 px-6 py-2 mx-6 rounded-lg duration-300"
            onClick={() => setSidebar("")}
          >
            Home
          </li>

          {isLoading ? (
            <div className="text-center">
              <MiniLoader />
            </div>
          ) : (
            <li className="flex flex-col gap-4 mx-6">
              {isAuthenticated ? (
                <>
                  {/* <select
                className="p-2 rounded-lg outline-none bg-white border-[1px] border-[#d5dbe2] cursor-pointer"
                >
                  <option>invoice1</option>
                  <option>invoice2</option>
                </select> */}
                  <button className="bg-[#9b59b6] hover:bg-[#8e44ad] px-6 py-2 rounded-lg text-white font-medium duration-300">
                    Saved invoices
                  </button>
                  <button
                    className="bg-[#f39c12] hover:bg-[#d35400] px-6 py-2 rounded-lg text-white font-medium duration-300"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </li>
          )}
        </ul>
      </nav>
      <div className="w-full">
        <h1 className="font-semibold sm:text-3xl text-lg lg:text-center text-start">
          NEXINVOICE
        </h1>
        <p className="sm:text-lg text-xs text-gray-500 lg:text-center text-start">
          Your Website for Invoice
        </p>
      </div>
      <div className="lg:flex gap-4 w-full justify-end hidden">
        {isLoading ? (
          <div className="text-center">
            <MiniLoader />
          </div>
        ) : isAuthenticated ? (
          <>
            <button
              className="bg-[#9b59b6] hover:bg-[#8e44ad] px-6 py-2 rounded-lg text-white font-medium duration-300"
              onClick={() => setShowSavedInvoices(true)}
            >
              Saved invoices
            </button>
            <button
              className="bg-[#f39c12] hover:bg-[#d35400] px-6 py-2 rounded-lg text-white font-medium duration-300"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
