/** @format */

import React from "react";
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard";
import { motion } from "framer-motion";
import HeadingRichText from "../../components/HeadingRichText/HeadingRichText";
import Container from "../../components/Container/Container";
import constants from "../../constants/constants";

const FactSlice = () => {
  return (
    <>
      <Container>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.1,
            delay: 0.1,
            type: "spring",
            stiffness: 200,
          }}
          className="mb-3">
          <HeadingRichText
            text={""}
            illuminateText={"Here are some Fun Facts"}
            backText={""}
            subHeading={true}
          />
        </motion.div>
        <div className="flex flex-wrap justify-center items-center">
          {constants.facts.map((eachFact) => {
            return (
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.1,
                  delay: 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                key={eachFact.image}
                className="w-full sm:w-1 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
                <HorizontalCard image={eachFact.image} text={eachFact.fact} />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default FactSlice;
