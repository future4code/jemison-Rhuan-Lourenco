import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import Input from "./components/Input";
import { EnviarMensagem } from './components/Input/styled';
import Button from './components/Button';

function App() {
  return (
    <div className="App">

        <Header/>

      <main>
        <Container>
          <EnviarMensagem>
            <Input label="Remetente" name="remetente"/>
            <Input label="Msg" name="mensagem" size={50} />
          </EnviarMensagem>
          <Button mensagem="Enviar Mensagem"/>
        </Container>
      </main>

        <Footer/>
    </div>
  );
}

export default App;
