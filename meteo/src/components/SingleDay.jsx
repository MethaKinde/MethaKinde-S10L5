import { Col } from "react-bootstrap";
import SingleWeather from "./SingleWeather";

const SingleDay = ({ day }) => {
    return (
        <Col lg={2}>
            <div className="day py-3 fs-5">{day}</div>
            <SingleWeather />
        </Col>
    )
}

export default SingleDay;