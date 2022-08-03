import React from "react";
import { MainCotainer, Card, Header, BotaoMatch, PerfilMatch, Foto, Botoes } from "./styled";



function Home() {

    return (
        <MainCotainer>
            <Card>
                <Header>
                    <b>AstroMatch</b>
                </Header>          
                <Botoes>
                        <BotaoMatch >Limpar Matches</BotaoMatch>
                        <BotaoMatch >Home</BotaoMatch>
                </Botoes>

            </Card>
        </MainCotainer>
    );
};

export default Home;