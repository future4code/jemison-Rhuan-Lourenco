import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthorization } from '../../hooks/useAuthorization';
import { baseUrl } from '../../constants/constants'
import { Card, Header } from './styled'


function TripDetailsPage() {

  const [candidates, setCandidates] = useState([]);
  const [detailTrip, setDetailTrip] = useState({approved: []});

  const navigate = useNavigate();

  const goToAdminPage = () => {
    navigate("/admin/trips/list")
  }

  const {id} = useParams();

  const token = useAuthorization ();

  useEffect(() => {
    tripDetail();
  }, []);

  const tripDetail = () => {
    
    axios.get(`${baseUrl}/trip/${id}`, {
      headers: {
        auth: token,
      }
    })
    .then((response) => {
      setCandidates(response.data.trip.candidates)
      setDetailTrip(response.data.trip)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const decidedCandidates = detailTrip.approved.map((decide) => {
    return <li>{decide.name}</li>
  })

  const showCandidates = candidates.map((candidate) => {
    return (
      <Card>
      <p>
        <b>Nome:</b> {candidate.name}
      </p>
      <p>
        <b>Profissão:</b> {candidate.profession}
      </p>
      <p>
        <b>Idade:</b> {candidate.age}
      </p>
      <p>
        <b>País:</b> {candidate.country}
      </p>
      <p>
        <b>Texto de Candidatura:</b> {candidate.applicationText}
      </p>

      <button>Aprovar</button>
      <button>Reprovar</button>
    </Card>
    )
  })

  return (
    <div>
    <Header>
      {detailTrip.name}
      <button onClick={goToAdminPage} >Voltar</button>
    </Header>
    <Card>
      <p>
        <b>Nome: </b> {detailTrip.name}
      </p>
      <p>
        <b>Descrição:</b> {detailTrip.description}
      </p>
      <p>
        <b>Planeta:</b> {detailTrip.planet}
      </p>
      <p>
        <b>Duração:</b> {detailTrip.durationInDays}
      </p>
      <p>
        <b>Data:</b> {detailTrip.date}
      </p>
    </Card>

    <div>{showCandidates}</div>
    <div>{decidedCandidates}</div>
  </div>
  );
}

export default TripDetailsPage;