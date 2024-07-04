/** @format */

import React from "react";
import HorizontalCard from "../../components/Cards/HorizontalCard";
import { motion } from "framer-motion";
import HeadingRichText from "../../components/HeadingRichText/HeadingRichText";
import Container from "../../components/Container/Container";
import constants from "../../constants/constants";
import { InView } from "react-intersection-observer";

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
          {constants.facts.map((eachFact, index) => (
            <InView
              key={eachFact.image}
              as="div"
              triggerOnce={false}
              onChange={(inView, entry) => {}}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  initial={{ y: 100 }}
                  animate={{ y: inView ? 0 : 100 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="w-full sm:w-1 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
                  <HorizontalCard image={eachFact.image} text={eachFact.fact} />
                </motion.div>
              )}
            </InView>
          ))}
        </div>
      </Container>
    </>
  );
};

export default FactSlice;
