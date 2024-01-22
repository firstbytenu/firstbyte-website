import React from "react";
import StatsSection from "./header/stats.js";
import Header from "./header/header.js";
import FeaturedCurricula from "./featured/FeaturedCurricula.js";
import Navbar from "../navbar/navbar.js";
import EmailSection from "./contact/contactsection"

class Homepage extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
        {/* <Header />
        <StatsSection />
        <FeaturedCurricula />
        <EmailSection /> */}
      </>
    );
  }
}

export default Homepage;
