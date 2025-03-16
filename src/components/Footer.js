import { MdOutlineWaterDrop } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Fade from "@/components/animations/Fade";
import TransitionUp from "@/components/animations/TransitionUp";

export default function Footer() {
  return (
    <footer className="w-full mt-20 md:mt-12">
      <div className="flex justify-center items-center flex-col max-w-[1400px] mx-auto px-10 pt-5 pb-6 relative">
        <div className="w-full flex justify-between items-center flex-wrap">
          <Fade className="flex justify-center items-center flex-col lg:w-full mb-10">
            <MdOutlineWaterDrop className="text-5xl text-main-emphasis md:text-4xl" />
            <p className="text-main-primary font-poppins text-3xl md:text-2xl">
              Colucci
            </p>
          </Fade>
          <Fade
            className="flex justify-center items-start flex-col gap-5 mb-5"
            delay={0.1}
          >
            <Item icon={<FaLocationDot />}>
              Pregrevica br.1 , Novi Karlovci SRBIJA
            </Item>
            <Item icon={<GoMail />}>luminosdetailing@gmail.com</Item>
            <Item icon={<FiPhone />}>064 3811545</Item>
          </Fade>
          <Fade
            className="flex justify-center items-start flex-col gap-5"
            delay={0.2}
          >
            <Item icon={<FaInstagram />} link="https://instagram.com">
              Instagram
            </Item>
            <Item icon={<FaFacebook />} link="https://facebook.com">
              Facebook
            </Item>
            <Item
              icon={<FaXTwitter />}
              link="whatsapp://send?abid=063249136&text=Hello%2C%20World!"
            >
              Twitter
            </Item>
          </Fade>
        </div>
        <TransitionUp
          className={
            "flex justify-center items-center flex-col text-center text-md md:text-xs"
          }
        >
          <p className="text-main-tertiary mt-12">
            Copyright © 2024 | Colucci all rights reserved.
          </p>
          <p className="text-main-tertiary">Powered by Adnan Skopljak</p>
        </TransitionUp>
      </div>
    </footer>
  );
}

function Item({ children, icon, link }) {
  return (
    <a
      className="text-main-emphasis flex justify-start items-center gap-3 text-2xl cursor-pointer md:text-xl"
      href={link}
    >
      {icon}{" "}
      <span className="text-xl text-main-primary md:text-base">{children}</span>
    </a>
  );
}
