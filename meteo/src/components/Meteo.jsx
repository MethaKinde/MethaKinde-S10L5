import './Meteo.css'
import { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import { ThermometerHalf } from 'react-bootstrap-icons';
import { Moisture } from 'react-bootstrap-icons';
import { Wind } from 'react-bootstrap-icons';
import { Sunrise, Sunset } from 'react-bootstrap-icons';
import { ArrowUpShort, ArrowDownShort } from 'react-bootstrap-icons';

const Meteo = ({ weatherData }) => {
    const [temp, setTemp] = useState(null)
    const [realFell, setRealFell] = useState('')
    const [tempMax, setTempMax] = useState('')
    const [tempMin, setTempMin] = useState('')

    useEffect(() => {
        if (!weatherData) {

            return
        }

        const temperatureKelvin = weatherData.main.temp;
        const temperatureCelsius = temperatureKelvin - 273.15;
        setTemp(Math.floor(temperatureCelsius))

        const tempRFKelvin = weatherData.main.feels_like
        const tempRFCelsius = tempRFKelvin - 273.15
        setRealFell(Math.floor(tempRFCelsius))

        const tempMaxKelvin = weatherData.main.temp_max
        const tempMaxCelsius = tempMaxKelvin - 273.15
        setTempMax(Math.floor(tempMaxCelsius))

        const tempMinKelvin = weatherData.main.temp_min
        const tempMinCelsius = tempMinKelvin - 273.15
        setTempMin(Math.floor(tempMinCelsius))

    }, [weatherData]);

    if (!weatherData) {
        return null
    }

    const description = weatherData.weather[0].description
    const humidity = weatherData.main.humidity
    const imageW = weatherData.weather[0].icon
    const windSpeed = weatherData.wind.speed

    //formattazione dell'ora fornita dall'Api da Formato millisecondi a HH:MM AM/PM
    function formatEpochTime(epochTimestamp) {
        const date = new Date(epochTimestamp * 1000); // Moltiplica per 1000 per convertire da secondi a millisecondi
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Converti l'ora da formato 24 ore a formato 12 ore
      
        const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
        return formattedTime;
      }

      const epochTimesSR = weatherData.sys.sunrise
      const formattedTimeSR = formatEpochTime(epochTimesSR)
      const epochTimesST = weatherData.sys.sunset
      const formattedTimeST = formatEpochTime(epochTimesST)

    return (
        <>
            <Row className="text-center justify-content-center pt-4">
                <img src={`/assets/vectors/${imageW}.png`} alt="nuvola" className="img-fluid" />
            </Row>
            <Row className='text-center justify-content-center align-items-center pt-5'>
                <Col md={4} className='text-info fs-4'>
                    <span className='description-weather'>{description}</span>
                </Col>
                <Col md={4} className='temp text-white'>
                    {temp}°
                </Col>
                <Col md={4} className='details text-white'>
                    <Col xs={12} className='fs-5 pb-2'>
                        <ThermometerHalf size={30} />
                        Real fell: <span className='fells-like'>{realFell}</span>°
                    </Col>
                    <Col xs={12} className='fs-5 pb-2'>
                        <Moisture size={30}
                            className='me-2' />
                        Humidity: <span className='humidity'>{humidity}</span>%
                    </Col>
                    <Col xs={12} className='fs-5'>
                        <Wind size={30} className='me-2' />
                        Wind: <span className='wind-speed'>{windSpeed} </span>km/h
                    </Col>
                </Col>
            </Row>
            <div className='description-main text-white text-center fs-5 pt-3 pb-5 d-flex'>
                <Col>
                    <Sunrise size={30} className='me-2' />
                    Rise: <span>{formattedTimeSR}</span>
                </Col>
                <Col>|</Col>
                <Col>
                    <Sunset size={30} className='me-2' />
                    Set: <span>{formattedTimeST}</span>
                </Col>
                <Col>|</Col>
                <Col>
                    <ArrowUpShort size={30} className='me-2' />
                    Max: <span className='max-temp'>{tempMax}</span>°
                </Col>
                <Col>|</Col>
                <Col>
                    <ArrowDownShort size={30} className='me-2' />
                    Min: <span>{tempMin}</span>°
                </Col>


            </div>
        </>
    )
}

export default Meteo;