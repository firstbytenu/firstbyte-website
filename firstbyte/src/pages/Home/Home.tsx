/** @format */

import React, { useEffect } from "react";
import Navbar from "../../slices/Navbar/Navbar";

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
    </>
  );
};

export default Home;
