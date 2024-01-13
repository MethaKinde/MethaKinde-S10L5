import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Meteo from './components/Meteo';
import SearchBar from './components/SearchBar';
import TimeAndLocation from './components/TimeAndLocation';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';

function App() {

  const ApiKey = '809649649ed203d672f4842ba663a1c9'


  const [searchValue, setSearchValue] = useState('')
  const [weatherData, setWeatherData] = useState(null) // Nuovo stato per salvare i dati della chiamata API

  const handleSearchChange = async (value) => {
    setSearchValue(value);

    if (value === '') {
      return 0;
    }

    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${ApiKey}`;

    try {
      const response = await fetch(ApiUrl)
      const data = await response.json()
      console.log(data)

      setWeatherData(data)
    } catch (error) {
      console.error('Errore nella chiamata API:', error)

    }
  };

  return (
    <div className='app'>
      <Container>
        <SearchBar onSearchChange={handleSearchChange} />
        <TimeAndLocation weatherData={weatherData}/>
        <Meteo weatherData={weatherData}/>
        <HourlyForecast weatherData={weatherData}/>
        <DailyForecast />
      </Container>
    </div>
  );
}

export default App;
