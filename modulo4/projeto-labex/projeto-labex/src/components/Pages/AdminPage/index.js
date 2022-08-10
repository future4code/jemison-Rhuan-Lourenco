import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPage() {

  const navigate = useNavigate();

  const goToCreateTrip = () => {
    navigate("/admin/trips/create")
  }

  const goToTripDetails = () => {
    navigate("/admin/trips/:id")
  }

  return (
    <section>
      <h1>AdminPage</h1>
      <button onClick={goToCreateTrip} >Criar Viagem</button>
      <button onClick={goToTripDetails} >Detalhes das Viagens</button>
    </section>
  );
}

export default AdminPage;