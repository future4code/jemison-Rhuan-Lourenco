import React from 'react';
import {useNavigate} from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login")
  }

  const goToListTripsPage = () => {
    navigate("/trips/list")
  }

  return (
    <section>
      <h1>HomePage</h1>
      <button onClick={goToListTripsPage} >Lista de Viagens</button>
      <button onClick={goToLoginPage} >Área ADM</button>
    </section>
  );
}

export default HomePage;