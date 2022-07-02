import React from "react";

function Input() {
    return(
        <EnviarMensagem>
            <Remetente>
                <label for="remetente"> Remetente: </label>
            </Remetente>
            <Mensagem>
                <label for="mensagem"> Msg: </label>
            </Mensagem>
        </EnviarMensagem>
    )
}

export default Input;