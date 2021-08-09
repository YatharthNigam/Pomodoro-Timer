import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
// import { useContext } from "react";
// import SettingsContext from "./SettingsContext";

//https://www.npmjs.com/package/react-circular-progressbar

const percentage = 50;
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
