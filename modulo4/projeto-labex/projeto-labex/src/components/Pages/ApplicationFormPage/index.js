import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer, Form, Button, Input, Select } from './styled';
import { useForm } from '../../hooks/useForm';
import { baseUrl } from '../../constants/constants';
import axios from 'axios';
import { countries } from '../../constants/countries';

function ApplicationFormPage() {

  useEffect(() => {
    searchTrips();
  }, []);

  const [tripList, setTripList] = useState([]);
  const [trip, setTrip] = useState("");

  const navigate = useNavigate();

  const goToListTripsPage = () => {
    navigate(-1)
  }

  const { form, onChange, clear } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const onChangeTrip = (event) => {
    setTrip(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();

    axios.post(`${baseUrl}/trips/${trip}/apply`, form)
      .then(() => {
        alert("Aplicação enviada com sucesso!");
      })
      .catch((error) => {
        console.log(error)
      })
    clear();
    setTrip("");
  }

  const searchTrips = () => {

    axios.get(`${baseUrl}/trips`)
      .then((response) => {
        const trips = response.data.trips.map((trips) => {
          return <option value={trips.id}>{trips.name}</option>
        })
        setTripList(trips)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const countryOption = countries.map((country) => {
    return <option key={country.nome}>{country}</option>
  })


  return (
    <MainContainer>
      <Form>
        
        <form onSubmit={submitForm}>
        <p>Inscrever-se</p>
          <div>
            <Select 
            name={"viagem"}
            value={trip}
            onChange={onChangeTrip}
            required
            >
              <option value="" disabled>Escolha uma Viagem</option>
              {tripList}
            </Select>
          </div>

          <div>
            <Input
              name={"name"}
              value={form.name}
              onChange={onChange}
              placeholder={"Nome"}
              required
            />
          </div>

          <div>
            <Input
              name={"age"}
              value={form.age}
              onChange={onChange}
              placeholder={"Idade"}
              type={"number"}
              required
              min={18}
            />
          </div>

          <div>
            <Input
              name={"applicationText"}
              value={form.applicationText}
              onChange={onChange}
              placeholder={"Texto de Candidatura"}
              required
            />
          </div>

          <div>
            <Input
              name={"profession"}
              value={form.profession}
              onChange={onChange}
              placeholder={"Profissão"}
              required
            />
          </div>

          <div>
            <Select
              onChange={onChange}
              name={"country"}
              value={form.country}
              required
            >
              <option value="" disabled>Escolha um País</option>
              {countryOption}
            </Select>
          </div>

          <div>
            <Button>Enviar</Button>
            <Button onClick={goToListTripsPage} >Voltar</Button>
          </div>

        </form>
      </Form>
    </MainContainer>
  );
}

export default ApplicationFormPage;