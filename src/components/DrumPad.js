import React from "react";

class DrumPad extends React.Component {
  componentDidMount() {
    const element = document;
    element.addEventListener(
      "keypress",
      (event) => {
        console.log(event.key);
        if (event.key.toUpperCase() === this.props.sound.key) this.clickedPad();
      },
      false
    );
  }

  handleClick = () => {
    this.props.clickedPad(this.props.sound.key, this.props.sound.name);
  };

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.sound.id}
        onClick={this.handleClick}
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
