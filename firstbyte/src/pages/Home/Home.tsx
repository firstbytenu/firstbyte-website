/** @format */

import React from "react";
import Navbar from "../../slices/Navbar/Navbar";

type HomeProps = {
  isAnimateNavbar: unknown;
  toggleIsAnimateNavbar: unknown;
};

const Home: React.FC<HomeProps> = ({
  isAnimateNavbar,
  toggleIsAnimateNavbar,
}) => {
  return (
    <>
      <Navbar
        animate={isAnimateNavbar}
        toggleIsAnimateNavbar={toggleIsAnimateNavbar}
      />
    </>
  );
};

export default Home;
