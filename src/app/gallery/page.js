import Layout from "../layout";
import Navbar from "@/components/Navbar";
import Bold from "@/components/mini/Bold";
import SecImage from "@/components/mini/SecImage";
import Scroll from "@/components/mini/Scroll";
import TransitionUp from "@/components/animations/TransitionUp";

export default function Gallery() {
  return (
    <Layout>
      <Navbar />
      <Scroll />
      <div className="flex justify-center items-center flex-col max-w-[1400px] mx-auto px-10 py-16 glass-effect my-10">
        <TransitionUp>
          <h1 className="text-4xl text-main-primary font-poppins mb-10">
            <Bold>Cool</Bold> Images
          </h1>
        </TransitionUp>
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
      </div>
    </Layout>
  );
}
