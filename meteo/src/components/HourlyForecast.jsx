import { Row } from "react-bootstrap";
import SingleHourly from "./SingleHourly";

const HourlyForecast = ({ weatherData }) => {
    if (!weatherData) {
        return null;
    }


    const lat = weatherData.coord.lat
    const lon = weatherData.coord.lon

    const ApiKey = '809649649ed203d672f4842ba663a1c9'

    const ApiUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${ApiKey}`

    try {
        const response = fetch(ApiUrl)
        const data = response.json()
        console.log(data)
  
      } catch (error) {
        console.error('Errore nella chiamata API:', error)
  
      }

    return (
        <div className="text-white">
            <div className="border-bottom"><h4>HOURLY FORECAST</h4></div>
            <Row className="justify-content-between text-center">
                <SingleHourly hour='12:00 PM'/>
                <SingleHourly hour='01:00 PM'/>
                <SingleHourly hour='12:00 PM'/>
                <SingleHourly hour='01:00 PM'/>
                <SingleHourly hour='01:00 PM'/>
            </Row>
        </div>
    )
}

export default HourlyForecast;