import React, { useState, useEffect } from "react";
import { MainCotainer, Header, BotaoHome, Card, PerfilMatch, MatchCard } from "./styled";
import axios from "axios";
import ResetButton from "../ButtonClear";


function MatchScreen(props) {

  const urlMatch = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rhuan-victor-jemison/matches";

  const [showMatch, setShowMatch] = useState([])

  useEffect(() => {
    matchList();
  }, []);

  const matchList = () => {
    axios
      .get(urlMatch)
      .then((response) => {
        console.log(response);
        setShowMatch(response.data.matches);
        console.log(matchList)
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
          <BotaoHome onClick={props.changeHome} >Home</BotaoHome>
        </Header>
        <MatchCard>
          {showMatch.map((perfil) => {
            return (
              <PerfilMatch>
                <img src={perfil.photo} />
                {perfil.name}
              </PerfilMatch>
            )
          })}
        </MatchCard>
      </Card>
      <ResetButton />
    </MainCotainer>
  );
};

export default MatchScreen;