import axios from 'axios';
import React, { useEffect } from 'react';
import { baseUrl } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import { MainContainer, Form, Input, Button } from '../LoginPage/styled';
import { usePages } from '../../hooks/usePages'

function LoginPage() {

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token != null) {
      goToAdminHome();
    }
  }, []);

  const {goToAdminHome, goToHomePage} = usePages();

  const { form, onChange, clear } = useForm({
    email: "",
    password: "",
  });

  const signIn = (event) => {
    event.preventDefault();

    axios.post (`${baseUrl}/login`, form)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToAdminHome();
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
          <Button onClick={goToHomePage} >Voltar</Button>
        </form>
      </Form>
    </MainContainer>
  );
}

export default LoginPage;