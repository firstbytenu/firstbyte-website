import React from "react";
import StatsSection from "./header/stats.js";
import Header from "../../components/header/header.js";
import FeaturedCurricula from "./featured/FeaturedCurricula.js";
import Navbar from "../../components/navbar/navbar.js";
import EmailSection from "../../components/contact/contactsection";
import children from "../../public/children.jpg";

class Homepage extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
        <Header
          title="Get your first taste of teaching tech"
          desc="FirstByte provides educators with the materials and support 
          to teach STEM in their classrooms, regardless of budget or 
          technical background."
          button1={{
            text: "FOR STUDENTS",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSfgdHqfrIbdoDwoKo06yk677UNw07TpHJFL-hvNZ62cjojCpw/viewform",
          }}
          button2={{ text: "FOR EDUCATORS", href: "/for-educators" }}
          img={children}
        />
        <StatsSection />
        <FeaturedCurricula />
        <EmailSection />
      </>
    );
  }
}

export default Homepage;
