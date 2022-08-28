import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthorization } from '../../hooks/useAuthorization';
import { baseUrl } from '../../constants/constants'
import { Card, Header, MainContainer, Description, Post, Button, CardCandidate, ListCandidates, ApprovedCandidates, ApprovedButton, DisapprovedButton, SectionButton } from './styled'
import { usePages } from '../../hooks/usePages'

function TripDetailsPage() {

  const [candidates, setCandidates] = useState([]);
  const [detailTrip, setDetailTrip] = useState({ approved: [] });

  useEffect(() => {
    tripDetail();
  }, []);

  const {goToAdminHome} = usePages();

  const { id } = useParams();

  const token = useAuthorization();

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
    return (
      <ApprovedCandidates><li>{decide.name}, {decide.age} anos</li></ApprovedCandidates>
    )
  })

  const showCandidates = candidates.map((candidate) => {
    return (
      <CardCandidate>
        <Post>
          <Description>Nome:</Description>
          {candidate.name}
        </Post>
        <Post>
          <Description>Profissão:</Description>
          {candidate.profession}
        </Post>
        <Post>
          <Description>Idade:</Description>
          {candidate.age}
        </Post>
        <Post>
          <Description>País:</Description>
          {candidate.country}
        </Post>
        <Post>
          <Description>Texto de Candidatura:</Description>
          {candidate.applicationText}
        </Post>
        <SectionButton>
          <ApprovedButton onClick={() => selectCandidate(candidate.id, true)} >Aprovar</ApprovedButton>
          <DisapprovedButton onClick={() => selectCandidate(candidate.id, false)} >Reprovar</DisapprovedButton>
        </SectionButton>
      </CardCandidate>
    )
  })

  const selectCandidate = ((candidateId, approve) => {
    const body = {
      approve: approve,
    }
    axios.put(`${baseUrl}/trips/${id}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: token,
      }
    })
      .then((response) => {
        tripDetail();
        approve
          ? alert("Seu candidato foi aprovado")
          : alert("Seu candidato foi reprovado")
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <MainContainer>
      <Header>
        {detailTrip.name}
      </Header>
      <Card>
        <Post>
          <Description>Nome:</Description>
          {detailTrip.name}
        </Post>
        <Post>
          <Description>Descrição:</Description>
          {detailTrip.description}
        </Post>
        <Post>
          <Description>Planeta:</Description>
          {detailTrip.planet}
        </Post>
        <Post>
          <Description>Duração:</Description>
          {detailTrip.durationInDays}
        </Post>
        <Post>
          <Description>Data:</Description>
          {detailTrip.date}
        </Post>
      </Card>
      <Button onClick={goToAdminHome} >Voltar</Button>
      <ListCandidates>Candidatos Pendentes</ListCandidates>
      <div>
        {candidates.length > 0 ? showCandidates : 'Não há candidatos pendentes'}
      </div>
      <ListCandidates>Candidatos Aprovados</ListCandidates>
      <div>{detailTrip.approved.length > 0 ? decidedCandidates : 'Não há candidatos aprovados'}</div>
    </MainContainer>
  );
}

export default TripDetailsPage;