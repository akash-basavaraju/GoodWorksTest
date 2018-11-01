import React, { Component } from "react";
import { connect } from "react-redux";
import Flexi from "./Components/Flexi";

class App extends Component {
  render() {
    return (
      <div>
        <Flexi />
      </div>
    );
  }
}

export default connect()(App);
