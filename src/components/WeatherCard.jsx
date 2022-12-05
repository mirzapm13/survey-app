import React from 'react';

export default function WeatherCard({ weatherData }) {
  const toDate = (dt) => {
    const date = new Date(dt);
    return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  };

  if (!weatherData.coord) return <h1>Loading...</h1>;

  return (
    <div className="card-container">
      <div className="card-img">
        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-img" />
        <h2>
          {weatherData.main.temp}
          {' '}
          °C
        </h2>
      </div>
      <div className="card">
        <h2>
          Weather at
          {weatherData.name}
        </h2>
        <h3>Details</h3>
        <p>
          Time :
          {toDate(weatherData.dt)}
        </p>
        <p>
          Description :
          {weatherData.weather[0].description}
        </p>
      </div>
    </div>
  );
}
