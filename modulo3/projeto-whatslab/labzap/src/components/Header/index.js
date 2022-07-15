import React from "react";
import logo from '../../img/logo.jpg'
import {HeaderPai,Titulo} from './styled'

function Header() {
    return (
        <HeaderPai>
            <img src={logo} />
            <Titulo>
                <p>LabZap</p>
            </Titulo>
        </HeaderPai>
    )
}

export default Header;