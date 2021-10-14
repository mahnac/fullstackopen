import Weather from "./Weather";

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
            <Weather capital={country.capital[0]}/>
        </div>
    )
}

export default Country