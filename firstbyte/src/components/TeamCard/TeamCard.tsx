/** @format */

import React from "react";
import { motion } from "framer-motion";

type TeamCardProps = {
  title: string;
  text: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ title, text }) => {
  return (
    <>
      <motion.div
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.01 }}
        className="mx-3 mb-3 p-6 bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:my-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-light text-gray-700 dark:text-gray-400">
          {text}
        </p>
      </motion.div>
    </>
  );
};

export default TeamCard;
