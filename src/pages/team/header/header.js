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
          <p style={titlestyle}>Meet the FirstByte team</p>
          <p style={descstyle}>
            We are a team of undergraduate students at Northeastern University.
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
