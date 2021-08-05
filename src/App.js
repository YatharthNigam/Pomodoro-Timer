import './App.css';
import Timer from './Timer.js';
import Settings from './Settings.js';
import {useState} from "react";


function App() {

  const [showSettings, setShowSettings] = useState(initialState: false);

  return (
    <main>
      {showSettings ? <Settings/> : <Timer />}
    </main>
  );
}

export default App;
