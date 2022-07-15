import './App.css';
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import { Conversa } from './components/Thread/styled'

const Mensagem = styled.p`
  align-self: ${(props) => props.direita === true ? 'flex-end' : 'flex-start'};
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${(props) => props.verde === true ? 'lightgreen' : 'lightgrey'};
`;

function App() {

  const [mensagens, setMensagens] = React.useState([]);
  const [nome, setNome] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');

  const enviouMensagem = (event) => {
    event.preventDefault();
    const msg = {
      nome: nome,
      mensagem: mensagem,
    };

    setMensagens([...mensagens, msg]);
    setNome('');
    setMensagem('');
  };

  const atualizaMensagem = (event) => {
    setMensagem(event.target.value);
  };

  const atualizaNome = (event) => {
    setNome(event.target.value);
  };

  const removeMensagem = (indice) => {
    const novoMensagem = [
      ...mensagens.slice(0, indice),
      ...mensagens.slice(indice + 1)
    ];

    setMensagens(novoMensagem);
  }

  return (
    <div className="App">

      <Header />

      <main>
        <Container>
          <Conversa>

            {mensagens.map((mensagem, indice) => (
              <Mensagem
                direita={mensagem.nome === 'eu'}
                verde={mensagem.nome === 'eu'}
                onDoubleClick={() => removeMensagem(indice)}
              >
                {mensagem.nome !== 'eu' && <strong>{mensagem.nome}: </strong>}
                {mensagem.mensagem}
              </Mensagem>
            ))}

            <form onSubmit={enviouMensagem}>
              <label htmlFor="nome"> Nome:  </label>
              <input type="text" name="nome" size={25} value={nome} onChange={atualizaNome} />
              <label htmlFor="mensagem">  Mensagem:  </label>
              <input type="text" name="mensagem" size={120} value={mensagem} onChange={atualizaMensagem} />
              <button type="submit">Enviar mensagem</button>
            </form>

          </Conversa>

        </Container>
      </main>

      <Footer />

    </div>
  );
}
export default App;