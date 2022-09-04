import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../constants/constants';
import { useAuthorization } from '../../hooks/useAuthorization';
import axios from 'axios';
import { Card, DeleteButton, MainContainer, Text, ButtonSection, Button} from './styled'
import { usePages } from '../../hooks/usePages'

function AdminPage() {

  const [tripList, setTripList] = useState([]);

  const token = useAuthorization();

  useEffect(() => {
    cardTrip();
  }, [])

  const {goToCreateTrip, goToTripDetails, goToLogin, goToHomePage} = usePages()

  const cardTrip = () => {

    axios.get(`${baseUrl}/trips`)
      .then((response) => {
        setTripList(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deleteTrip = (id) => {

    axios.delete(`${baseUrl}/trips/${id}`, {
      headers: {
        auth: token,
      },
    })
      .then(() => {
        alert("Viagem deletada com sucesso")
        cardTrip();
      })
      .catch((error) => {
        console.log(error.data);
      })
  }

  const tripDetail = (id) => {
    goToTripDetails(id);
  }

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin();
  }

  const tripCard = tripList.map((trip) => {
    return (
      <Card value={trip.id}>
        <p onClick={() => tripDetail(trip.id)} style={{ cursor: 'pointer' }}><b>{trip.name}</b></p>
        <DeleteButton value={trip.id} onClick={() => deleteTrip(trip.id)}>
          <b>Delete</b>
        </DeleteButton>
      </Card>
    )
  })

  return (
    <MainContainer>
      <Text>Painel Administrativo</Text>
      <ButtonSection>
        <Button onClick={() => goToCreateTrip()}>
          Criar Viagem
        </Button>
        <Button onClick={() => goToHomePage()}>Voltar</Button>
        <Button onClick={logout}>Logout</Button>
      </ButtonSection>
      {tripCard}
    </MainContainer>
  );
}

export default AdminPage;