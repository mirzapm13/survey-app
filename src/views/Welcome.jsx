import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome To Weather App</h1>
      <button type="button" onClick={() => navigate('/weather')}>
        Check Weather
      </button>
    </>
  );
}
