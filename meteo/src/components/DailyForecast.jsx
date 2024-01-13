import { Row } from "react-bootstrap";
import SingleDay from "./SingleDay";

const DailyForecast = () => {

    return(
        <div className="text-white pt-4">
            <div className="border-bottom"><h4>DAILY FORECAST</h4></div>
            <Row className="justify-content-between text-center">
                <SingleDay day="Wed"/>
                <SingleDay day="Thu"/>
                <SingleDay day="Fri"/>
                <SingleDay day="Sat"/>
                <SingleDay day="Sun"/>
            </Row>
        </div>
    )
}

export default DailyForecast;