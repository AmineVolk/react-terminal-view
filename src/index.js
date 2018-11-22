import React, { Component } from "react";
import styled from "styled-components";
import Image from "./images/buttons.png";
import style from "./MyStyles.css";
export default class Terminal extends Component {
  render() {
    const Terminal = styled.div`
      height: ${this.props.height}px;
      width: ${this.props.width}px;
      box-shadow: 2px 2px 3px #181818;
      background: ${this.props.theme == "White" ? "#e8e8e8" : "#282a36"};
    `;
    const TerminalHeader = styled.div`
      height: 30px;
      background: ${this.props.theme == "White" ? "#d9d9d9" : "#21222c"};
    `;
    const TerminalBody = styled.div`
    p {
      padding-top:10px;
      color:${this.props.textColor};
      font-family: "Courier";
      font-size: ${this.props.textSize}px;
      margin: 10px 10px 0 25px;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
    `;
    return (
      <Terminal>
        <TerminalHeader>
          <img src={Image} alt="" />
        </TerminalHeader>
        <TerminalBody>
          <p id={this.props.enableTypingAnimation ? style.first : ""}>
            $ {this.props.line1},
          </p>
          <p id={this.props.enableTypingAnimation ? style.second : ""}>
            $ {this.props.line2}
          </p>
          <p id={this.props.enableTypingAnimation ? style.therd : ""}>
            $ {this.props.line3}
          </p>
          <p id={this.props.enableTypingAnimation ? style.four : ""}>
            $ {this.props.line4}
          </p>
          <p id={this.props.enableTypingAnimation ? style.five : ""}>
            $ {this.props.line5}
          </p>
        </TerminalBody>
      </Terminal>
    );
  }
}
Terminal.defaultProps = {
  theme: "Dark",
  line1: "Hello,",
  line2: "My name's Amine",
  line3: "I'm a full-stack developer",
  line4: "I love everything that's related to new technology",
  line5: "I hope this component has been useful to you",
  height: 300,
  width: 700,
  background: "#282a36",
  textColor: "#08FDD8",
  textSize: 20,
  enableTypingAnimation: true
};
