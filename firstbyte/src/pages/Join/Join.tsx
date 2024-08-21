/** @format */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import constants from "../../constants/constants";

const Join = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const newWindow = window.open(
      constants.joinForm,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
    navigate("/");
  }, []);

  return <></>;
};

export default Join;
