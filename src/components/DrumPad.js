import React from "react";

class DrumPad extends React.Component {
  showprops = () => {
    console.log(this.props.sound.key);
  };
  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.sound.key}
        onClick={this.showprops}
      >
        {this.props.sound.key}
      </div>
    );
  }
}

export default DrumPad;
