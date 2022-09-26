import React from "react";
import Credits from "./Credits";

class Display extends React.Component {
  render() {
    return (
      <div className="right-panel">
        <div id="display">{this.props.sample}</div>
        <Credits />
      </div>
    );
  }
}

export default Display;
