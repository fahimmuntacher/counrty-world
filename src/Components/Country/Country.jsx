
const Country = ({country}) => {
    // console.log(country);
    return (
        <div>
            <div className='flex gap-2.5 items-center my-3 border-2 rounded-2xl w-70 h-40 p-5'>
                <div className="object-contain">
                    <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                </div>
                <h3 className="text-2xl font-bold">{country.name.common}</h3>
            </div>
        </div>
    );
};

export default Country;