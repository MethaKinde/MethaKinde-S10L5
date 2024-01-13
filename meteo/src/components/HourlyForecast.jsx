import { Row } from "react-bootstrap";
import SingleHourly from "./SingleHourly";

const HourlyForecast = () => {

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