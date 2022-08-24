import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants/constants';
import { useAuthorization } from '../../hooks/useAuthorization';
import axios from 'axios';
import { Card, DeleteButton, MainContainer, Text, ButtonSection, Button} from './styled'

function AdminPage() {

  const [tripList, setTripList] = useState([]);

  const token = useAuthorization();

  useAuthorization();

  useEffect(() => {
    cardTrip();
  }, [])

  const navigate = useNavigate();

  const goToCreateTrip = () => {
    navigate("/admin/trips/create")
  }

  const goToTripDetails = () => {
    navigate("/admin/trips/:id")
  }

  const goToLogin = () => {
    navigate("/login")
  }

  const goToHomePage = () => {
    navigate("/")
  }

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
        tripCard();
        alert("Viagem deletada com sucesso")
      })
      .catch((error) => {
        console.log(error.data);
      })
  }

  const tripDetail = (id) => {
    goToTripDetails(navigate, id);
  }

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(navigate);
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
        <Button onClick={() => goToCreateTrip(navigate)}>
          Criar Viagem
        </Button>
        <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
        <Button onClick={logout}>Logout</Button>
      </ButtonSection>
      {tripCard}
    </MainContainer>
  );
}

export default AdminPage;