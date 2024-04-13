/** @format */

import React from "react";

type HorizontalCardProps = {
  image: string;
  text: string;
};

const HorizontalCard: React.FC<HorizontalCardProps> = ({ image, text }) => {
  return (
    <>
      <div className="mx-5 w-11/12 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full">
          <img
            className="rounded-t-lg object-contain h-64 w-full py-5"
            src={image}
            alt={image}
          />

          <div className="p-5 w-full">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
