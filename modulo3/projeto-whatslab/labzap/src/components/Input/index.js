import React from "react";
import {Mensagem} from './styled'

function Input(props) {
    return (
        <Mensagem>
            <label for={props.name} size={props.size}> {props.label} </label>
            <input type="text" name={props.name} size={props.size} />
        </Mensagem>
    )
}

export default Input;