import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import { MainContainer, Form, Input, Button } from '../LoginPage/styled';

function LoginPage() {

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token != null) {
      goToAdminHome(navigate);
    }
  }, []);

  const navigate = useNavigate();

  const goToAdminHome = () => {
    navigate("/admin/trips/list")
  }

  const goToHome = () => {
    navigate(-1)
  }

  const { form, onChange, clear } = useForm({
    email: "",
    password: "",
  });

  const signIn = (event) => {
    event.preventDefault();

    axios.post (`${baseUrl}/login`, form)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToAdminHome(navigate);
    })
    .catch(() => {
      alert("Você não tem permissão");
      clear();
    })
  }

  return (
    <MainContainer>
      <Form>
        <p>Login</p>
        <form onSubmit={signIn}>

          <div>
            <Input
              name={"email"}
              value={form.email}
              onChange={onChange}
              placeholder={"E-mail"}
              required
              type={"email"}
            />
          </div>

          <div>
            <Input
              name={"password"}
              value={form.password}
              onChange={onChange}
              placeholder={"Senha"}
              required
              type={"password"}
            />
          </div>

          <Button>Logar</Button>
          <Button onClick={goToHome} >Voltar</Button>
        </form>
      </Form>
    </MainContainer>
  );
}

export default LoginPage;