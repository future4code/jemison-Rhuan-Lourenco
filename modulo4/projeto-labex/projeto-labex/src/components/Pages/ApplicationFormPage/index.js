import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer, Form, Button, Input, Select } from './styled';
import { useForm } from '../../hooks/useForm';
import { baseUrl } from '../../constants/constants';
import axios from 'axios';

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


  return (
    <MainContainer>
      <Form>
        <p>Inscrever-se</p>
        <form onSubmit={submitForm}>

          <div>
            <Select value={trip} onChange={onChangeTrip}>
              {tripList}
            </Select>
          </div>

          <div>
            <Input
              name={"name"}
              value={form.name}
              onChange={onChange}
              placeholder={"Nome"}
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
              // required
            >
              <option value="">Escolha um País</option>

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