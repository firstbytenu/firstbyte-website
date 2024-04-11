/** @format */

import { motion } from "framer-motion";
import NavbarInternal from "../../components/NavbarInternal/NavbarInternal";
import { useEffect } from "react";

type NavbarProps = {
  animate: unknown;
  toggleIsAnimateNavbar: unknown;
};

const Navbar: React.FC<NavbarProps> = ({ animate, toggleIsAnimateNavbar }) => {
  useEffect(() => {
    if (animate) {
      toggleIsAnimateNavbar();
    }
    return () => {
      if (animate) {
        toggleIsAnimateNavbar();
      }
    };
  });

  return (
    <>
      {animate ? (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}>
          <NavbarInternal />
        </motion.div>
      ) : (
        <div>
          {" "}
          <NavbarInternal />
        </div>
      )}
    </>
  );
};

export default Navbar;
