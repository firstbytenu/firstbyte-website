/** @format */

import { useEffect, useState } from "react";
import constants from "../constants/constants";

const useGetCurricula = () => {
  const [curricula, setCurricula] = useState(constants.curricula);
  useEffect(() => {
    setCurricula((curricula) => {
      return constants.curricula;
    });
    return () => {
      setCurricula((curricula) => {
        return [...[]];
      });
    };
  }, []);
  return [curricula, setCurricula];
};

export default useGetCurricula;
