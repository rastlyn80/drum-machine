import React from "react";

class DrumPad extends React.Component {
  showprops = () => {
    console.log(this.props.sound.key);
  };
  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.sound.id}
        onClick={this.showprops}
      >
        <audio
          className="clip"
          id={this.props.sound.key}
          src={this.props.sound.src}
        ></audio>

        {this.props.sound.key}
      </div>
    );
  }
}

export default DrumPad;
