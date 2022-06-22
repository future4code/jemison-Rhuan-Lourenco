import rhuan from './img/rhuan.jpeg';
import './App.css';

function App() {
  const titulo = 'Olá! Eu sou o Rhuan!'
  const mandarBoaNoite = () => {
    alert('Olá! Boa noite!')
  }

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <img src={rhuan} className='foto-rhuan' alt='foto rhuan'/>
      <p> Este é o meu primeiro site React </p>
      <button onClick={mandarBoaNoite}>Clique Aqui</button>
    </div>
  );
}

export default App;
