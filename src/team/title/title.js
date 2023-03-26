import React from "react";
import colors from "../../utils/colors.js";
import { Container, Row } from "react-bootstrap";
import { Typography } from "@mui/material";

function Title() {
  const divStyle = {
    color: colors.font,
    backgroundColor: colors.secondary,
    textAlign: "center",
    padding: "2.5rem",
  };

  const titlestyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    lineHeight: "1.2em",
  };

  return (
    <div style={divStyle}>
      <Typography variant="h2" style={titlestyle}>
        EDUCATOR ENABLEMENT
      </Typography>
    </div>
  );
}

export default Title;
