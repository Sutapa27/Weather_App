import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null); // null initially
  const [error, setError] = useState(null);             // separate error state

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // Helper function to parse weather data
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
    windspeed: json.wind.speed,
  });

  // Fetch weather by city
  async function getWeatherByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        setWeatherInfo(getWeatherInfo(data));
        setError(null);
      } else {
        setWeatherInfo(null);
        setError(`No city found with the name "${city}".`);
      }
    } catch (err) {
      console.error(err);
      setWeatherInfo(null);
      setError("Something went wrong. Please try again.");
    }
  }

  // Fetch weather by coordinates
  async function fetchWeatherByCoords(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        setWeatherInfo(getWeatherInfo(data));
        setError(null);
      } else {
        setWeatherInfo(null);
        setError("Unable to fetch weather for your location.");
      }
    } catch (err) {
      console.error(err);
      setWeatherInfo(null);
      setError("Something went wrong. Please try again.");
    }
  }

  // Auto-detect location on page load
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
      },
      () => {
        getWeatherByCity("Kolkata"); // fallback
      }
    );
  }, []);

  if (!weatherInfo && !error) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Weather App</h2>
      <SearchBox getWeatherByCity={getWeatherByCity} />
      <InfoBox info={weatherInfo} error={error} />
    </div>
  );
}
