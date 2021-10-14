import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
    const [countries, setCountries] = useState([])
    const [query, setQuery] = useState('')

    const handleQueryChange = (event) => {
        setQuery(event.target.value.toLowerCase())
    }

    const fetchCountries = () => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then(response => {
                console.log(response)
                const countries = response.data;
                setCountries(countries)
            })
    }

    useEffect(fetchCountries, [])

    // console.log(countries)

    function filterCountriesByName() {
        return countries.filter(country => country.name.common.toLowerCase().includes(query));
    }

    const countriesFound = filterCountriesByName()

    const displayCountries = (countries) => {
        if (countries.length > 10) {
            return <div>Too many matches, specify another filter</div>
        } else if (countries.length === 1) {
            return <Country country={countries[0]}/>
        } else {
            return countries.map(country => <div>{country.name.common}</div>)
        }
    }

    return (
        <div>
            find countries: <input onChange={handleQueryChange} type="text"/>
            {
                displayCountries(countriesFound)
            }
        </div>
    )
}

const Country = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {Object.entries(country.languages).map(([key, value]) => <li key={key}>{value}</li>)}
            </ul>
            <img width="200px" src={country.flags.svg} alt="blank"/>
        </div>
    )
}

export default App;
