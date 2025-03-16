import Layout from "../layout";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Bold from "@/components/mini/Bold";
import PrimaryButton from "@/components/button/Primary";
import Fade from "@/components/animations/Fade";
import Scroll from "@/components/mini/Scroll";

import { FaArrowAltCircleRight } from "react-icons/fa";

export default function PricingMore() {
  return (
    <Layout>
      <Navbar />
      <Scroll />
      <Pricing />
      <section className="w-full mt-10">
        <div className="flex justify-center items-center flex-col max-w-[1400px] mx-auto px-10 py-16 relative">
          <Fade>
            <h2 className="text-4xl text-main-primary font-poppins md:text-2xl">
              <Bold>Everything</Bold> we have to offer
            </h2>
          </Fade>
          <div className="glass-effect flex justify-center items-start flex-col px-10 gap-1 w-full mt-10 p-5 ">
            <div className="flex justify-between items-center flex-col gap-5 w-full relative">
              <Item price="35">
                Quick hand wash, light polish, spray wax, and tire shine. Quick
                hand wash, light polish, spray wax, and tire shine.
              </Item>
              <Item price="50">
                Machine polish, hand-applied wax, interior wipe-down, and tire
                dressing.
              </Item>
              <Item price="70">
                Clay bar treatment, multi-stage polish, ceramic wax, and
                interior deep cleaning. Clay bar treatment, multi-stage polish,
                ceramic wax, and interior deep cleaning.
              </Item>
              <Item price="33">
                Full paint correction, ceramic or graphene coating, interior
                steam cleaning, and engine bay detailing. Full paint correction,
                ceramic or graphene coating, interior steam cleaning, and engine
                bay detailing.
              </Item>
              <Item price="35">
                Quick hand wash, light polish, spray wax, and tire shine. Quick
                hand wash, light polish, spray wax, and tire shine.
              </Item>
              <Item price="50">
                Machine polish, hand-applied wax, interior wipe-down, and tire
                dressing.
              </Item>
              <Item price="70">
                Clay bar treatment, multi-stage polish, ceramic wax, and
                interior deep cleaning. Clay bar treatment, multi-stage polish,
                ceramic wax, and interior deep cleaning.
              </Item>
              <Item price="33">
                Full paint correction, ceramic or graphene coating, interior
                steam cleaning, and engine bay detailing. Full paint correction,
                ceramic or graphene coating, interior steam cleaning, and engine
                bay detailing.
              </Item>
              <Item price="35">
                Quick hand wash, light polish, spray wax, and tire shine. Quick
                hand wash, light polish, spray wax, and tire shine.
              </Item>
              <Item price="50">
                Machine polish, hand-applied wax, interior wipe-down, and tire
                dressing.
              </Item>
              <Item price="70">
                Clay bar treatment, multi-stage polish, ceramic wax, and
                interior deep cleaning. Clay bar treatment, multi-stage polish,
                ceramic wax, and interior deep cleaning.
              </Item>
              <Item price="33">
                Full paint correction, ceramic or graphene coating, interior
                steam cleaning, and engine bay detailing. Full paint correction,
                ceramic or graphene coating, interior steam cleaning, and engine
                bay detailing.
              </Item>
            </div>
            <PrimaryButton
              symbol={<FaArrowAltCircleRight />}
              className={"mt-7 mb-4 mx-auto"}
            >
              Contact for custom offer
            </PrimaryButton>
            <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_20%,_rgba(68,34,25,0.8),_transparent)] opacity-75 -z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_90%,_rgba(255,215,0,0.15),_transparent)] opacity-50 -z-10"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Item({ children, price }) {
  return (
    <div className="flex justify-between items-center  w-full border-b border-main-tertiary pb-3">
      <p className="text-base text-main-secondary w-1/2">{children}</p>
      <p className="text-main-emphasis text-lg ">${price}</p>
    </div>
  );
}
