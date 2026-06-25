import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Audience from "@/components/sections/Audience";
import Stages from "@/components/sections/Stages";
import Principles from "@/components/sections/Principles";
// import Process from "@/components/sections/Process"; // temporarily hidden
import Gallery from "@/components/sections/Gallery";
import Insights from "@/components/sections/Insights";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import FooterReveal from "@/components/sections/FooterReveal";

export default function Home() {
  return (
    <>
      {/* Nav stays outside the reveal wrapper — a transformed ancestor would
          break its position: fixed. */}
      <Nav />
      <FooterReveal footer={<Footer />}>
        <main className="relative">
          <Hero />
          <Manifesto />
          <Audience />
          <Stages />
          <Principles />
          {/* <Process /> temporarily hidden */}
          <Insights />
          <FAQ />
          <Gallery />
          <CTA />
        </main>
      </FooterReveal>
    </>
  );
}
