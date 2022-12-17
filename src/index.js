import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { ButtonActions } from "./ButtonActions";
import { BUTTON_TYPES } from "./const";
class Terminal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      initHeight: null,
      height: props.height,
      width: props.width,
      isExpandClicked: false,
      isReduceClicked: false,
      isCloseClicked: false,
      shouldHideContent: false
    };
    this.terminalRef = React.createRef();
  }

  handleClickExpand = () => {
    const { isExpandClicked } = this.state;
    const { width } = this.props;
    this.setState({
      width: isExpandClicked ? width : width + 30,
      height: this.state.initHeight,
      isExpandClicked: true
    });

    // to avoid display text, before the end of the animation.
    setTimeout(() => {
      this.setState({
        isReduceClicked: false,
        isCloseClicked: false
      });
    }, 500);
  };

  handleClickReduce = () => {
    console.log(`--- ${JSON.stringify("reduce", null, 2)}`);

    // init the component height, to make the height transition working.
    this.setState({
      height: this.terminalRef.current.clientHeight,
      initHeight: this.terminalRef.current.clientHeight
    });
    setTimeout(() => {
      this.setState({
        height: 30,
        isReduceClicked: true,
        isExpandClicked: false,
        isCloseClicked: false
      });
    }, 200);
  };

  handleClickClose = () => {
    this.setState({ height: 30, width: 75, isCloseClicked: true }, () => {
      setTimeout(() => {
        this.setState({ shouldHideContent: true });
      }, 1000);
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
    console.log(`--- ${JSON.stringify("*********************", null, 2)}`);

    console.log(
      `--- isReduceClicked : ${JSON.stringify(
        this.state.isReduceClicked,
        null,
        2
      )}`
    );
    console.log(
      `--- isCloseClicked : ${JSON.stringify(
        this.state.isCloseClicked,
        null,
        2
      )}`
    );
    console.log(
      `--- isExpandClicked : ${JSON.stringify(
        this.state.isExpandClicked,
        null,
        2
      )}`
    );

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
        ref={this.terminalRef}
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
              className={enableTypingAnimation ? "terminaltext" : ""}
              key={index}
              style={{
                color: textColor,
                fontSize: textSize
              }}
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
