import React from "react";
import { useAppContext } from "./context/AppContext";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import Home from "./components/Home";
import About from "./components/About";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const { name } = useAppContext();

  return (
    <>
      <Sidebar />
      <main className="main">
        <Section cssClass={"home"} id={"home"}>
          <Home />
        </Section>
        <Section
          cssClass={"about section"}
          id={"about"}
          sectionDataHeading={"My Intro"}
          sectionTitle="About Me"
        >
          <About />
        </Section>
        <Section
          sectionTitle={"Qualification"}
          sectionDataHeading={"My Journey"}
          cssClass={"qualification section"}
        >
          <Qualifications />
        </Section>

        <Section
          id={"skills"}
          sectionTitle={"My Experience"}
          sectionDataHeading={"My Abilities"}
          cssClass={"skills section"}
        >
          <Skills />
        </Section>

        <Section
          id={"work"}
          sectionTitle={"Recent Work"}
          sectionDataHeading={"My Portfolio"}
          cssClass={"work section"}
        >
          <Portfolio />
        </Section>

        <Section
          id={"services"}
          sectionTitle={"What I Offer"}
          sectionDataHeading={"Services"}
          cssClass={"services section"}
        >
          <Services />
        </Section>

        <Section
          id={"contact"}
          sectionTitle={"Contact Me"}
          sectionDataHeading={"Contact"}
          cssClass={"contact section"}
        >
          <Contact />
        </Section>
        <Footer />
      </main>
    </>
  );
};

export default App;
