import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import Close from "./images/close.png";
import CloseHover from "./images/close-hover.png";
import Expand from "./images/expand.png";
import ExpandHover from "./images/expand-hover.png";
import Reduce from "./images/reduce.png";
import ReduceHover from "./images/reduce-hover.png";

class Terminal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      height: props.height,
      width: props.width,
      imageHover: "",
      isExpandClicked: false,
      isReduceClicked: false,
      isCloseClicked: false,
      shouldHideContent: false
    };
  }

  handleClickExpand = () => {
    const { isExpandClicked, isReduceClicked } = this.state;
    const { height, width } = this.props;
    this.setState({
      width: isExpandClicked ? width : width + 30,
      height: isExpandClicked || isReduceClicked ? height : height + 30,
      isExpandClicked: !isExpandClicked,
      isReduceClicked: false,
      isCloseClicked: false
    });
  };

  handleClickReduce = () => {
    this.setState({
      height: 30,
      isReduceClicked: true
    });
  };

  handleClickClose = () => {
    this.setState({ height: 30, width: 75, isCloseClicked: true }, () => {
      setTimeout(() => {
        this.setState({ shouldHideContent: true });
      }, 1000);
    });
  };

  render() {
    const {
      lines,
      textColor,
      textSize,
      theme,
      enableTypingAnimation
    } = this.props;

    const tab = [
      "first",
      "second",
      "therd",
      "four",
      "five",
      "six",
      "seven",
      "height",
      "nine"
    ];
    const imgStyle = { height: 14, paddingRight: 8, cursor: "pointer" };
    const {
      imageHover,
      height,
      width,
      isReduceClicked,
      isCloseClicked,
      shouldHideContent
    } = this.state;

    return (
      <div
        style={{
          height,
          width,
          boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
          background: theme == "White" ? "#ffffff" : "#282a36",
          transition: "all 0.5s ease",
          display: shouldHideContent && "none"
        }}
      >
        <div
          style={{
            height: 30,
            background: theme == "white" ? "#E8E8E8" : "#21222c",
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <div>
              <img
                src={imageHover === "reduce" ? ReduceHover : Reduce}
                alt="reduce-icon"
                style={imgStyle}
                onClick={this.handleClickReduce}
                onMouseEnter={() => this.setState({ imageHover: "reduce" })}
                onMouseOut={() => this.setState({ imageHover: "" })}
              />
            </div>
            <div>
              <img
                src={imageHover === "expand" ? ExpandHover : Expand}
                alt="expand-icon"
                style={imgStyle}
                onClick={this.handleClickExpand}
                onMouseEnter={() => this.setState({ imageHover: "expand" })}
                onMouseOut={() => this.setState({ imageHover: "" })}
              />
            </div>
            <div>
              <img
                src={imageHover === "close" ? CloseHover : Close}
                alt="close-icon"
                style={imgStyle}
                onClick={this.handleClickClose}
                onMouseEnter={() => this.setState({ imageHover: "close" })}
                onMouseOut={() => this.setState({ imageHover: "" })}
              />
            </div>
          </div>
        </div>
        <div
          style={isReduceClicked || isCloseClicked ? { display: "none" } : {}}
        >
          {lines.length > 0 &&
            lines.map((item, index) => (
              <p
                key={index}
                style={{
                  paddingTop: 10,
                  color: textColor,
                  fontFamily: "Courier",
                  fontSize: textSize,
                  margin: "10px 10px 0 25px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "100%"
                }}
                id={enableTypingAnimation ? tab[index] : ""}
              >
                $ {item}
              </p>
            ))}
        </div>
      </div>
    );
  }
}

Terminal.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  textSize: PropTypes.number.isRequired,
  lines:PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired,
  enableTypingAnimation: PropTypes.bool.isRequired
};

Terminal.defaultProps = {
  height: 300,
  width: 700,
  background: "#282a36",
  textColor: "#08FDD8",
  textSize: 20,
  lines: [],
  theme: "white",
  enableTypingAnimation: true
};

export default Terminal;
