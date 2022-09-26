import React from "react";
import DrumPad from "./DrumPad";
import Display from "./Display";
import {
  SOUND_1,
  SOUND_2,
  SOUND_3,
  SOUND_4,
  SOUND_5,
  SOUND_6,
  SOUND_7,
  SOUND_8,
  SOUND_9,
} from "./sounds";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displaySample: "" };
  }

  clickedPad = (pressedKey, currentSample) => {
    document.getElementById(pressedKey).play();
    this.setState({
      displaySample: currentSample,
    });
  };

  render() {
    return (
      <div className="container">
        <div id="drum-machine">
          <div className="buttons">
            <DrumPad sound={SOUND_1} clickedPad={this.clickedPad} />
            <DrumPad sound={SOUND_2} clickedPad={this.clickedPad} />
            <DrumPad sound={SOUND_3} clickedPad={this.clickedPad} />
            <DrumPad sound={SOUND_4} clickedPad={this.clickedPad} />
            <DrumPad sound={SOUND_5} clickedPad={this.clickedPad} />
            <DrumPad sound={SOUND_6} clickedPad={this.clickedPad} />
            <DrumPad sound={SOUND_7} clickedPad={this.clickedPad} />
            <DrumPad sound={SOUND_8} clickedPad={this.clickedPad} />
            <DrumPad sound={SOUND_9} clickedPad={this.clickedPad} />
          </div>
          <Display sample={this.state.displaySample} />
        </div>
      </div>
    );
  }
}

export default App;
