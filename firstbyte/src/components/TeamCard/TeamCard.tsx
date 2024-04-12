/** @format */

import React from "react";

const TeamCard = () => {
  return (
    <>
      <div className="mx-3 my-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mission
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          To teach and develop Computer Science curriculum for highschoolers in
          local Boston area and other organizations at Northeastern.
        </p>
      </div>
    </>
  );
};

export default TeamCard;
