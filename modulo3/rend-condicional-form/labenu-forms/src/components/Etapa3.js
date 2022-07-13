import React from 'react';
import { Main, Form } from './styled';

function EtapaTres(props) {
    return (
        <Main>
            <Form>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

            <ul>
                <li>
                    <label>Por que não terminou um curso de graduação?</label>
                </li>
                <input type="text"/>
                <li>
                    <label>Você fez algum curso complementar?</label>
                </li>
                <select>
                    <option>Curso técnico</option>
                    <option>Cursos de inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>
            </ul>
            </Form>
            <button onClick={props.onClick}>Próxima Etapa</button>
        </Main>
    );
}

export default EtapaTres;