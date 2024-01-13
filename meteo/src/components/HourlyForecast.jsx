import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import SingleHourly from "./SingleHourly";

const HourlyForecast = ({ weatherData }) => {
    const [hourlyData, setHourlyData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!weatherData) return;

            const lat = weatherData.coord.lat
            const lon = weatherData.coord.lon
            const ApiKey = "809649649ed203d672f4842ba663a1c9"
            const ApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}`

            try {
                const response = await fetch(ApiUrl)
                const data = await response.json()
                setHourlyData(data.list)
                console.log(data.list)
            } catch (error) {
                console.error("Errore nella chiamata API:", error)
            }
        };

        fetchData()
    }, [weatherData]);

    if (!hourlyData) {
        return null;
    }


      const formattedTime = (dateTimeString) => {
        const parsedDate = parseISO(dateTimeString);
        return format(parsedDate, "hh:mm a");
      }

      const orario1 = hourlyData[0].dt_txt
      const formattedOrario1 = formattedTime(orario1)

      const orario2 = hourlyData[1].dt_txt
      const formattedOrario2 = formattedTime(orario2)

      const orario3 = hourlyData[2].dt_txt
      const formattedOrario3 = formattedTime(orario3)

      const orario4 = hourlyData[3].dt_txt
      const formattedOrario4 = formattedTime(orario4)

      const orario5 = hourlyData[4].dt_txt
      const formattedOrario5 = formattedTime(orario5)

    

    return (
        <div className="text-white">
            <div className="border-bottom"><h4>HOURLY FORECAST</h4></div>
            <Row className="justify-content-between text-center">
                <SingleHourly hour={formattedOrario1}/>
                <SingleHourly hour={formattedOrario2} />
                <SingleHourly hour={formattedOrario3} />
                <SingleHourly hour={formattedOrario4} />
                <SingleHourly hour={formattedOrario5} />
            </Row>
        </div>
    )
}

export default HourlyForecast;


