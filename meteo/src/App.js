import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Meteo from './components/Meteo';
import SearchBar from './components/SearchBar';
import TimeAndLocation from './components/TimeAndLocation';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';

function App() {

  const ApiKey = '809649649ed203d672f4842ba663a1c9'
  const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Torino&appid=${ApiKey}`

  return (
    <div className='app'>
      <Container>
        <SearchBar />
        <TimeAndLocation />
        <Meteo />
        <HourlyForecast />
        <DailyForecast />
      </Container>
    </div>
  );
}

export default App;
