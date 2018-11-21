import React, { Component } from "react";
import Terminal from "react-terminal-view";

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Terminal line1="test" />
      </div>
    );
  }
}
