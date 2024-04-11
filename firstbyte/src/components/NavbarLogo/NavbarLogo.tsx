/** @format */

import { Link } from "react-router-dom";

type NavbarLogoProps = {
  style: string;
  image: string;
  alt: string;
  title: string;
  type: string;
  link: string;
};

const NavbarLogo: React.FC<NavbarLogoProps> = ({
  style,
  image,
  alt,
  title,
  type,
  link,
}) => {
  return (
    <>
      {type == "large" ? (
        <Link to={link} className={style}>
          <img src={image} className="h-8" alt={alt} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {title}
          </span>
        </Link>
      ) : (
        <a href={link} target="_blank" className={style}>
          <img src={image} className="h-6" alt={alt} />
          <span className="hidden md:block self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            {title}
          </span>
        </a>
      )}
    </>
  );
};

export default NavbarLogo;
