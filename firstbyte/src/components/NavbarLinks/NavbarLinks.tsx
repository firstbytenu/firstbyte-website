/** @format */

import useGetLinks from "../../hooks/useGetLinks";
import NavbarLinksContainer from "../NavbarLinksContainer/NavbarLinksContainer";
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  const [links, setLinks] = useGetLinks();

  const handleLinkChange = (e: unknown) => {
    let currentLinks: Array<T> = links;
    for (let index = 0; index < currentLinks.length; index++) {
      currentLinks[index].isActive = false;
      if (currentLinks[index].title == e.target.innerText) {
        currentLinks[index].isActive = true;
      }
    }
    setLinks((links) => {
      return currentLinks;
    });
  };

  return (
    <NavbarLinksContainer
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {links.map((eachItem) => {
          return (
            <li key={eachItem.title}>
              {eachItem.isActive ? (
                <Link
                  to={eachItem.link}
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#546c54] md:p-0 md:dark:text-[#546c54]">
                  {eachItem.title}
                </Link>
              ) : (
                <Link
                  to={eachItem.link}
                  onClick={handleLinkChange}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#546c54] md:p-0 md:dark:hover:text-[#546c54] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  {eachItem.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </NavbarLinksContainer>
  );
};

export default NavbarLinks;
