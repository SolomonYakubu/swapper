import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../public/images/logo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import ExportedImage from "next-image-export-optimizer";
export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSocialOpen, setSocialOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [home, setHome] = useState(true);
  const list = [["Docs", "/"]];

  const sessionList = [
    ["Dashboard", "/dashboard", true],
    ["Profile", "/profile", true],
  ];
  const router = useRouter();
  useEffect(() => {
    setNavOpen(false);
    if (router.pathname === "/") {
      return setHome(true);
    }
    setHome(false);
  }, [router]);

  useEffect(() => {
    const options = { passive: true }; // options must match add/remove event
    const scroll = () => {
      const { pageYOffset, scrollY } = window;
      setPage(scrollY);
    };
    document.addEventListener("scroll", scroll, options);
    // remove event on unmount to prevent a memory leak
    () => document.removeEventListener("scroll", scroll);
  }, []);
  return (
    <div className="fixed top-0 z-20">
      <div
        className={`${
          (page < 70 && "bg-white") || "bg-white"
        } transition-all duration-500 p-4 md:px-24 md:py-8 flex w-screen items-center justify-between shadow-lg  h-20`}
      >
        <div className="block w-20 p-1">
          <ExportedImage
            src={logo}
            alt="logo"
            layout="responsive"
            className=""
          />
        </div>
        <ul className="  md:justify-between gap-4 md:flex hidden">
          {" "}
          {list.map(([name, link], index) => (
            <a
              className="m-2 text-black font-bold  cursor-pointer "
              key={index}
              href={link}
            >
              {name}
            </a>
          ))}
          <button
            onClick={() => (window.location.href = "")}
            className="  bg-black text-white p-3 px-5  rounded  mr-1 border-none w-fit hover:scale-110 transition-all duration-700"
          >
            Launch
          </button>
        </ul>

        <button
          className={`md:hidden z-20 p-2  ${
            (isNavOpen && "text-white") || "text-black"
          }`}
          onClick={() => setNavOpen(!isNavOpen)}
        >
          {(isNavOpen && <AiOutlineClose size={40} />) || (
            <MdOutlineMenu size={40} />
          )}
        </button>
      </div>
      <div
        className={`md:hidden top-0 absolute overflow-hidden flex flex-col bg-black bg-opacity-90 shadow-lg w-full items-start justify-around px-4 transition-all ease-out duration-300 ${
          (isNavOpen && " h-screen") || "h-0 py-0"
        }`}
      >
        <ul className="flex flex-col h-full justify-around translate-y-[-100px]">
          {list.map(
            ([name, link], index) =>
              (home && (
                <a
                  className={`mt-4  text-gray-50  text-left   font-bold  text-2xl `}
                  key={index}
                  href={link}
                >
                  {name}
                </a>
              )) || (
                <li
                  className={`mt-2 pl-2 text-gray-50 m-1 font-light  hover:scale-105`}
                  key={index}
                  onClick={() => router.push("/")}
                >
                  {name}
                </li>
              )
          )}
          <button
            onClick={() => (window.location.href = "")}
            className="  bg-black text-white p-3 px-7 text-2xl border-2 border-solid border-white rounded  mr-1 font-bold w-fit hover:scale-110 transition-all duration-700"
          >
            Launch
          </button>
        </ul>
      </div>
    </div>
  );
}
