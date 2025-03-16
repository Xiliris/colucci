import Layout from "./layout";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import Scroll from "@/components/mini/Scroll";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Scroll />
      <Hero />
      <Benefits />
      <Products />
      <Pricing button={true} />
      <Gallery />
      <Location />
      <Footer />
    </Layout>
  );
}
