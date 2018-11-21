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
        <Terminal
          line1="Hello"
          line2="My name's Amine"
          line3="I'm a full-stack developer"
          line4="I love everything that's related to new technology"
          line5="I hope this component has been useful to you"
        />
      </div>
    );
  }
}
