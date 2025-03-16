import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import PrimaryButton from "./button/Primary";
import SecondaryButton from "./button/Secondary";
import Fade from "@/components/animations/Fade";

export default function Products() {
  return (
    <Fade className="relative w-full max-w-[1400px] mx-auto flex justify-between items-start mt-16 px-10 md:px-5 gap-10">
      <img
        src="/images/hero.jpg"
        width={800}
        height={800}
        alt="Service example"
        className="rounded-3xl h-[75vh] w-1/2 object-cover max-h-[750px] lg:hidden"
      />
      <Fade
        className="glass-effect h-[75vh] w-1/2 max-h-[750px] flex justify-center items-start flex-col px-10 gap-10 lg:w-full "
        delay={0.2}
      >
        <h2 className="font-poppins text-5xl text-main-primary md:text-2xl">
          OUR <span className="text-main-emphasis">SERVICE</span>
          <br></br> BUILT FOR{" "}
          <span className="text-main-emphasis">EXELLENCE</span>
        </h2>

        <ul className="flex items-start justify-center flex-col gap-5 ">
          <Item>Detailing Enterijera</Item>
          <Item>Poliranje</Item>
          <Item>Keramička Zaštita</Item>
          <Item>Premium pranje</Item>
          <Item>Sestorizacija Farova </Item>
        </ul>
        <div className="flex justify-between items-center gap-5 md:flex-col md:w-full">
          <a href="/pricing" className={"md:w-full"}>
            <PrimaryButton
              symbol={<FaArrowAltCircleRight />}
              className={"md:w-full"}
            >
              Bundles and Pricing
            </PrimaryButton>
          </a>
          <SecondaryButton symbol={<AiFillMessage />} className={"md:w-full"}>
            Contact Us
          </SecondaryButton>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_20%,_rgba(255,215,0,0.15),_transparent)] opacity-100 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_70%_90%,_rgba(68,34,25,0.8),_transparent)] opacity-100 -z-10"></div>
      </Fade>
    </Fade>
  );
}

function Item({ children }) {
  return (
    <li className="flex justify-start items-center text-2xl text-main-secondary gap-5 md:text-base md:gap-3">
      <IoIosCheckmarkCircle className="text-3xl text-main-green md:text-xl" />{" "}
      {children}
    </li>
  );
}
