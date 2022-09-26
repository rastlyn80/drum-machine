import React from "react";

class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener(
      "keydown",
      (event) => {
        var name = event.key;
        if (event.key.toUpperCase() === this.props.sound.key) this.clickedPad();
      },
      false
    );
  }

  clickedPad = () => {
    document.getElementById(this.props.sound.key).play();
  };
  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.sound.id}
        onClick={this.clickedPad}
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
