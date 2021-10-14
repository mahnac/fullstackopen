import axios from "axios";
import {useEffect, useState} from "react";

const Weather = ({capital}) => {
    const [weather, setWeather] = useState({})
    const [loading, setLoading] = useState(true);
    const [icon, setIcon] = useState(null)
    const [error, setError] = useState(null);

    const apiKey = process.env.REACT_APP_API_KEY

    const fetchWeather = () => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`)
            .then(response => {
                if (!response.success) throw Error("There was an error.")
                setWeather(response.data.current)
                setIcon(response.data.current.weather_icons[0])
            })
            .catch((error) => {
                console.error("Error fetching weather data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }
    useEffect(fetchWeather, [apiKey, capital])

    if (loading) return <div>Loading weather...</div>
    if (error) return <div>Error loading weather...</div>

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>temperature: {weather.temperature} Celsius</p>
            <img src={icon} alt="weather icon"/>
            <p>wind: {weather.wind_speed} km/h direction {weather.wind_dir}</p>
        </div>
    );
};

export default Weather;