import React from 'react';
import { Main, Form } from './styled';

function EtapaDois(props) {
    return (
        <Main>
            <Form>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

            <ul>
                <li>
                    <label>Qual Curso?</label>
                </li>
                <input type="text" placeholder='Insira seu curso'/>
                <li>
                    <label>Qual a unidade de ensino?</label>
                </li>
                <input type="text" placeholder='Insira a unidade de ensino'/>
            </ul>
            </Form>
            <button onClick={props.onClick}>Próxima Etapa</button>
        </Main>
    );
}

export default EtapaDois;