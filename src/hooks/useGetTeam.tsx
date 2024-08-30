/** @format */

import { useEffect, useState } from "react";
import constants from "../constants/constants";

const useGetTeam = () => {
  const [team, setTeam] = useState(constants.team);

  useEffect(() => {
    setTeam(() => {
      return constants.team;
    });
    return () => {
      setTeam(() => {
        return [...[]];
      });
    };
  }, []);

  return [team];
};

export default useGetTeam;
