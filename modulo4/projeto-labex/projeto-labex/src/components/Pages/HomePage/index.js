import React from 'react';
import { useNavigate } from 'react-router-dom';
import {MainContainer, Home, ButtonSection, Button} from './styled'

function HomePage() {

  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login")
  }

  const goToListTripsPage = () => {
    navigate("/trips/list")
  }

  return (
    <section>
      <MainContainer>
        <Home>
          <p>LabeX</p>
        </Home>
        <ButtonSection>
          <Button onClick={goToListTripsPage}>
            <b>Lista de Viagem</b>
          </Button>
          <Button onClick={goToLoginPage}>
            <b>Área de Admin</b>
          </Button>
        </ButtonSection>
      </MainContainer>
    </section>
  );
}

export default HomePage;