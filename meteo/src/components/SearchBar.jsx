import './SearchBar.css'
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";

const SearchBar = ({ onSearchChange }) => {

    const [search, setSearch] = useState('')

    const handleOnChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSearchClick = () => {
        // Passa il valore dell'input solo quando viene cliccato l'icona Search
        onSearchChange(search);
    }

    return (
        <Row className="justify-content-center pt-5">
            <Col lg={4}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search for city"
                        aria-label="SearchBar"
                        aria-describedby="basic-addon1"
                        size="lg"
                        className="custom-form-label cityInput"
                        value={search}
                        onChange={handleOnChange}
                        
                    />
                    <InputGroup.Text id="basic-addon1" onClick={handleSearchClick}>
                        <Search />
                    </InputGroup.Text>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default SearchBar;