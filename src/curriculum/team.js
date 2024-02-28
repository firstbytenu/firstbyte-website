import React from "react";
import styles from "./header.css";
import colors from "../utils/colors.js";
import { Container, Row, Col } from "react-bootstrap";
import st1 from "./st1.jpg";
import st2 from "./st2.jpg";
import st3 from "./st3.jpg";
import neu1 from "./neu1.png";
import neu2 from "./neu2.png";
import ch1 from "./ch1.png";
import ch2 from "./ch2.png";
import ch3 from "./ch3.jpg";




function Header() {
  const divStyle = {
    color: colors.font,
    backgroundColor: colors.secondary,
  };

  const titlestyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    lineHeight: "1.2em"
  };


  function textRow1(text1, text2) {
      return (
        <Row className="my-auto justify-content-center">
          
          <Col className="my-auto px-5 text-center mx-2">
            <p className={styles.description}>{text2}</p>
          </Col>
          
          
            </Row>
      );
    }
    
    function imageRow1(img1, img2) {
      return (
        <Row className="my-auto justify-content-center">
          <Col className="my-auto text-center mx-2">
          <div class="frame">
          <img src={img1} alt="..." className="img-fluid"></img>
          </div>
          </Col>
          <Col className="my-auto px-5 text-center mx-2">
          <div className="frame">
            <img src={img2} alt="..." className="img-fluid"></img>
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
          <div className="frame">
            <img src={img6} alt="..." className="img-fluid"></img>
            </div>
          </Col>
        </Row>
      );
    }
    function textRow2(text7, text5, text6) {
      return (
        <Row className="my-auto justify-content-center">
          
          <Col className="my-auto px-5 text-center mx-2">
            <p className={styles.description}>{text5}</p>
          </Col>
          
            </Row>
      );
    }

  return (
 
    <div style={divStyle}>
    <Row>
    
    <h2 style={{ textAlign: 'center' }}>Get a taste of Firstbyte's Curriculum</h2>
    </Row>
    <div id='neu'> 
    
    <h3 style={{ textAlign: 'center' }}>Northeastern Team</h3> </div> 

      <Container className="mx-auto" style={{margin: '0px 20px'}}>

        <Row style={{maxWidth: '100%', margin: '0px auto'}}>
          {imageRow1(neu1, neu2)}
          {textRow1(
            "",
            "Purpose: To teach and develop Computer Science curriculum for highschoolers in local Boston area and other organizations at Northeastern. History: We've made and taught an intro CS workshop that involves no electricity for highschoolers, Git+Command Line workshop for NEU clubs, and intro Discrete class for highschoolers", 
                   
          )}
          <div id='camp'> 

          <h3 style={{ textAlign: 'center' }}>Camp Harbor Team</h3> </div>


          {imageRow2(ch1, ch2, ch3)}
          {textRow2(
            "",
            "Purpose: The Camp Harbor View Team’s purpose is to connect with students grade 9-12 and teach STEM related curriculum with a focus in Computer Science. We teach at CHV’s Leadership Academy in the South End, and sometimes have the kids come for workshops here at Northeastern University. History: So far, we’ve run workshops about microcontrollers using the Micro:bit, web development technologies such as HTML and CSS, and 3-D modeling/printing tools and their applications.", 
            "",
           
          )}

          <div id='st'> 
          <h3 style={{ textAlign: 'center' }}>St Stephen Team</h3> </div>


          {imageRow2(st1, st2, st3)}
          {textRow2(
            "",
            "Purpose: Teach and develop STEM curriculum for elementary and middle school level students in the local Boston area. \n History: We’ve led workshops for students teaching principles of engineering, running experiments, and sparking creativity while exploring scientific concepts. Some of our past lessons include: creating marshmallow spaghetti towers to understand how buildings and bridges are made, pinhole cameras to learn about light and optics, and making rubber band cars to explore potential and kinetic energy in physics.",
            " ",
          )}
        </Row>
      </Container>
    </div>
  );
  
}

export default Header;