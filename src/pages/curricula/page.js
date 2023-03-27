import React from "react";
import Header from "../../components/header/header.js";
import Navbar from "../../components/navbar/navbar.js";
import ContactSection from "../../components/contact/contactsection.js";
import Featured from "./featured/featured.js";
import SearchTerm from "./search/search.js";

class Curricula extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
        <Header
          title="Find & share curricula"
          desc="All curriculum is free to download and use as you see fit. Please
            consider providing feedback to the original author, or uploading
            your modified version if any changes were needed for your classroom."
        />
        <Featured />
        <SearchTerm />
        <ContactSection />
      </>
    );
  }
}

export default Curricula;
