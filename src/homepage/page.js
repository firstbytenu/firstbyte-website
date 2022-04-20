import React from "react";
import Header2 from "./header/header2.js";
import Header3 from "./header/header3.js";

class Homepage extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <Header3></Header3>
        <Header2></Header2>
      </>
    );
  }
}

export default Homepage;
