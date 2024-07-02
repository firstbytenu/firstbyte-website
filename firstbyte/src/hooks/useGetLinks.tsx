/** @format */

import { useEffect, useState } from "react";
import constants from "../constants/constants";
import { useLocation } from "react-router-dom";

const useGetLinks = () => {
  const [links, setLinks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setLinks((links) => {
      return constants.navbarLinks;
    });

    let currentLinks: Array<T> = constants.navbarLinks;
    for (let index = 0; index < currentLinks.length; index++) {
      currentLinks[index].isActive = false;
      if (currentLinks[index].link == location.pathname) {
        currentLinks[index].isActive = true;
      }
    }
    setLinks((links) => {
      return currentLinks;
    });

    return () => {
      setLinks((links) => {
        return [...[]];
      });
    };
  }, []);

  return [links, setLinks];
};

export default useGetLinks;
