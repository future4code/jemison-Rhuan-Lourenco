import React from 'react';
import { useRequestData } from '../../hooks/useRequestData';
import { MainContainer, Header, Button, Card, Description, Post } from './styled'
import { usePages } from '../../hooks/usePages'

function ListTripsPage() {

  const {goToApplicationFormPage, goToHomePage} = usePages();

  const [{ trips }, loading] = useRequestData(`/trips`)

  return (
    <MainContainer>
      <Header>
        <p>Lista de Viagens</p>
        <Button onClick={goToHomePage}>Voltar</Button>
        <Button onClick={goToApplicationFormPage}>Inscrever-se</Button>
      </Header>
      {!loading && (
        trips?.map((trip) => {
          return (
            <Card>
              <Post>
                <Description>Name:</Description>
                {trip.name}
              </Post>
              <Post>
                <Description>Descrição:</Description>
                {trip.description}
              </Post>
              <Post>
                <Description>Planeta:</Description>
                {trip.planet}
              </Post>
              <Post>
                <Description>Duração:</Description>
                {trip.durationInDays}
              </Post>
              <Post>
                <Description>Data:</Description>
                {trip.date}
              </Post>
            </Card>
          )
        })
      )}
    </MainContainer>

  );
}

export default ListTripsPage;