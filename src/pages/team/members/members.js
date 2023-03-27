import React from "react";
import colors from "../../../utils/colors.js";
import circle from "./circle.png";
import { Typography, Grid, Container } from "@mui/material";

const Member = () => {
  return <img src={circle} alt="logo" height="250px" width="250px"></img>;
};

const Teams = ({ teamnames, descriptions }) => {
  const divStyle = {
    color: colors.font,
    backgroundColor: colors.secondary,
    textAlign: "center",
    padding: "2.5rem",
  };
  const descStyle = {
    textAlign: "center",
    justifyContent: "center",
    padding: "4rem",
  };
  const titlestyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    lineHeight: "1.2em",
  };
  console.log(teamnames);
  return teamnames.map((_, index) => (
    <>
      <div style={divStyle}>
        <Typography variant="h2" style={titlestyle}>
          {teamnames[index]}
        </Typography>
      </div>
      <div style={descStyle}>
        <Typography>{descriptions[index]}</Typography>
      </div>
      <Container style={{ padding: "4rem" }}>
        <Grid
          container
          spacing={15}
          justifyContent="center"
          alignItems="center"
          style={{ padding: "1rem" }}
        >
          {[...Array(5).keys()].map((i) => (
            <Grid item>
              <Member />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  ));
};

const Members = () => {
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
    <Teams
      teamnames={["E-BOARD", "SOFTWARE", "MARKETING", "CURRICULUM"]}
      descriptions={[
        "E-Board Description",
        "Software Description",
        "Marketing Description",
        "Curriculum Description",
      ]}
    />
  );
};

export default Members;
