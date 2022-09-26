import React from "react";
import DrumPad from "./DrumPad";
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
  render() {
    return (
      <div className="container">
        <div id="drum-machine">
          <div className="buttons">
            <DrumPad sound={SOUND_1} />
            <DrumPad sound={SOUND_2} />
            <DrumPad sound={SOUND_3} />
            <DrumPad sound={SOUND_4} />
            <DrumPad sound={SOUND_5} />
            <DrumPad sound={SOUND_6} />
            <DrumPad sound={SOUND_7} />
            <DrumPad sound={SOUND_8} />
            <DrumPad sound={SOUND_9} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
