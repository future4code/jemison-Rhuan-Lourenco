import React from "react";
import {EnviarMensagem, Remetente, Mensagem} from './styled'

function Input() {
    return(
        <EnviarMensagem>
            <Remetente>
                <label for="remetente"> Remetente: </label>
                <input type="text" name="remetente"/>
            </Remetente>
            <Mensagem>
                <label for="mensagem"> Msg: </label>
                <input type="text" name="mensagem" size={50} />
            </Mensagem>
            <div>
                <button type="submit">Enviar Mensagem</button>
            </div>
        </EnviarMensagem>
    )
}

export default Input;