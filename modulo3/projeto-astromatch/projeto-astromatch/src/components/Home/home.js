import React, { useEffect, useState } from "react";
import { MainCotainer, Card, Header, BotaoMatch, Perfil, Button, BotaoLike, BotaoDislike, DescricaoPerfil } from "./styled";
import axios from "axios";

function Home() {

    const urlPerson = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rhuan-victor-jemison/person";
    const urlChoose = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rhuan-victor-jemison/choose-person";

    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        selecionaPerfil();
    }, []);

    const escolherPerfil = (id, choice) => {
        const body = { id: id, choice: choice };
        axios
            .post(urlChoose, body)
            .then(() => selecionaPerfil())
            .catch((error) => console.log(error.data.response))
    }

    const selecionaPerfil = () => {
        axios
            .get(urlPerson)
            .then((response) => {
                if (response.data.profile !== null) {
                    setPerfil(response.data.profile);
                }
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    return (
        <MainCotainer>
            <Card>
                <Header>
                    <b>AstroMatch</b>
                    <BotaoMatch>Matches</BotaoMatch>
                </Header>
                <Perfil>
                    <div>
                        <h3>{perfil.name}, {perfil.age}</h3>
                    </div>
                    <div>
                        <img src={perfil.photo} />
                    </div>
                    <div>
                        <p>{perfil.bio}</p>
                    </div>
                </Perfil>
                <Button>
                    <BotaoDislike onClick={() => escolherPerfil(perfil.id, false)} >
                        <img src="https://cutewallpaper.org/24/tinder-logo-png/like-9d9a8-tinder-1c0a5-logo-37c6a-logodix.png" height="25" width="25" />
                    </BotaoDislike>
                    <BotaoLike onClick={() => escolherPerfil(perfil.id, true)}>
                        <img src="https://logodix.com/logo/306616.png" height="25" width="25" />
                    </BotaoLike>
                </Button>
            </Card>
        </MainCotainer>
    );
};

export default Home;