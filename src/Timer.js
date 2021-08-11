import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import { useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";
import { useContext } from "react";

//https://www.npmjs.com/package/react-circular-progressbar

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState("work"); //work,break,null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function switchMode() {
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSeconds =
      nextMode === "work"
        ? settingsInfo.workMinutes
        : settingsInfo.breakMinutes;
    setMode(nextMode);
    modeRef.current = nextMode;
    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  function initTimer() {
    setSecondsLeft(settingsInfo.workMinutes * 60);
  }

  useEffect(() => {
    initTimer();
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds*100);

  const minutes =Math.floor(secondsLeft / 60);
  let seconds = secondsLeft %60;
  if(seconds<10) seconds = '0'+seconds;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes+':'+seconds}
        styles={buildStyles({ pathColor: "#e98074", textColor: "#e85a4f" })}
      />
      <div style={{ marginTop: "20px" }}>
        {isPaused ? <PlayButton /> : <PauseButton />}
      </div>
      <div style={{ marginTop: "20px" }}>
        <SettingsButton />
      </div>
    </div>
  );
}

export default Timer;
