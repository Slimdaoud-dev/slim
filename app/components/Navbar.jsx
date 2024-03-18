"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../styles/animations";
import Image from "next/image";
import { close, logo, menu } from "../../public";
import { navLinks } from "../constants";
import Link from "next/link";


const Navbar = ({ connectToMetaMask,account,userRole }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);


  return (
    <motion.nav
      className=" w-full flex py-6 justify-between items-center navbar"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Image src={logo} alt="hoobank" width={124} height={32} loading="eager" />
      <ul className="list-none sm:flex hidden  justify-center items-center flex-1">
        <li
          key="home"
          className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
            active === "Home" ? "text-secondary" : "text-white"
          } ${0 === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          onClick={() => setActive("Home")}
        >
          <a href={`#home`}>{"Home"}</a>
        </li>
        <li
          key="services"
          className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
            active === "Services" ? "text-secondary" : "text-white"
          } ${1 === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          onClick={() => setActive("services")}
        >
          <a href={`#services`}>{"Services"}</a>
        </li>
        <li
          key="team"
          className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
            active === "Team" ? "text-secondary" : "text-white"
          } ${2 === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          onClick={() => setActive("team")}
        >
          <a href={`#team`}>{"Team"}</a>
        </li>

        <li>
          <Link
            href="/signup"
            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max ml-2"
          >
            <span className="relative text-base font-semibold text-secondary dark:text-dark">
              Sign Up
            </span>
          </Link>
        </li>
        <li>
       <h1 style={{color:"white"}}> {userRole} </h1>
        </li>
        <li>
          {userRole && account ? null : (
            <button
              onClick={connectToMetaMask}
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-secondary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max ml-5"
            >
              <span className="relative text-base font-semibold text-white dark:text-dark">
                Connect to MetaMask
              </span>
            </button>
          )}
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          priority={true}
          className="object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } pt-6 pl-6 pr-6 pb-0 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li
              key="home"
              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
                active === "Home" ? "text-secondary" : "text-white"
              } ${0 === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive("Home")}
            >
              <a href={`#home`}>{"Home"}</a>
            </li>
            <li
              key="services"
              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
                active === "Services" ? "text-secondary" : "text-white"
              } ${1 === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive("services")}
            >
              <a href={`#services`}>{"Services"}</a>
            </li>
            <li
              key="team"
              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
                active === "Team" ? "text-secondary" : "text-white"
              } ${2 === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive("team")}
            >
              <a href={`#team`}>{"Team"}</a>
            </li>
            <li
              key="contact-Us"
              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
                active === "Contact Us" ? "text-secondary" : "text-white"
              } ${3 === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive("contact-Us")}
            >
              <a href={`#contact-Us`}>{"Contact Us"}</a>
            </li>
            <li className="mt-7">
              <a
                href="/signup"
                className=" relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full  before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max ml-5 "
              >
                <span className="relative text-base font-semibold text-secondary dark:text-dark">
                  Sign Up
                </span>
              </a>
            </li>
            <li className="mr-10 mt-1">
              <a
                href="/signin"
                className=" relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-secondary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max ml-5 mb-3"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  Sign in
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar;
