import React from "react";
import colors from "../../utils/colors.js";
import { Typography, Grid, Container } from "@mui/material";

function oneMember() {
  return (
    <img
      src={require("./circle.png")}
      alt="logo"
      height="250px"
      width="250px"
    ></img>
  );
}

function Members() {
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
      <Typography>
        FirstByte's primary point of contact with our audience. Members on this
        team work directly with teachers and facilitate the loaner program. They
        also network with schools, educators, parents, and organizations to
        implement technology curricula and identify the community's unaddressed
        needs.
      </Typography>
      <Container style={{ padding: "4rem" }}>
        <Grid
          container
          spacing={15}
          justifyContent="center"
          alignItems="center"
          style={{ padding: "1rem" }}
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

export default Members;
