import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import { ButtonActions } from "./ButtonActions";
import { BUTTON_TYPES } from "./const";
class Terminal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      height: props.height,
      width: props.width,
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
      }, 700);
    });
  };

  handleClickButton = (type = "close") => () => {
    const { REDUCE, EXPAND, CLOSE } = BUTTON_TYPES;
    const handleClickByTypes = {
      [REDUCE]: this.handleClickReduce,
      [EXPAND]: this.handleClickExpand,
      [CLOSE]: this.handleClickClose
    };
    handleClickByTypes[type]();
  };
  render() {
    const {
      lines,
      textColor,
      textSize,
      theme,
      enableTypingAnimation
    } = this.props;

    const {
      height,
      width,
      isReduceClicked,
      isCloseClicked,
      shouldHideContent
    } = this.state;

    return (
      <div
        id="container"
        style={{
          height,
          width,
          background: theme == "White" ? "#ffffff" : "#282a36",
          display: shouldHideContent ? "none" : "initial"
        }}
      >
        <ButtonActions
          theme={theme}
          handleClickButton={this.handleClickButton}
        />
        <div
          id="terminalBody"
          style={{
            display: isReduceClicked || isCloseClicked ? "none" : "inherit"
          }}
        >
          {lines?.map((item, index) => (
            <p
              className="terminaltext"
              key={index}
              style={{
                color: textColor,
                fontSize: textSize
              }}
              id={enableTypingAnimation ? `text${index + 1}` : ""}
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
  lines: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired,
  enableTypingAnimation: PropTypes.bool.isRequired
};

Terminal.defaultProps = {
  width: 700,
  background: "#282a36",
  textColor: "#08FDD8",
  textSize: 20,
  lines: [],
  theme: "white",
  enableTypingAnimation: true
};

export default Terminal;
