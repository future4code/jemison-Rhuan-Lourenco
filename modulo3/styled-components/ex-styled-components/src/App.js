import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>

      <main>
        <Container/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
