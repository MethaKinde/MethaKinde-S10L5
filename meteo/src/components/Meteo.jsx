import './Meteo.css'
import { Row, Col } from "react-bootstrap";
import { ThermometerHalf } from 'react-bootstrap-icons';
import { Moisture } from 'react-bootstrap-icons';
import { Wind } from 'react-bootstrap-icons';
import { Sunrise, Sunset } from 'react-bootstrap-icons';
import { ArrowUpShort, ArrowDownShort } from 'react-bootstrap-icons';

const Meteo = () => {
    /* const ApiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchQuery}?unitGroup=metric&key=WDNMGN63HV6M5DPK7DDEPVRUY&contentType=json`

    useEffect(() => {
        fetchMeteo()
    }, [])

    const fetchMeteo = async () => {
        try {
           const response1 = await fetch(ApiUrl, {
                "method": "GET",
                "headers": {
                }
            })

            const data1 = await response1.json()

            console.log(response1)
            console.log(data1)
               

        } catch (err) {
            console.log("An error has occurred:", err)
        }
    } */

    return (
        <>
            <Row className="text-center justify-content-center pt-4">
                <img src="assets/vectors/03d.png" alt="nuvola" className="img-fluid"/>
            </Row>
            <Row className='text-center justify-content-center align-items-center pt-5'>
                <Col md={4} className='text-info fs-4'>
                    <span className='description-weather'>Clouds</span>
                </Col>
                <Col md={4} className='temp text-white'>
                    23°
                </Col>
                <Col md={4} className='details text-white'>
                    <Col xs={12} className='fs-5 pb-2'>
                        <ThermometerHalf size={30}/>
                        Real fell: <span className='fells-like'>20</span>°
                    </Col>
                    <Col xs={12} className='fs-5 pb-2'>
                        <Moisture size={30}
                        className='me-2'/>
                        Humidity: <span className='humidity'>64</span>%
                    </Col>
                    <Col xs={12} className='fs-5'>
                        <Wind size={30} className='me-2'/>
                        Wind: <span className='wind-speed'>10 </span>km/h
                    </Col>
                </Col>
            </Row>
            <div className='description-main text-white text-center fs-5 pt-3 pb-5 d-flex'>
                <Col>
                    <Sunrise size={30} className='me-2'/>
                    Rise: <span>06:50 AM</span>
                </Col>
                <Col>|</Col>
                <Col>
                    <Sunset size={30} className='me-2'/>
                    Set: <span>08:26 PM</span>
                </Col>
                <Col>|</Col>
                <Col>
                    <ArrowUpShort size={30} className='me-2'/>
                    Max: <span className='max-temp'>25</span>°
                </Col>
                <Col>|</Col>
                <Col>
                    <ArrowDownShort size={30} className='me-2'/>
                    Min: <span>18</span>°
                </Col>
                
                
            </div>
        </>
    )
}

export default Meteo;