import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import rhuan from './img/rhuan.jpeg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={rhuan} className='foto-rhuan' alt='foto rhuan'
          nome="Rhuan Victor Virtudes Lourenço" 
          descricao="Sou da cidade de Uberaba, tenho 28 anos, sou casado e tenho duas lindas gatinhas. Sou formado em Educação Física e Redes de computadores, onde tive o primeiro contato com a programação e desde então tive o interesse na área. E agora na Labenu estou em busca de conhecimento para fazer a transição de carreira e entrar de vez na área da tecnologia."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1vM8f23GL5sBWc1dYDwaoHxpyKa6yxdDoQ&usqp=CAU"
          nome="Email: "
          descricao="rhvirtudes1@gmail.com"
        />

        <CardPequeno
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lDmLZNUixS9MEIorBjeZFy0UpqKfjiV1LwpbWJpMpUtAhS4iRVqOYlLyPIZDek_wKGk&usqp=CAU"
          nome="Endereço: "
          descricao="Uberaba-MG"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn.xxl.thumbs.canstockphoto.com.br/sapatos-desenhos_csp8625479.jpg" 
          nome="Morais Calçados" 
          descricao="Auxiliar de escritório!" 
        />
        
        <CardGrande 
          imagem="https://cdn.w600.comps.canstockphoto.com.br/escola-desenho-cliparte-vetor_csp15507501.jpg" 
          nome="Colégio Machado de Assis" 
          descricao="Auxiliar de escritório!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
