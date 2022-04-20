import React from "react";
import styles from "./header.css";
import colors from "../../utils/colors.js";
import { Container, Row, Col } from "react-bootstrap";
import code_brackets from "./code_brackets.png";
import grad_cap from "./grad_cap.png";
import person from "./person.png";

function header() {
  function imageWithText(text, image) {
    return (
      <Col className="my-auto text-center">
        <Row className="my-auto justify-content-center">
          <img src={image} alt="..." className="mw-50"></img>
        </Row>
        <Row>
          <p className={styles.description}>{text}</p>
        </Row>
      </Col>
    );
  }
  const divStyle = {
    color: colors.font,
    backgroundColor: colors.secondary,
  };

  return (
    <div style={divStyle}>
      <Container fluid className="align-middle">
        <Row>
          {imageWithText(
            "Only 18 states have created K-8 computer science standards. Momentum is building, but we still have a long way to go.",
            grad_cap
          )}
          {imageWithText(
            "Women who try computer science in high school are 10x more likely to major in it, and Black and Latinx students are 7x more likely.",
            person
          )}
          {imageWithText(
            "Every 21st century student deserves the opportunity to learn about algorithms, how to make an app, or how the Internet works.",
            code_brackets
          )}
        </Row>
      </Container>
    </div>
  );
}

export default header;
