/** @format */

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

type ProfileCardProps = {
  image: string;
  alt: string;
  profileName: string;
  position: string;
  contact: string;
  mission: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  image,
  alt,
  profileName,
  position,
  contact,
  mission,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.01 }}
        className="flex flex-col p-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-5">
        <img
          className="w-32 h-32 mb-3 rounded-full shadow-lg mt-3 mx-5"
          src={image}
          alt={alt}
        />
        <div className="flex flex-col justify-between p-4 leading-normal text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {profileName}
          </h5>
          <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">
            {position}
          </p>
          <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
            {contact}
          </p>
        </div>

        <div className="flex flex-col justify-between p-4 leading-normal text-left">
          <p className="mb-3 font-medium text-gray-900 dark:text-gray-400 text-sm">
            {mission}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileCard;
