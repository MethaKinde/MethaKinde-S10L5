import './SingleWeather.css';

const SingleWeather = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src="assets/vectors/04d.png" alt="double nuage" className="img-fluid2" />
            <span className='temp-hd'>22<strong>°</strong></span>
        </div>
    )
}

export default SingleWeather;