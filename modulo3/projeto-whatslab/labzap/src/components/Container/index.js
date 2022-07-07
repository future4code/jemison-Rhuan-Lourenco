import React from "react";
import {ContainerPai} from './styled'

function Container (props){
    return(
        <ContainerPai>
            {props.children}
        </ContainerPai>
    )
}
export default Container;