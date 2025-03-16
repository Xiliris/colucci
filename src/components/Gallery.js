import SecondaryButton from "./button/Secondary";
import { FaRegImages } from "react-icons/fa6";
import TransitionUp from "@/components/animations/TransitionUp";
export default function Gallery() {
  return (
    <section className="relative w-full  max-w-[1400px] mx-auto flex justify-between items-center flex-col px-10 gap-10 my-32 md:px-5 md:gap-3 md:my-16">
      <div className="grid grid-cols-3 gap-5 w-full md:grid-cols-1">
        <SecImage
          src="/images/gallery/car1.jpg"
          alt="Image"
          className="col-span-2 md:col-span-1"
          delay={0.1}
        />
        <SecImage src="/images/gallery/car3.jpg" alt="Image" delay={0.2} />

        <SecImage src="/images/gallery/car4.jpg" alt="Image" delay={0.1} />
        <SecImage
          src="/images/gallery/car5.jpg"
          alt="Image"
          className="col-span-2 md:col-span-1"
          delay={0.2}
        />
      </div>
      <a href="/gallery">
        <SecondaryButton symbol={<FaRegImages />} className={"mt-5"}>
          View More
        </SecondaryButton>
      </a>
    </section>
  );
}

function SecImage({ src, alt, className, delay }) {
  return (
    <TransitionUp
      className={`${className} flex-grow w-full h-96 object-cover rounded-xl`}
      delay={delay}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} flex-grow w-full h-96 object-cover rounded-xl`}
      />
    </TransitionUp>
  );
}
