import React from "react";
import Navbar from "../navbar/navbar.js";
//import Homepage from "../src/homepage/page.js";
//import Header from "../src/header/header.js";
import EmailSection from "../homepage/contact/contactsection.js"
import Team from "./team.js"



class MeetTeam extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
       <Navbar />
       <Team />
        <EmailSection />
      </>
      
    );
  }
}

export default MeetTeam;
