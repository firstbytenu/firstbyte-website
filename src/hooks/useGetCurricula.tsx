/** @format */

import { useEffect, useState } from "react";
import constants from "../constants/constants";

export type Curricula = {
  teamName: string;
  mission: string;
  history: string;
  images: string[];
}

const useGetCurricula = () => {
  const [curricula, setCurricula] = useState(constants.curricula as Array<Curricula>);
  useEffect(() => {
    setCurricula(() => {
      return constants.curricula;
    });
    return () => {
      setCurricula(() => {
        return [...[]];
      });
    };
  }, []);
  return [curricula, setCurricula];
};

export default useGetCurricula;
