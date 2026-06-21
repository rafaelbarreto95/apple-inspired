import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Overview from "./components/sections/Overview";
import Value from "./components/sections/Value";
import Features from "./components/sections/Features";
import Showcase from "./components/sections/Showcase";
import Gallery from "./components/gallery/Gallery";
import Specs from "./components/sections/Specs";
import CTA from "./components/sections/Cta";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Overview />
        <Value />
        <Features />
        <Showcase />
        <Gallery />
        <Specs />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
