import React from "react";
import Navbar from "../../navbar/navbar.js";
import Slides from "./slideshow.js"
import Page from "./page.js";
import EmailSection from "../../homepage/contact/contactsection.js";

class Northeastern extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
       <Navbar />
       <Slides />
      <EmailSection />
      </>
      
    );
  }
}


export default Northeastern;
