import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CadastroUsuario() {

    const [users, setUsers] = useState([]);
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const handleInputName = (e) => {
        setInputName(e.target.value)
    }


    const getAllUsers = () => {
        axios.get(url, serviceHeaders)
        .then((response) => {setUsers(response.data)})
        .catch((error) => {console.log(error.response)})
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceHeaders = {
        headers: {
            Authorization: 'rhuan-victor-jemison'
        }
    }

    useEffect(() => {
        getAllUsers()
    });

    const body = {
        name: inputName,
        email: inputEmail
    }

    const postListaUsuarios = (e) => {
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
        .then((response) => {
            alert("Usuário cadastrado com sucesso!")
            getAllUsers()
        })
        .catch((error) => {
            alert("Tente novamente =(")
        })

        setUsers("")
    }

    const deleteUsuario = (e) => {
        e.preventDefault();

        const delUser = users.filter((usuario) => usuario.name === inputName)

        axios.delete(url + "/" + delUser[0].id, serviceHeaders)
        .then((response) => {
            alert("Playlist deletada com sucesso!")
            getAllUsers();
        }).catch((error) => {
            alert("Algo deu errado. Tente novamente!")
        })

        setUsers("")
    }

    return (
        <dev>
            <div>
                <h1>CADASTRO USUÁRIO</h1>

                <ul>
                    <li>
                        <label>Digite seu email: </label>
                    </li>
                    <input type="text"  onChange={handleInputEmail} placeholder='Insira seu email' />
                    <li>
                        <label>Digite seu nome: </label>
                    </li>
                    <input type="text"  onChange={handleInputName} placeholder='Insira seu nome' />
                </ul>



                <button onClick={postListaUsuarios}>Adicionar</button>

                <button onClick={deleteUsuario}>Excluir</button>
            </div>
            <div>
            <ul>
                {getAllUsers}
            </ul>
            </div>
        </dev>
    );
}

export default CadastroUsuario;