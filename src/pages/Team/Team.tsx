/** @format */

import React, { useEffect } from "react";
import Navbar from "../../slices/Navbar/Navbar";
import Hero from "../../slices/Hero/Hero";
import Footer from "../../slices/Footer/Footer";
import Profiles from "../../components/Profiles/Profiles";

type TeamProps = {
  isAnimateNavbar: boolean;
  toggleIsAnimateNavbar: () => void;
};

const Team: React.FC<TeamProps> = ({
  isAnimateNavbar,
  toggleIsAnimateNavbar,
}) => {
  useEffect(() => {
    document.title = "FirstByte - Team";
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

      <div className="pt-20">
        <Hero
          headingText={"Meet"}
          headingIlluminateText={"FirstByte"}
          backText={"Team"}>
          <Profiles />
        </Hero>
      </div>

      <Footer />
    </>
  );
};

export default Team;
