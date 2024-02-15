import React from "react";
import styles from "./header.css";
import colors from "../utils/colors.js";
import { Container, Row, Col } from "react-bootstrap";
import andy from "./andy.jpg";
import caleb from "./caleb.jpg";
import darren from "./darren.jpg";
import jennifer from "./jennifer.jpg";
import landyn from "./landyn.png";
import win from "./win.jpeg";
import srikar from "./srikar.jpg";

function header() {
  const divStyle = {
    color: colors.font,
    backgroundColor: colors.secondary,
  };

  const titlestyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    lineHeight: "1.2em"
  };


  function textRow1(text1, text2, text3, text4) {
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
          <Col className="my-auto text-center mx-2">
            <p className={styles.description}>{text4}</p>
          </Col>
            </Row>
      );
    }
    
    function imageRow1(img1, img2, img3, img4) {
      return (
        <Row className="my-auto justify-content-center">
          <Col className="my-auto text-center mx-2">
          <div class="frame">
          <img src={img1} alt="..." className="img-fluid"></img>
          </div>
          </Col>
          <Col className="my-auto px-5 text-center mx-2">
          <div class="frame">
            <img src={img2} alt="..." className="img-fluid"></img>
            </div>
          </Col>
          <Col className="my-auto text-center mx-2">
          <div class="frame">
            <img src={img3} alt="..." className="img-fluid"></img>
            </div>
          </Col>
          <Col className="my-auto text-center mx-2">
          <div class="frame">
            <img src={img4} alt="..." className="img-fluid"></img>
            </div>
          </Col>
        </Row>
      );
    }

    function imageRow2(img7, img5, img6) {
      return (
        <Row className="my-auto justify-content-center">
          <Col className="my-auto text-center mx-2">
          <div class="frame">
            <img src={img7} alt="..." className="img-fluid"></img>
            </div>
          </Col>
          <Col className="my-auto px-5 text-center mx-2">
          <div class="frame">
            <img src={img5} alt="..." className="img-fluid"></img>
            </div>
          </Col>
          <Col className="my-auto text-center mx-2">
          <div class="frame">
            <img src={img6} alt="..." className="img-fluid"></img>
            </div>
          </Col>
        </Row>
      );
    }
    function textRow2(text7, text5, text6) {
      return (
        <Row className="my-auto justify-content-center">
          <Col className="my-auto text-center mx-2">
            <p className={styles.description}>{text7}</p>
          </Col>
          <Col className="my-auto px-5 text-center mx-2">
            <p className={styles.description}>{text5}</p>
          </Col>
          <Col className="my-auto text-center mx-2">
            <p className={styles.description}>{text6}</p>
          </Col>
            </Row>
      );
    }

  return (
 
    <div style={divStyle}>
    <Row>
     <p style={titlestyle}>Meet your E-board!</p>
    </Row>
  
      <Container className="mx-auto" style={{margin: '0px 20px'}}>
        <Row style={{maxWidth: '100%', margin: '0px auto'}}>
          {imageRow1(andy, caleb, jennifer, darren)}
          {textRow1(
            <div>
            Andy Ge, President <br></br>
            4th year, CS + Math major
            </div>
           , "Caleb Lee, Co-Vice President, 3rd year, CS major + Systems concentration",
            "Jennifer Esfahany, Co-Vice President, 4th year, Civil Engineering major",
            "Darren Chen, Treasurer, 4th year, CS major. "
          )}
          {imageRow2(srikar, landyn, win)}
          {textRow2(
            "Srikar, Curricula Lead, ",
            "Landyn Sparacino, Software Lead, 3rd year, Cybersecurity + Criminal Justice major",
            "Win Tongtawee, Brand & Marketing Lead, 3rd year, CS major. ",
          )}
        </Row>
      </Container>
    </div>
  );
  
}

export default header;