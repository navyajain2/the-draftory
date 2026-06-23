import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Audience from "@/components/sections/Audience";
import Stages from "@/components/sections/Stages";
import Principles from "@/components/sections/Principles";
// import Process from "@/components/sections/Process"; // temporarily hidden
import Gallery from "@/components/sections/Gallery";
import Insights from "@/components/sections/Insights";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Manifesto />
      <Audience />
      <Stages />
      <Principles />
      {/* <Process /> temporarily hidden */}
      <Insights />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
