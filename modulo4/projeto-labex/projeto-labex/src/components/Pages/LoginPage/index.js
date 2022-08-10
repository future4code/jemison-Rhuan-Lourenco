import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();

  const goToAdminHome = () => {
    navigate("/admin/trips/list")
  }

  const goToHome = () => {
    navigate(-1)
  }

  return (
    <section>
      <h1>LoginPage</h1>
      <button onClick={goToAdminHome} >Logar</button>
      <button onClick={goToHome} >Voltar</button>
    </section>
  );
}

export default LoginPage;