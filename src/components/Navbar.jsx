import React, { useState } from "react";
import styles from "../styles";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import {  menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  return (
    <div
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={require("../assets/logo-white.svg")} /> */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            MNZ &nbsp; <span className="sm:block hidden">React Devoloper</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? " text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end item-center ">
          <div
            className="text-2xl object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          <div
            className={`${
              !toggle ? "hidden " : "flex"
            } p-6  absolute top-14 right-0 mx-4 my-2 mni-w-[140px] z-10 rounded-xl`}
            style={{
              background:
                "  radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
            }}
          >
            <ul className="list-none flex justify-end items-center flex-col gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? " text-white" : "text-secondary"
                  } hover:text-white text-sm cursor-pointer font-medium`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
