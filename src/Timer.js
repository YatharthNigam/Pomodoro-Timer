import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton.js";
import PauseButton from "./PauseButton.js";
import SettingsButton from "./SettingsButton.js";

//https://www.npmjs.com/package/react-circular-progressbar

const percentage = 66;
const red = "red";

function Timer() {
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({ pathColor: "red", textColor: "black" })}
      />
      <div style={{ marginTop: "20px" }}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{ marginTop: "20px" }}>
        <SettingsButton />
      </div>
    </div>
  );
}

export default Timer;
