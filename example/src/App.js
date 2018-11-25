import React, { Component } from "react";
import Terminal from "react-terminal-view";

export default class App extends Component {
  render() {
    var lines = [
      "Hello,",
      "My name's Amine",
      "I'm a full-stack developer",
      "I love everything that's related to new technology",
      "I hope this component has been useful to you"
    ];
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "black"
        }}
      >
        <Terminal lines={lines} theme="White" textColor="black" />
      </div>
    );
  }
}
