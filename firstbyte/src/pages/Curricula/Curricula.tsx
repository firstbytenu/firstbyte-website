/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../slices/Navbar/Navbar";
import Hero from "../../slices/Hero/Hero";
import Footer from "../../slices/Footer/Footer";
import CurriculaTeams from "../../slices/CurriculaTeams/CurriculaTeams";
import FloatingButton from "../../components/FloatingButton/FloatingButton";

type CurriculaProps = {
  isAnimateNavbar: unknown;
  toggleIsAnimateNavbar: unknown;
};

const Curricula: React.FC<CurriculaProps> = ({
  isAnimateNavbar,
  toggleIsAnimateNavbar,
}) => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        </Hero>
        <FloatingButton onClick={() => {}} className={`transition-opacity duration-500 ${showButton ? 'lg:opacity-100' : 'opacity-0'}`} />
        </div>
      <Footer />
    </>
  );
};

export default Curricula;
