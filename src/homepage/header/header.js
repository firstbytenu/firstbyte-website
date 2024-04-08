import React from "react";
import { Row, Col } from "react-bootstrap";
import children from "./children.jpg";
import stphn3 from "./stphn3.jpg";
import { Link } from "react-router-dom";
// import "firstbyte-website-master/src/homepage/header/foreducators.html";
// import "firstbyte-website-master/src/homepage/header/forstudents.html";


function Header() {
  const chidrenstyle = {
    width: "50%",
    justifyContent: "right",
    alignItems: "center",
    marginLeft: "20px", 

  };

  // const titlestyle = {
  //   fontSize: "3.2rem",
  //   fontWeight: "bold",
  //   lineHeight: "1.2em"
  // };

  // const descstyle = {
  //   fontSize: "1.5rem",
  //   fontWeight: "bold",
  //   marginBottom: "3rem",
  // };

  const titlestyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    lineHeight: "1.2em",
    marginBottom: "1em", // Adding marginBottom to create space after the paragraph
  };
  
  
  const descstyle = {
    fontSize: "1rem",
    lineHeight: "1.6em",
  };
   
  const leftbutton = {
    marginRight: "3rem",
  };

  // window.open("foreducators.html", "_blank");// popups are set on an eternal loop welp


console.log("JavaScript is running!"); //checking to see if javascript is in fact running and its running

  return (
    <>
      <Row>
        <Col className="px-5 py-5">
          <br />
          <p style={titlestyle}>Get your first taste of teaching STEM</p> 
          <p style={descstyle}>
            FirstByte provides educators with the materials and support to teach
            STEM in their classrooms, regardless of budget or technical
            background.
          </p>




          
          {/* <a href="/forstudents.html" target="_blank">
          <button type="button" class="btn btn-primary mx-1" style={leftbutton}>
            For Students
          </button>
          </a> */}

          {/* <button type="button" class="btn btn-secondary mx-1">
            For Educators                                                                         //can not use a href without an on click event
          </button> */}
          {/* <Link to="/for-educators" className="btn btn-secondary mx-1">
            For Educators
          </Link> */}
         


        </Col>
        <Col className="d-flex" style={{justifyContent: 'right'}}>
        <img src={stphn3} alt="..." style={chidrenstyle}></img>
        <img src={children} alt="..." style={chidrenstyle}></img>


        </Col>
      </Row>
    </>
  );
}

export default Header;
