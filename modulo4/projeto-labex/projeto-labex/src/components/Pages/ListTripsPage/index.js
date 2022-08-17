import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import { MainContainer, Header, Button, Card, Description, Post } from './styled'

function ListTripsPage() {

  const navigate = useNavigate();

  const goToApplicationFormPage = () => {
    navigate('/trips/application')
  }

  const goToHome = () => {
    navigate(-1)
  }

  const [{ trips }, loading] = useRequestData(`/trips`)

  return (
    <MainContainer>
      <Header>
        <p>Lista de Viagens</p>
        <Button onClick={goToHome}>Voltar</Button>
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