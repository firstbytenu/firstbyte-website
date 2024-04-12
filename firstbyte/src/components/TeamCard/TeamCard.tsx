/** @format */

import React from "react";

type TeamCardProps = {
  title: string;
  text: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ title, text }) => {
  return (
    <>
      <div className="mx-3 mb-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:my-3">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-light text-gray-700 dark:text-gray-400">
          {text}
        </p>
      </div>
    </>
  );
};

export default TeamCard;
