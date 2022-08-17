
import { useState } from 'react';
import './App.css';
import Home from './components/Home/home';
import MatchScreen from './components/Match/match';
import axios from 'axios';

function App() {

  const [screen, setScreen] = useState("home")

  const changeMatch = () => {
    setScreen("matchs");
  }

  const changeHome = () => {
    setScreen("home");
  }

  if(screen === "home") {
    return (
      <div>
        <Home
        changeMatch={changeMatch}
        />
      </div>
    );
  }
  return <MatchScreen changeHome={changeHome} />
}

export default App;
