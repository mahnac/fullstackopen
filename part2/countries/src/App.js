import {useEffect, useState} from "react"
import axios from "axios"
import CountryList from "./components/CountryList"


const App = () => {
    const [countries, setCountries] = useState([])
    const [query, setQuery] = useState('')

    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    }
    const handleShowClick = (event) => {
        setQuery(event.target.value)
    }

    const fetchCountries = () => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then(response => {
                console.log(response)
                const countries = response.data
                setCountries(countries)
            })
    }
    useEffect(fetchCountries, [])

    const filterCountriesByName = name => {
        const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(name.toLowerCase()))
        return filteredCountries
    }
    const countriesToShow = filterCountriesByName(query)

    return (
        <div>
            find countries: <input onChange={handleQueryChange} type="text"/>
            <CountryList handleShowClick={handleShowClick} countries={countriesToShow}/>
        </div>
    )
}

export default App;
