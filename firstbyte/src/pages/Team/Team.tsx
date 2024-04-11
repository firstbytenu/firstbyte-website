/** @format */

import React from "react";
import Navbar from "../../slices/Navbar/Navbar";
import TeamHero from "../../slices/TeamHero/TeamHero";
import Footer from "../../slices/Footer/Footer";

type TeamProps = {
  isAnimateNavbar: unknown;
  toggleIsAnimateNavbar: unknown;
};

const Team: React.FC<TeamProps> = ({
  isAnimateNavbar,
  toggleIsAnimateNavbar,
}) => {
  return (
    <>
      <Navbar
        animate={isAnimateNavbar}
        toggleIsAnimateNavbar={toggleIsAnimateNavbar}
      />

      <div className="pt-20">
        <TeamHero
          headingText={"Meet "}
          headingIlluminateText={"FirstByte"}
          backText={"Team"}
        />
      </div>

      <Footer />
    </>
  );
};

export default Team;
