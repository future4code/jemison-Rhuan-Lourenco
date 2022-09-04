import React from 'react';
import {MainContainer, Home, ButtonSection, Button} from './styled'
import { usePages } from '../../hooks/usePages'

function HomePage() {

  const {goToLogin, goToListTripsPage} = usePages();

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
          <Button onClick={goToLogin}>
            <b>Área de Admin</b>
          </Button>
        </ButtonSection>
      </MainContainer>
    </section>
  );
}

export default HomePage;