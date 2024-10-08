/** @format */

import { motion } from "framer-motion";
import NavbarInternal from "../../components/Navbar/NavbarInternal";
import { useEffect } from "react";

type NavbarProps = {
  animate: boolean;
  toggleIsAnimateNavbar: () => void;
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
          <NavbarInternal />
        </div>
      )}
    </>
  );
};

export default Navbar;
