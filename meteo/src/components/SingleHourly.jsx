import { Col } from "react-bootstrap";
import SingleWeather from "./SingleWeather";

const SingleHourly = ({hour}) => {
    return (
        <Col lg={2}>
            <div className="hour py-3 fs-5">{hour}</div>
            <SingleWeather />
        </Col>
    )
}

export default SingleHourly;