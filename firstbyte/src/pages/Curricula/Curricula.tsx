/** @format */

import React, { useEffect } from "react";
import Navbar from "../../slices/Navbar/Navbar";
import Hero from "../../slices/Hero/Hero";
import Footer from "../../slices/Footer/Footer";
import CurriculaTeams from "../../slices/CurriculaTeams/CurriculaTeams";

type CurriculaProps = {
  isAnimateNavbar: unknown;
  toggleIsAnimateNavbar: unknown;
};

const Curricula: React.FC<CurriculaProps> = ({
  isAnimateNavbar,
  toggleIsAnimateNavbar,
}) => {
  useEffect(() => {
    document.title = "FirstByte - Curricula";
    return () => {
      document.title = "FirstByte - Northeastern's Organization";
    };
  }, []);

  return (
    <>
      <Navbar
        animate={isAnimateNavbar}
        toggleIsAnimateNavbar={toggleIsAnimateNavbar}
      />
      <div className="py-20">
        <Hero
          headingText={"This is our"}
          headingIlluminateText={"Curricula"}
          backText={""}>
          <CurriculaTeams />
          <CurriculaTeams />
          <CurriculaTeams />
        </Hero>
      </div>
      <Footer />
    </>
  );
};

export default Curricula;
