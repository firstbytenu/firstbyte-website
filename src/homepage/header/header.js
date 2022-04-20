import React from "react";
import { Row, Col } from "react-bootstrap";
import children from "./children.jpg";

function Header() {
  const chidrenstyle = {
    width: "90%",
    justifyContent: "right",
    alignItems: "center",
  };

  const titlestyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    lineHeight: "1.2em"
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
          <p style={titlestyle}>Get your first taste of teaching tech</p>
          <p style={descstyle}>
            FirstByte provides educators with the materials and support to teach
            STEM in their classrooms, regardless of budget or technical
            background.
          </p>
          <button type="button" class="btn btn-primary mx-1" style={leftbutton}>
            For Students
          </button>&nbsp;
          <button type="button" class="btn btn-secondary mx-1">
            For Educators
          </button>&nbsp;
        </Col>
        <Col className="d-flex" style={{justifyContent: 'right'}}>
          <img src={children} alt="..." style={chidrenstyle}></img>
        </Col>
      </Row>
    </>
  );
}

export default Header;
