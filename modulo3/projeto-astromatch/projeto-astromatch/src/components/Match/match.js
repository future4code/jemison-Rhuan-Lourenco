import React, { useState, useEffect } from "react";
import { MainCotainer, Header, BotaoHome, Card, PerfilMatch } from "./styled";
import axios from "axios";
import { Perfil } from "../Home/styled";


function MatchScreen() {

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
          <BotaoHome>Home</BotaoHome>
        </Header>
        {showMatch.map((perfil) => {
          return (
            <PerfilMatch>
              <img src={perfil.photo} />
              {perfil.name}
            </PerfilMatch>
          )
        })}
      </Card>
    </MainCotainer>
  );
};

export default MatchScreen;