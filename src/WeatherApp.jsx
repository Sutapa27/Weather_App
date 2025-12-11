import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeatherInfo = (json) => ({
    city: json.name,
    temp: json.main.temp,
    tempMin: json.main.temp_min,
    tempMax: json.main.temp_max,
    feelsLike: json.main.feels_like,
    humidity: json.main.humidity,
    pressure: json.main.pressure,
    description: json.weather[0].description.toLowerCase(),
    weatherIcon: json.weather[0].icon,
    sunrise: json.sys.sunrise,
    sunset: json.sys.sunset,
    visibility: json.visibility,
    windspeed: json.wind.speed
  });

  
  async function getWeatherByCity(city) {
    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();
    setWeatherInfo(getWeatherInfo(data));
  }


  async function fetchWeatherByCoords(lat, lon) {
    const url =
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();
    setWeatherInfo(getWeatherInfo(data));
  }

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
      },
      () => {
        getWeatherByCity("Kolkata");
      }
    );
  }, []);

  if (!weatherInfo) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Weather App</h2>
      <SearchBox getWeatherByCity={getWeatherByCity} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
