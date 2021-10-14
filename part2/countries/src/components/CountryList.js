import Country from "./Country";
import CountryItem from "./CountryItem";

const CountryList = ({countries, handleShowClick}) => {
    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    } else if (countries.length === 1) {
        return <Country country={countries[0]}/>
    } else {
        return countries.map(country => <CountryItem handleShowClick={handleShowClick} key={country.ccn3}
                                                     country={country}/>)
    }
}

export default CountryList