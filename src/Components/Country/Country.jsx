import { useState } from "react";

const Country = ({country, handleCountVisitedCountry}) => {
    // console.log(country.area.area);
    const [visit, setVisit] = useState(false)
    const [count, setCount] = useState(0)
    

    const handleVist = () => {
        setVisit(!visit);
        if(setVisit === "true"){
            setCount(count + 1)
        }else{
            setCount()
        }
        handleCountVisitedCountry(country)
    }
    return (

        <div className={`${visit ? "bg-green-700 my-3 border-2 rounded-2xl p-2 w-70" : "my-3 border-2 rounded-2xl p-2 w-70"}`}>
            <div className= "mb-5 rounded-2xl flex flex-col justify-between h-fit">
                    <img src={country.flags.flags.png} alt={country.flags.flags.alt} 
                    className="w-full h-full rounded-md"/>
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{country.name.common}</h3>
                    <h3 className="text-xl font-semibold">Area: {country.area.area} km<sup>2</sup></h3>
                    <button className={`${visit ? "p-2 bg-white text-xl font-bold cursor-pointer text-purple-500" : "p-2 bg-purple-500 text-xl font-bold cursor-pointer"}`} onClick={handleVist}>
                        {visit ? "Visited" : "Not Visited"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Country;