import React from "react";
import styles from "./header.css";
import colors from "../../utils/colors.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import children from "./children.jpg";

function header3() {
  const chidrenstyle = {
    width: "100%",
    justifyContent: "right",
    alignItems: "center",
  };

  const titlestyle = {
    fontSize: "4rem",
    fontWeight: "bold",
  };

  const descstyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const leftbutton = {
    marginRight: "3rem",
  };

  return (
    <>
      <Row>
        <Col className="px-5 py-5">
          <p style={titlestyle}>Get your first taste of teaching tech</p>
          <p style={descstyle}>
            FirstByte provides educators with the materials and support to teach
            STEM in their classrooms, regardless of budget or technical
            background.
          </p>
          <Button variant="success" size="lg" style={leftbutton}>
            For Students
          </Button>{" "}
          <Button variant="success" size="lg">
            For Educators
          </Button>{" "}
        </Col>
        <Col className="d-flex">
          <img src={children} alt="..." style={chidrenstyle}></img>
        </Col>
      </Row>
    </>
  );
}

export default header3;
