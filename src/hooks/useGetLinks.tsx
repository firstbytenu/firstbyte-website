/** @format */

import { useEffect, useState } from "react";
import constants from "../constants/constants";
import { useLocation } from "react-router-dom";

export type LinkItem = {
  title: string;
  isActive: boolean;
  link: string;
};

const useGetLinks = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const location = useLocation();

  useEffect(() => {
    setLinks(() => {
      return constants.navbarLinks;
    });

    const currentLinks: Array<LinkItem> = constants.navbarLinks;
    for (let index = 0; index < currentLinks.length; index++) {
      currentLinks[index].isActive = false;
      if (currentLinks[index].link == location.pathname) {
        currentLinks[index].isActive = true;
      }
    }
    setLinks(() => {
      return currentLinks;
    });

    return () => {
      setLinks(() => {
        return [...[]];
      });
    };
  }, []);

  return [links, setLinks];
};

export default useGetLinks;
