/** @format */

import React, { useEffect } from "react";
import Navbar from "../../slices/Navbar/Navbar";
import HomeHero from "../../slices/HomeHero/HomeHero";
import Footer from "../../slices/Footer/Footer";

type HomeProps = {
  isAnimateNavbar: unknown;
  toggleIsAnimateNavbar: unknown;
};

const Home: React.FC<HomeProps> = ({
  isAnimateNavbar,
  toggleIsAnimateNavbar,
}) => {
  useEffect(() => {
    document.title = "FirstByte - Home";
    return () => {
      document.title = "FirstByte - Northeastern's Organization";
    };
  });

  return (
    <>
      <Navbar
        animate={isAnimateNavbar}
        toggleIsAnimateNavbar={toggleIsAnimateNavbar}
      />
      <HomeHero />
      <Footer />
    </>
  );
};

export default Home;
