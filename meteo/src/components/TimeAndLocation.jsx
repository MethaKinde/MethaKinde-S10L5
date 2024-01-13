import React from "react";
import { Row } from "react-bootstrap";

const TimeAndLocation = () => {
    return (
        <Row className="justify-content-center text-center">
            <p className="fs-3 text-white fw-light pb-3">
                Tuesday, 31 May 2023 | Local time: 12:46 PM
            </p>
            <p className="fs-1 text-white fw-bold">
                Turin, IT
            </p>
        </Row>
    )
}

export default TimeAndLocation;