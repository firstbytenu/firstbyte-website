import React from "react";
import Header from "../../components/header/header.js";
import Navbar from "../../components/navbar/navbar.js";
import Title from "./title/title.js";
import Members from "./members/members.js";
import ContactSection from "../../components/contact/contactsection.js";

class Team extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
        <Header
          title="Meet the team"
          desc="We are a team of undergraduate students at Northeastern University."
        />
        {/* <Title /> */}
        <Members />
        <ContactSection />
      </>
    );
  }
}

export default Team;
