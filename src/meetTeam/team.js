import React from "react";
import styles from "./header.css";
import colors from "../utils/colors.js";
import { Container, Row, Col } from "react-bootstrap";
import andy from "./andy.jpg";
import caleb from "./caleb.jpg";
import darren from "./darren.jpg";
import jennifer from "./jennifer.jpg";
import landyn from "./landyn.jpg";
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

    function textRow3(text1) {
      return (
        <Row className="my-auto justify-content-center"> 
        <Col className="my-auto text-right mx-2">
            <p className={styles.description}>{text1}</p>
            </Col>
            </Row>
      );
    }
    
    function imageRow3(img1) {
      return (
        <Row className="my-auto justify-content-center">
          <Col className="my-auto text-center mx-2">
          <div class="frame">
          <img src={img1} alt="..." className="img-fluid"></img>
          </div>
          </Col>
        </Row>
      );
    }
  return (
 
    <div style={divStyle}>
    <Row>
     <p style={titlestyle}>Meet your E-board!</p>
    </Row>
  
      <Container className="mx-auto" style={{margin: '0px 10px'}}>
        <Row style={{maxWidth: '100%', margin: '0px auto'}}>
        <div class="image-text-wrapper">
          {imageRow3(andy)}
         <b>Why FirstByte?</b> The mission to promote diversity and equity in CS was something that I resonated, and with having being involved in many similar activities in high school, it seemed like a good fit for me when I was looking for clubs to join.
          </div>
          {textRow3(
            <div>
            Andy Ge <br></br>
            President
            </div> 
            )}
          <div class="image-text-wrapper">
          {imageRow3(caleb)}
          <b>Why FirstByte?</b> I first joined FirstByte because I really wanted to be part of a club that I had interest in, not an academic extracurricular to pad my resume. I've always had a passion for teaching, and computer science was my major so it seemed natural. What I stumbled upon was a tight-knit family, where everyone is super passionate about what they do and supports each other to the fullest. I loved FirstByte's mission of making high-quality education accessible to anyone, and that's something I really wanted to be a part of. 
          </div>
          {textRow3(
            <div>
            Caleb Lee <br></br>
            Co-Vice President
            </div>
          )} 
          <div class="image-text-wrapper">
          {imageRow3(jennifer)}
         <b> Why  FirstByte?</b>I first joined because I wanted to help pioneer the non computer science ventures of our curriculum team. FirstByte's mission is to provide access to STEM resources, and I wanted to play a role in diversifying the array of lessons available to our students.</div>
          {textRow3(
            <div>
            Jennifer Esfahany <br></br>
            Co-Vice President
            </div>
          )} 
          <div class="image-text-wrapper">
          {imageRow3(darren)}
          <b>Why FirstByte?</b>I had quite a bit of free time during my co-op and was wanted to do something productive. That's when a friend introduced me to this club.
          </div>
           {textRow3(
            <div>
            Darren Chen <br></br>
           Treasurer
           </div>
          )} 
          <div class="image-text-wrapper">
          {imageRow3(landyn)}
          <b>Why FirstByte?</b> I joined FirstByte my sophomore year to get more involved with community service in the Boston area while also furthering my love for STEM. Everyone should have equal access to the resources we provide, so the club's purpose really stood out to me. I also loved how welcoming and inclusive the club members were, and that there was no heavy application process that would deter anyone from wanting to contribute to the club's amazing mission. </div>
          {textRow3(
           <div>
           Landyn Sparacino<br></br>
           Software Lead
           </div> 
           )}
           <div class="image-text-wrapper">
          {imageRow3(win)}
          <b>Why FirstByte?</b> I wanted to find a way to volunteer while still focusing on cs. I always loved teaching and helping people so FirstByte was a perfect fit for me! Caleb let me know about the club and I’ve been in it since!
          </div> {textRow3(
           <div>
            Win Tongtawee <br></br>
            Brand & Marketing Lead
            </div>
          )}
          <div class="image-text-wrapper">
          {imageRow3(srikar)}
         <b> Why FirstByte?</b>I've always loved teaching and working with kids, and FirstByte had the perfect intersection of Computer Science, education, and impact that I wanted </div>
          {textRow3(
           <div>
            Srikar Ananthoju<br></br>
            Curricula Lead
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
  
}

export default header;