import { IoStar } from "react-icons/io5";
import PrimaryButton from "@/components/button/Primary";
import SecondaryButton from "@/components/button/Secondary";
import Title from "@/components/animations/title";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

import Fade from "@/components/animations/Fade";

export default function Hero() {
  return (
    <main className="relative w-full  max-w-[1400px] mx-auto flex justify-between items-start mt-10 px-10 gap-10 md:px-5">
      <Fade
        className="glass-effect h-[75vh] w-1/2 max-h-[750px] flex justify-center items-start flex-col px-10 gap-4  xl:w-full"
        delay={0.2}
      >
        <div className="flex justify-start items-center gap-5 md:gap-3">
          <div className="flex justify-start items-center gap-1 ">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="text-main-secondary flex justify-start items-center gap-1 md:text-sm">
            <IoStar className="text-main-green text-xl md:text-base " />
            Trustpilot
          </p>
        </div>
        <h1 className="text-6xl text-main-primary font-normal font-poppins md:text-3xl">
          <Title />
        </h1>
        <p className="text-main-tertiary md:text-sm">
          Our Experienced professionals are available 5 Days a week
        </p>
        <div className="flex justify-between items-center gap-5">
          <PrimaryButton
            symbol={<FaArrowAltCircleRight />}
            className={"md:text-xs md:px-3 md:py-0"}
          >
            Appointment
          </PrimaryButton>
          <SecondaryButton
            symbol={<AiFillMessage />}
            className={"md:text-xs md:px-3 md:py-0"}
          >
            Contact Us
          </SecondaryButton>
        </div>
        <div className="flex justify-center items-center gap-10 mt-10">
          <Stats number="1000+" text="Vehicles Detailed" />
          <Stats number="750+" text="Happy Clients" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_70%_90%,_rgba(68,34,25,0.8),_transparent)] opacity-100 -z-10"></div>
      </Fade>
      <Fade className="rounded-3xl h-[75vh] w-1/2 object-cover max-h-[750px] xl:hidden">
        <img
          src="/images/hero.jpg"
          width={800}
          height={800}
          alt="Service example"
          className="rounded-3xl h-[75vh] w-full object-cover max-h-[750px]"
        />
      </Fade>
    </main>
  );
}

function Bold({ children }) {
  return <span className="text-main-emphasis">{children}</span>;
}

function Star() {
  return (
    <div className="bg-main-green p-1">
      <IoStar className="text-white text-xs md:text-[0.4em]" />
    </div>
  );
}

function Stats({ number, text }) {
  return (
    <div className="text-main-primary font-poppins flex justify-center items-start flex-col">
      <p className="text-2xl md:text-base">{number}</p>
      <p className="text-md text-main-secondary md:text-xs">{text}</p>
    </div>
  );
}
