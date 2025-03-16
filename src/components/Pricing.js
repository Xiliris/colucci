import PrimaryButton from "./button/Primary";
import SecondaryButton from "./button/Secondary";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import Fade from "@/components/animations/Fade";
import TransitionUp from "@/components/animations/TransitionUp";

export default function Pricing({ button }) {
  return (
    <section className="w-full bg-main-background mt-20">
      <div className="flex justify-center items-center flex-col max-w-[1400px] mx-auto px-10 py-16 relative md:px-5">
        <Fade>
          <h2 className="text-4xl text-main-primary font-poppins md:text-2xl">
            Our <span className="text-main-emphasis">Pricing</span> Plans
          </h2>
        </Fade>
        <div className="grid grid-cols-4 w-full mt-10 gap-10 xl:grid-cols-2 md:flex md:flex-col">
          <Card
            name={"Basic Plan"}
            price="69.99"
            features={["Poliranje", "Detailing Enterijera", "Premium pranje"]}
            color={"rgba(173, 216, 230, 0.15)"}
            delay={0.2}
          />
          <Card
            name={"Standard Plan"}
            price="119.99"
            features={[
              "Poliranje",
              "Detailing Enterijera",
              "Premium pranje",
              "Poliranjea",
            ]}
            color="rgba(20,179,125,0.15)"
            delay={0.3}
          />
          <Card
            name={"Premium Plan"}
            price="199.99"
            features={[
              "Poliranje",
              "Detailing Enterijera",
              "Premium pranje",

              "Keramička Zaštita",
            ]}
            color="rgba(68,34,25,0.9)"
            delay={0.4}
          />
          <Card
            name={"Full Plan"}
            price="299.99"
            features={[
              "Poliranje",
              "Detailing Enterijera",
              "Premium pranje",
              "Detailing Enterijerae",
              "Premium pranjec",
            ]}
            color="rgba(255,215,0,0.15)"
            delay={0.5}
          />
        </div>
        <Fade>
          {button && (
            <a href="/pricing">
              <SecondaryButton
                symbol={<IoNewspaperOutline />}
                className={"mt-10"}
              >
                View Details
              </SecondaryButton>
            </a>
          )}
        </Fade>
      </div>
    </section>
  );
}

function Card({ name, price, features, color, delay }) {
  return (
    <TransitionUp
      className="glass-effect-border flex justify-center items-start flex-col px-10 py-10 flex-grow relative "
      delay={delay}
    >
      <h3 className="text-main-primary text-2xl font-poppins md:text-xl">
        {name}
      </h3>
      <h3 className="text-main-emphasis text-xl font-poppins mb-5 md:text-lg">
        € {price}
      </h3>

      <div className="border-t border-main-tertiary pt-5 flex justify-start items-start gap-3 flex-col mb-5 w-full">
        {features.map((feature) => {
          return <Item key={feature}>{feature}</Item>;
        })}
      </div>
      <PrimaryButton
        symbol={<FaArrowAltCircleRight />}
        className={"mt-auto w-full"}
      >
        Book this offer
      </PrimaryButton>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(40% 40% at 20% 20%, ${color}, transparent)`,
          opacity: 1,
          zIndex: -10,
        }}
      ></div>
    </TransitionUp>
  );
}

function Item({ children }) {
  return (
    <li className="flex justify-start items-center text-xl text-main-secondary gap-3 md:text-base">
      <IoIosCheckmarkCircle className="text-2xl text-main-green md:text-xl" />{" "}
      {children}
    </li>
  );
}
