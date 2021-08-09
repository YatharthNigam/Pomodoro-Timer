import ReactSlider from "react-slider";
import "./slider.css";
import SettingsContext from "./SettingsContext";
import { useContext } from "react";
import BackButton from "./components/BackButton";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{ textAlign: "left" }}>
      <label>Work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      ></ReactSlider>
      <label>Break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={"slider break"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      ></ReactSlider>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <BackButton />
      </div>
    </div>
  );
}

export default Settings;
