import React from "react";
import { Row } from "react-bootstrap";

const TimeAndLocation = ({ weatherData }) => {
    if (!weatherData) {
        return null;
    }

    // Formatta la data
    const timestamp = weatherData.dt * 1000; // Converte il timestamp in millisecondi
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(timestamp).toLocaleDateString('en-US', dateOptions);

    return (
        <Row className="justify-content-center text-center">
            <p className="full-date fs-3 text-white fw-light pb-3">
                {formattedDate} | Local time: {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}
            </p>
            <p className="city-country fs-1 text-white fw-bold">
                {weatherData.name}, {weatherData.sys.country}
            </p>
        </Row>
    )
}

export default TimeAndLocation;