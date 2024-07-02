/** @format */

import React from "react";
import constants from "../../constants/constants";

type LoaderProps = {
  text: string;
};

const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="grid grid-row-1 flex justify-center items-center">
          <img
            className="h-32 w-32"
            src="loadingGif.svg"
            alt="Loading Component"
          />
        </div>
        <label className="text-[#546c54] mb-3 font-medium text-gray-900 dark:text-gray-400 text-sm">
          {constants.loadingText}
          {text}...
        </label>
      </div>
    </div>
  );
};

export default Loader;
