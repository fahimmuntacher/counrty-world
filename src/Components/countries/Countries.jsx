import { use, useState } from "react";
import Country from "../Country/Country";
const Countries = ({countryPromise}) => {
    const countriesData = use(countryPromise);
    const countries = countriesData.countries;
    
    const [visitedCountry, setVisitedCountry] = useState([]);

    function handleCountVisitedCountry(country){
        console.log(country);

    }
    return (
        <>
        <div className="grid grid-cols-5 gap-2 place-items-center">
            {
                countries.map(country => <Country key={country.cca3.cca3} country = {country}
                    handleCountVisitedCountry = {handleCountVisitedCountry}
                ></Country>)
            }
        </div>
        </>
    );
};

export default Countries;