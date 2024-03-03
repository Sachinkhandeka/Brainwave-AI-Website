import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benifits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <ButtonGradient />
      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
}
