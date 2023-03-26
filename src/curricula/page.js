import React from "react";
import Header from "./header/header.js";
import Navbar from "../navbar/navbar.js";
import Title from "./title/title.js";
import ContactSection from "../homepage/contact/contactsection.js";
import Featured from "./featured/featured.js";
import SearchTerm from "./search/search.js";

class Curricula extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Featured />
        <SearchTerm />
        <ContactSection />
      </>
    );
  }
}

export default Curricula;
