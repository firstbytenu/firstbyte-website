/** @format */

import React, { useEffect, useState } from "react";
import constants from "../constants/constants";

const useGetTeam = () => {
  const [team, setTeam] = useState(constants.team);

  useEffect(() => {
    setTeam((team) => {
      return constants.team;
    });
    return () => {
      setTeam((team) => {
        return [...[]];
      });
    };
  }, []);

  return [team];
};

export default useGetTeam;
