/** @format */

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Container from "../../components/Container/Container";
import constants from "../../constants/constants";

const HomeHero = () => {
  return (
    <>
      <Container>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.2, // Adjusted for smoother transition
            delay: 0,
            type: "spring",
            stiffness: 100, // Softer spring for smoother effect
          }}>
          <div className="grid grid-rows-2 md:grid-cols-2 md:h-screen">
            <div className="text-[#546c54] text-center flex items-center justify-center">
              <div className="grid grid-rows-4 md:grid-rows-3 mt-64">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                  className="text-3xl font-bold text-gray-400 hover:text-gray-300 md:text-3xl lg:text-6xl">
                  {"Welcome to "}
                  <span className="text-[#546c54]">
                    {constants.organization}
                  </span>
                </motion.div>
                <div className="text-2xl font-bold my-4 text-gray-600 md:text-2xl lg:text-3xl transition-all duration-200 ease-in-out">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center">
                      {constants.tagConstant}&nbsp;
                      <Typewriter
                        options={{
                          strings: [constants.tag],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  className="font-light text-md text-center items-center justify-center lg:my-5">
                  {constants.heroText}
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.2, // Consistency in transition
                delay: 0,
                type: "spring",
                stiffness: 100,
              }}
              className="flex items-center justify-center text-center md:h-screen">
              <div className="grid grid-rows-2">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                  className="w-64 h-64 rounded-full shadow-lg mt-3 mx-5 shadow-2xl"
                  src={constants.homeImage}
                  alt="FirstByte Home Image"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  className="font-md text-md text-center items-center justify-center my-5">
                  {"This is how fun to be in "}
                  <div className="font-bold text-[#546c54]">
                    {constants.organization}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default HomeHero;
