import React from "react";
import { Row, Col } from "react-bootstrap";
import children from "./children.jpg";

function Header() {
  const childrenstyle = {
    width: "90%",
    justifyContent: "right",
    alignItems: "center",
  };

  const titlestyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    lineHeight: "1.2em",
  };

  const descstyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "3rem",
  };

  const leftbutton = {
    marginRight: "3rem",
  };

  return (
    <>
      <Row>
        <Col className="px-5 py-5">
          <br />
          <p style={titlestyle}>Find & share curricula</p>
          <p style={descstyle}>
            All curriculum is free to download and use as you see fit. Please
            consider providing feedback to the original author, or uploading
            your modified version if any changes were needed for your classroom.
          </p>
          &nbsp;
        </Col>
        <Col className="d-flex" style={{ justifyContent: "right" }}>
          <img src={children} alt="..." style={childrenstyle}></img>
        </Col>
      </Row>
    </>
  );
}

export default Header;
