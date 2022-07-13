import React from 'react';
import { Main, Form } from './styled';

function EtapaUm(props) {

    return (
        <Main>
            <Form>
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <ul>
                    <li>
                        <label>Qual o seu nome?</label>
                    </li>
                    <input type="text" placeholder='Insira seu nome' />
                    <li>
                        <label>Qual a sua idade?</label>
                    </li>
                    <input type="text" placeholder='Insira sua idade' />
                    <li>
                        <label>Qual seu email?</label>
                    </li>
                    <input type="text" placeholder='Insira seu email' />
                    <li>
                        <label>Qual a sua escolaridade?</label>
                    </li>
                    <select>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </select>
                </ul>
            </Form>
            <button onClick={props.onClick}>Próxima Etapa</button>
        </Main>
    );
}

export default EtapaUm;