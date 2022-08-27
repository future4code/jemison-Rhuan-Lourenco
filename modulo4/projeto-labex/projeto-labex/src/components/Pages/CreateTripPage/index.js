import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthorization } from "../../hooks/useAuthorization"
import { useForm } from "../../hooks/useForm"
import axios from 'axios';
import {baseUrl} from "../../constants/constants"
import { MainContainer, Form, Input, Button, Select } from "./styled"

function CreateTripPage() {

  const navigate = useNavigate();

  const token = useAuthorization();
  
  const { form, onChange, clear } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  })

  const createTrip = (event) => {
    event.preventDefault();

    axios.post(`${baseUrl}/trips`, form, {
      headers: {
        auth: token,
      }
    })
    .then(() => {
      alert("Viagem criada com sucesso");
      clear();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const goToAdminHome = () => {
    navigate("/admin/trips/list")
  }

  return (
    <MainContainer>

      <Form>
      <p>Criar Viagem</p>
      <form onSubmit={createTrip}>
        <p>
          <Input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder={"Nome do Evento"}
            required
            title={"Mínimo de 3 caractéres"}
          />
        </p>

        <p>
          <Select
            onChange={onChange}
            name={"planet"}
            value={form.planet}
            required
          >
            <option value="" disabled>Escolha um Planeta</option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
          </Select>
        </p>

        <p>
          <Input
            name={"date"}
            value={form.date}
            onChange={onChange}
            placeholder={"Data da Viagem"}
            required
            type={"date"}
          />
        </p>

        <p>
          <Input
            name={"description"}
            value={form.description}
            onChange={onChange}
            placeholder={"Descrição da Viagem"}
            required
            pattern={"^.{30,}"}
            title={"Mínimo de 30 caractéres"}
          />
        </p>

        <p>
          <Input
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
            placeholder={"Duração em Dias"}
            required
            min={50}
            type={"number"}
            title={"Mínimo de 50 dias"}
          />
        </p>

        <Button>Criar</Button>
        <Button onClick={() => goToAdminHome(navigate)}>Voltar</Button>
      </form>
      </Form>
    </MainContainer>

  );
}

export default CreateTripPage;