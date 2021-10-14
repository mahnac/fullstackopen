const CountryItem = ({country, handleShowClick}) => {
    const countryName = country.name.common;
    return (
        <div>{countryName}
            <button value={countryName} onClick={handleShowClick}>show</button>
        </div>
    );
};

export default CountryItem