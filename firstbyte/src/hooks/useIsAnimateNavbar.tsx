/** @format */

import React, { useEffect, useRef, useState } from "react";

const useIsAnimateNavbar = () => {
  const isAnimateNavbar = useRef(true);

  const toggleIsAnimateNavbar = () => {
    isAnimateNavbar.current = !isAnimateNavbar.current;
  };

  return [isAnimateNavbar.current, toggleIsAnimateNavbar];
};

export default useIsAnimateNavbar;
