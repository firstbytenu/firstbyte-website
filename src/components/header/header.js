import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import children from "../../public/children.jpg";

const LeftText = (props) => {
  const titlestyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    lineHeight: "1.2em",
    paddingBottom: "1rem",
  };

  const descstyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    paddingBottom: "3rem",
  };

  return (
    <Container>
      <Typography style={titlestyle}>{props.title}</Typography>
      <Typography style={descstyle}>{props.desc}</Typography>
      {props.button1 && (
        <Button
          variant="text"
          className="btn-primary"
          href={props.button1.href}
          style={{ marginRight: "1rem" }}
        >
          {props.button1.text}
        </Button>
      )}
      {props.button2 && (
        <Button
          variant="text"
          className="btn-secondary"
          href={props.button2.href}
        >
          {props.button2.text}
        </Button>
      )}
    </Container>
  );
};

const Header = (props) => {
  return (
    <Grid container spacing={1} paddingTop="1rem" paddingBottom="5rem">
      <Grid
        item
        md={12}
        lg={7}
        style={{
          paddingLeft: "8rem",
          paddingRight: "8rem",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="30rem"
        >
          <LeftText
            title={props.title}
            desc={props.desc}
            button1={props.button1}
            button2={props.button2}
          />
        </Box>
      </Grid>
      <Grid item md={12} lg={5}>
        <img
          src={props.img || children}
          alt="..."
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        ></img>
      </Grid>
    </Grid>
  );
};

export default Header;
