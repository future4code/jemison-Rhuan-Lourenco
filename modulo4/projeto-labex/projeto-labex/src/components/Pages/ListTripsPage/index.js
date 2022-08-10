import React from 'react';
import { useNavigate } from 'react-router-dom';

function ListTripsPage() {

  const navigate = useNavigate();

  const goToApplicationFormPage = () => {
    navigate('/trips/application')
  }

  const goToHome = () => {
    navigate(-1)
  }

  return (
    <section>
      <h1>ListTripsPage</h1>
      <button onClick={goToApplicationFormPage}>Inscrever-se</button>
      <button onClick={goToHome}>Home</button>
    </section>
  );
}

export default ListTripsPage;