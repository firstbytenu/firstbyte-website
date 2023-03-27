import React from "react";
import Header from "../../components/header/header.js";
import Navbar from "../../components/navbar/navbar.js";
import EmailSection from "./contact/contactsection";
import EducatorForm from "./educatorform/educatorform.js";

class Educators extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
        <Header
          title="For Educators"
          desc="All curriculum is free to download and use as you see fit. Please
            consider providing feedback to the original author, or uploading
            your modified version if any changes were needed for your classroom."
          button1={{ text: "VIEW CURRICULA", href: "/curricula" }}
        />
        <EducatorForm />
        <EmailSection />
      </>
    );
  }
}

export default Educators;
