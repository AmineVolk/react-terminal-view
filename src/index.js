import React, { Component } from "react";
import styled from "styled-components";
import Image from "./images/buttons.png";
import style from "./MyStyles.css";

export default class Terminal extends Component {
  state = {
    percent: 10
  };
  render() {
    const tab = [
      style.first,
      style.second,
      style.therd,
      style.four,
      style.five,
      style.six,
      style.seven,
      style.height,
      style.nine
    ];
    const Terminal = styled.div`
      height: ${this.props.height}px;
      width: ${this.props.width}px;
      box-shadow: 2px 2px 3px #181818;
      background: ${this.props.theme == "White" ? "#ffffff" : "#282a36"};
    `;
    const TerminalHeader = styled.div`
      height: 30px;
      background: ${this.props.theme == "White" ? "#E8E8E8" : "#21222c"};
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
          {this.props.lines.map((item, index) => (
            <p id={this.props.enableTypingAnimation ? tab[index] : ""}>
              $ {item}
            </p>
          ))}
        </TerminalBody>
      </Terminal>
    );
  }
}
Terminal.defaultProps = {
  height: 300,
  width: 700,
  background: "#282a36",
  textColor: "#08FDD8",
  textSize: 20,
  enableTypingAnimation: true
};
