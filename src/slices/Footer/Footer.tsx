/** @format */

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/team" className="hover:underline">
              FirstByte™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <div className="me-4 md:me-6">Contact us:</div>
              <div className="me-4 md:me-6 font-bold">
                <a href="mailto:teachfirstbyte@gmail.com">teachfirstbyte@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
