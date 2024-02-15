import React from "react";
import styles from "./header.css";
import colors from "../../utils/colors.js";
import { Container, Row, Col } from "react-bootstrap";
import code_brackets from "./code_brackets.png";
import grad_cap from "./grad_cap.png";
import person from "./person.png";

function header() {
  const divStyle = {
    color: colors.font,
    backgroundColor: colors.secondary,
  };
  
  function imageRow(img1, img2, img3) {
    return (
      <Row className="my-auto justify-content-center">
        <Col className="my-auto text-center mx-2">
          <img src={img1} alt="..." className="img-fluid"></img>
        </Col>
        <Col className="my-auto px-5 text-center mx-2">
          <img src={img2} alt="..." className="img-fluid"></img>
        </Col>
        <Col className="my-auto text-center mx-2">
          <img src={img3} alt="..." className="img-fluid"></img>
        </Col>
      </Row>
    );
  }

  function textRow(text1, text2, text3) {
    return (
      <Row className="my-auto justify-content-center">
        <Col className="my-auto text-center mx-2">
          <p className={styles.description}>{text1}</p>
        </Col>
        <Col className="my-auto px-5 text-center mx-2">
          <p className={styles.description}>{text2}</p>
        </Col>
        <Col className="my-auto text-center mx-2">
          <p className={styles.description}>{text3}</p>
        </Col>
      </Row>
    );
  }

  return (
    <div style={divStyle}>
      <Container className="mx-auto" style={{margin: '0px 30px'}}>
        <Row style={{maxWidth: '85%', margin: '0px auto'}}>
          {imageRow(grad_cap, person, code_brackets)}
          {textRow(
            "Only 18 states have created K-8 computer science standards. Momentum is building, but we still have a long way to go.",
            "Women who try computer science in high school are 10x more likely to major in it, and Black and Latinx students are 7x more likely.",
            "Every 21st century student deserves the opportunity to learn about algorithms, how to make an app, or how the Internet works."
          )}
        </Row>
      </Container>
    </div>
  );
}

export default header;
