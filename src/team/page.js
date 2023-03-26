import React from "react";
import Header from "./header/header.js";
import Navbar from "../navbar/navbar.js";
import Title from "./title/title.js";
import Members from "./members/members.js";
import ContactSection from "../homepage/contact/contactsection.js";

class Team extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Title />
        <Members />
        <ContactSection />
      </>
    );
  }
}

export default Team;
