import React from "react";
import {EnviarMensagem, Remetente, Mensagem} from './styled'

// function Input() {
//     return(
//         <EnviarMensagem>
//             <Remetente>
//                 <label for="remetente"> Remetente: </label>
//                 <input type="text" name="remetente"/>
//             </Remetente>
//             <Mensagem>
//                 <label for="mensagem"> Msg: </label>
//                 <input type="text" name="mensagem" size={50} />
//             </Mensagem>
//             <div>
//                 <button type="submit">Enviar Mensagem</button>
//             </div>
//         </EnviarMensagem>
//     )
// }

function Input(props) {
    return (
        <Mensagem>
            <label for={props.name}> {props.label}</label>
            <input type="text" name={props.name} size={props.size} />
        </Mensagem>
    )
}

export default Input;