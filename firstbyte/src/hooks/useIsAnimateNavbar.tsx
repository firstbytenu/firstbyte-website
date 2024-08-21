/** @format */

import { useRef } from "react";

const useIsAnimateNavbar = (): [boolean, () => void] => {
  const isAnimateNavbar = useRef(true);

  const toggleIsAnimateNavbar = () => {
    isAnimateNavbar.current = !isAnimateNavbar.current;
  };

  return [isAnimateNavbar.current, toggleIsAnimateNavbar];
};

export default useIsAnimateNavbar;
