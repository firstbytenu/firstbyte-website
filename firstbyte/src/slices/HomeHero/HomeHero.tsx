/** @format */

// import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Container from "../../components/Container/Container";
import constants from "../../constants/constants";
import Typewriter from "../../components/Typewriter/Typewriter";

const HomeHero = () => {
  return (
    <>
      <Container>  
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="grid md:grid-cols-2"> {/* removed "grid-rows-2" and "md:h-screen" from className which was causing white padding bug */}
            <div className="text-[#546c54] text-center flex items-center justify-center">
              <div className="grid grid-rows-4 md:grid-rows-3 mt-24"> {/* Changed mt-64 to mt-24 for better spacing */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                  className="text-3xl font-bold text-gray-400 hover:text-gray-300 md:text-3xl lg:text-6xl"
                >
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
                    <div className="lg:flex lg:items-center justify-center">
                      <Typewriter
                        defaultText={constants.tagConstant}
                        texts={constants.tag}
                      />
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  className="font-light text-md text-center items-center justify-center lg:my-4" // Changed lg:my-5 to lg:my-4 for better spacing
                >
                  {constants.heroText}
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.2,
                delay: 0,
                type: "spring",
                stiffness: 100,
              }}
              className="flex items-center justify-center text-center h-full md:mt-48 sm:mt-4" // Added responsive margin-top for better alignment across screen sizes
            >
              <div className="grid grid-rows-2">
                <motion.img 
                  whileHover={{ scale: 1.05 }} 
                  whileFocus={{ scale: 1.05 }} 
                  className="w-80 h-80 rounded-full shadow-lg mx-5 shadow-2xl" // Changed width and height from w-64 h-64 to w-80 h-80 for a larger image
                  style={{ marginTop: '20px' }}
                  src={constants.homeImage}
                  alt="FirstByte Home Image"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  className="font-md text-md text-center items-center justify-center my-4" // Changed my-5 to my-4 for better spacing
                >
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