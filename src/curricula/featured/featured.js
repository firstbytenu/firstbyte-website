import React from "react";
import colors from "../../utils/colors.js";
import { Typography, Grid, Container } from "@mui/material";

function oneMember() {
  return (
    <img
      src={require("./circle.png")}
      alt="logo"
      height="200px"
      width="200px"
    ></img>
  );
}

function Featured() {
  const divStyle = {
    //color: colors.font,
    //backgroundColor: colors.secondary,
    textAlign: "center",
    justifyContent: "center",
    padding: "4rem",
  };

  const titlestyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    lineHeight: "1.2em",
  };

  return (
    <div style={divStyle}>
      <Container style={{ padding: "0rem" }}>
        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="center"
          style={{ padding: "0rem" }}
        >
          <Grid item>{oneMember()}</Grid>
          <Grid item>{oneMember()}</Grid>
          <Grid item>{oneMember()}</Grid>
          <Grid item>{oneMember()}</Grid>
          <Grid item>{oneMember()}</Grid>
        </Grid>
        {/* <Grid
          container
          spacing={20}
          justifyContent="center"
          alignItems="center"
          style={{ padding: "1rem" }}
        >
          <Grid item>{oneMember()}</Grid>
          <Grid item>{oneMember()}</Grid>
        </Grid> */}
      </Container>
    </div>
  );
}

export default Featured;
