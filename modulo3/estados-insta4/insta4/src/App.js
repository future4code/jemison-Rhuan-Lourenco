import React, { useState } from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Form = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  
  input {
    border: 1px solid black;
    border-radius: 10px;
    height: 25px;
    margin: 5px;
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: lightgrey;
  }

  button:hover {
    cursor: pointer;
    color: white;
    background-color: gray;
  }
`

function App() {
  const [inputNome, setInputNome] = useState("")
  const [inputFotoUsuario, setInputFotoUsuario] = useState("")
  const [inputFotoPost, setInputFotoPost] =useState("")

  const [usuarios, setUsuarios] = useState([
    {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: 'https://picsum.photos/200/150'
    },
    {
        nomeUsuario: "astrodev",
        fotoUsuario: "https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png",
        fotoPost: "https://pbs.twimg.com/profile_images/1389789795065335809/A8H1fuQb_400x400.jpg"
    },
    {
        nomeUsuario: "astrobot",
        fotoUsuario: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Gnome-stock_person_bot.svg/2048px-Gnome-stock_person_bot.svg.png",
        fotoPost: "https://i0.wp.com/www.opuspesquisa.com/wp-content/uploads/2021/03/Sistema-bot-1.jpg?resize=992%2C558&ssl=1"
    }
])

const postUsuario = usuarios.map((pessoa, index) => {
    return (
        <Post key={index} fotoPost={pessoa.fotoPost} fotoUsuario={pessoa.fotoUsuario} nomeUsuario={pessoa.nomeUsuario} />
    )
})

const handleInputNome = (event) => {
  setInputNome(event.target.value)
}

const handleInputFotoUsuario = (event) => {
  setInputFotoUsuario(event.target.value)
}

const handleInputFotoPost = (event) => {
  setInputFotoPost(event.target.value)
}

const addPost = (event) => {
  event.preventDefault();

  const novoPost = {nomeUsuario: inputNome, fotoUsuario: inputFotoUsuario, fotoPost: inputFotoPost}
  const novaListaDePost = [...usuarios, novoPost]
  setUsuarios(novaListaDePost)
}

return(
  <Main>
      <Form>
        <label>Nome:</label>
        <input placeholder='Insira seu nome' value={inputNome} onChange={handleInputNome} size={38} />

        <label>Foto Usuario:</label>
        <input placeholder='Insira sua foto' value={inputFotoUsuario} onChange={handleInputFotoUsuario} />

        <label>Foto Post:</label>
        <input placeholder='Insira a foto do Post' value={inputFotoPost} onChange={handleInputFotoPost} />

        <button onClick={addPost}>Adicionar</button>
      </Form>

    {postUsuario}
  </Main>
)
}

export default App;