import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchButton from './Button';
import "./SearchBox.css";

export default function SearchBox({ getWeatherByCity }) {
  const [city, setCity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getWeatherByCity(city);
    setCity("");
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <br /><br />
        <SearchButton />
      </form>
    </div>
  );
}
