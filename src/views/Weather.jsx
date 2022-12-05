import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';

export default function Weather() {
  const navigate = useNavigate();

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=8b4a1cfe7b37f251dcce8b232975fd6d`,
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    };

    fetchData();
  }, [lat, long]);

  return (
    <div className="list-container">
      <WeatherCard weatherData={data} />
      <button type="button" onClick={() => navigate('/welcome')}>
        Go Back
      </button>
    </div>
  );
}
