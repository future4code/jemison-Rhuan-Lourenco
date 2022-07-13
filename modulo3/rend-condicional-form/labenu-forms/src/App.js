import React, { useState } from 'react';
import './App.css';
import EtapaUm from './components/Etapa1';
import EtapaDois from './components/Etapa2';
import EtapaTres from './components/Etapa3';
import EtapaQuatro from './components/Etapa4';


function App() {

  const [etapa, setEtapa] = useState('0')

  const mudarPagina = (proximaEtapa) => {
    setEtapa(proximaEtapa)
  }

  const renderizaEtapa = () => {
    switch (etapa) {
      case '1':
        return <EtapaUm onClick={() => mudarPagina('2')}/>

      case '2':
        return <EtapaDois onClick={() => mudarPagina('3')}/>

      case '3':
        return <EtapaTres onClick={() => mudarPagina('4')}/>

      case '4':
        return <EtapaQuatro />

      default:
        return <EtapaUm onClick={() => mudarPagina('2')}/>
    }
  }

  return (
    <div>
      {renderizaEtapa()}
    </div>
  );
}

export default App;
