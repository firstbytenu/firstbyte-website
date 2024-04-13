/** @format */

import React from "react";
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard";
import { motion } from "framer-motion";
import HeadingRichText from "../../components/HeadingRichText/HeadingRichText";
import Container from "../../components/Container/Container";

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
          className="mb-20">
          <HeadingRichText
            text={""}
            illuminateText={"Here are some Fun Facts"}
            backText={""}
            subHeading={true}
          />
        </motion.div>
      </Container>
    </>
  );
};

export default FactSlice;
