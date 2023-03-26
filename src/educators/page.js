import React from "react";
import Header from "./header/header.js";
import Navbar from "../navbar/navbar.js";
import EmailSection from "./contact/contactsection";
import EducatorForm from "./educatorform/educatorform.js";

class Educators extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
        <Header />
        <EducatorForm />
        <EmailSection />
      </>
    );
  }
}

export default Educators;
