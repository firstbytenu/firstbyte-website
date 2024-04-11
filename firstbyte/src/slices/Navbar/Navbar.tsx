/** @format */

import navStyle from "./NavStyles";
import NavbarStyledComponents from "../../components/NavbarStyledComponents/NavbarStyledComponents";
import NavbarLogo from "../../components/NavbarLogo/NavbarLogo";
import NavbarLinks from "../../components/NavbarLinks/NavbarLinks";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}>
      <NavbarStyledComponents.Nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <NavbarStyledComponents.FullWidthNavbar className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavbarLogo
            style={navStyle.linkStyle}
            image={"firstbyte.png"}
            alt={"FirstByte Logo"}
            title={"FirstByte"}
            type={"large"}
            link={"/"}
          />
          <div className={navStyle.collapsableStyle}>
            <NavbarLogo
              style={navStyle.linkStyle}
              image={"northeastern.png"}
              alt={"Northeastern Logo"}
              title={"Northeastern University"}
              type={"small"}
              link={"https://northeastern.edu"}
            />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false">
              <span className="sr-only">Main Menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <NavbarLinks />
        </NavbarStyledComponents.FullWidthNavbar>
      </NavbarStyledComponents.Nav>
    </motion.div>
  );
};

export default Navbar;
