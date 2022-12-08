import React, { useState } from "react";
import Close from "./images/close.png";
import CloseHover from "./images/close-hover.png";
import Expand from "./images/expand.png";
import ExpandHover from "./images/expand-hover.png";
import Reduce from "./images/reduce.png";
import ReduceHover from "./images/reduce-hover.png";
import PropTypes from "prop-types";
import { BUTTON_TYPES } from "./const";

const imgStyle = { height: 16, paddingRight: 8, cursor: "pointer" };

const ButtonActions = ({ theme, handleClickButton }) => {
  const imageByTypes = {
    close: () => Close,
    closehover: () => CloseHover,
    reduce: () => Reduce,
    reducehover: () => ReduceHover,
    expand: () => Expand,
    expandhover: () => ExpandHover
  };
  const [hoveredImage, setHoveredImage] = useState("");
  return (
    <div
      style={{
        height: 30,
        background: theme == "white" ? "#E8E8E8" : "#21222c",
        display: "flex",
        justifyContent: "flex-end",
        borderTopRightRadius: "8px",
        borderTopLeftRadius: "8px"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        {Object.values(BUTTON_TYPES).map(value => (
          <div>
            <img
              src={imageByTypes[
                `${value}${value === hoveredImage ? "hover" : ""}`
              ]()}
              alt={`${value}-icon`}
              style={imgStyle}
              onClick={handleClickButton(value)}
              onMouseEnter={() => setHoveredImage(value)}
              onMouseOut={() => setHoveredImage("")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
ButtonActions.propTypes = {
  theme: PropTypes.string.isRequired,
  handleClickReduce: PropTypes.func.isRequired,
  handleClickExpand: PropTypes.func.isRequired,
  handleClickClose: PropTypes.func.isRequired
};

export { ButtonActions };
