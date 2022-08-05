
import './App.css';
import Home from './components/Home/home';
import MatchScreen from './components/Match/match';

function App() {

  const urlClear = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rhuan-victor-jemison/clear";

//   const limparMatches = () => {
//     props.limparInfo();
//     setMostraMatch([]);
//   };


  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
