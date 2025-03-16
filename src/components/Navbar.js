"use client";
import { useEffect, useState } from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { GoMail } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { IoCartOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";

import Fade from "@/components/animations/Fade";
import TransitionUp from "@/components/animations/TransitionUp";

export default function Navbar() {
  const [active, setActive] = useState("/");
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  function toggleSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <>
      {sidebar && (
        <div className="w-screen h-screen bg-main-background z-50 top-0 left-0 fixed flex n flex-col">
          <div className="flex justify-between items-center px-10 py-5 md:px-5">
            <a href="/">
              <p className="text-main-primary text-2xl flex justify-between items-center gap-2">
                <MdOutlineWaterDrop className="text-main-secondary" /> Colucci
              </p>
            </a>
            <RxCross1
              className="hidden md:flex text-main-primary text-2xl cursor-pointer"
              onClick={() => toggleSidebar()}
            />
          </div>
          <Fade className="flex  items-start flex-col px-10 py-5 md:px-5 text-main-secondary text-xl gap-5 flex-1 w-full">
            <a
              href="/"
              className={`w-full flex justify-between items-center ${
                active == "/" ? "text-main-emphasis" : ""
              }`}
            >
              Home
              <IoHomeOutline />
            </a>
            <a
              href="/pricing"
              className={`w-full flex justify-between items-center ${
                active == "/pricing" ? "text-main-emphasis" : ""
              }`}
            >
              Pricing
              <IoCartOutline />
            </a>
            <a
              href="/gallery"
              className={`w-full flex justify-between items-center ${
                active == "/gallery" ? "text-main-emphasis" : ""
              }`}
            >
              Gallery
              <HiOutlinePhoto />
            </a>
            <a
              href="/contact"
              className={`w-full flex justify-between items-center ${
                active == "/contact" ? "text-main-emphasis" : ""
              }`}
            >
              Contact
              <FiPhone />
            </a>
          </Fade>
          <div className="flex justify-center gap-8 items-center text-2xl text-main-secondary px-10 ">
            <Icon element={<FiPhone />} href="/" delay={0.3} />
            <Icon element={<GoMail />} href="/" delay={0.2} />
            <Icon element={<FaFacebook />} href="/" delay={0.1} />
            <Icon element={<FaInstagram />} href="/" delay={0.2} />
            <Icon element={<FaXTwitter />} href="/" delay={0.3} />
          </div>

          <TransitionUp
            className={
              "flex justify-center items-center flex-col text-center text-xs mb-20"
            }
          >
            <p className="text-main-tertiary mt-12">
              Copyright © 2024 | Colucci all rights reserved.
            </p>
            <p className="text-main-tertiary">Powered by Adnan Skopljak</p>
          </TransitionUp>
          <div className="absolute inset-0 bg-[radial-gradient(90%_40%_at_20%_20%,_rgba(20,179,125,0.15),_transparent)] opacity-75 -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(80%_40%_at_70%_90%,_rgba(68,34,25,0.8),_transparent)] opacity-75 -z-10"></div>
        </div>
      )}
      <Fade delay={0.3}>
        <header className="bg-transparent w-full z-40">
          <nav className="max-w-[1400px] mx-auto flex justify-between items-center px-10 py-5 md:px-5">
            <a href="/">
              <p className="text-main-primary text-2xl flex justify-between items-center gap-2">
                <MdOutlineWaterDrop className="text-main-secondary" /> Colucci
              </p>
            </a>
            <ul className="text-main-secondary flex justify-between item-center gap-5 text-sm mt-auto md:hidden">
              <a href="/">
                <li className={active == "/" ? "text-main-emphasis" : ""}>
                  Home
                </li>
              </a>
              <a href="/pricing">
                <li
                  className={active == "/pricing" ? "text-main-emphasis" : ""}
                >
                  Pricing
                </li>
              </a>
              <a href="/gallery">
                <li
                  className={active == "/gallery" ? "text-main-emphasis" : ""}
                >
                  Gallery
                </li>
              </a>
              <a href="/contact">
                <li
                  className={active == "/contact" ? "text-main-emphasis" : ""}
                >
                  Contact
                </li>
              </a>
            </ul>
            <HiMiniBars3CenterLeft
              className="hidden md:flex text-main-primary text-2xl cursor-pointer"
              onClick={() => toggleSidebar()}
            />
          </nav>
        </header>
      </Fade>
    </>
  );
}

function Icon({ element, href, delay }) {
  return (
    <Fade delay={delay}>
      <a href={href}>{element}</a>
    </Fade>
  );
}
