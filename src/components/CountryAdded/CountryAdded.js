import React from 'react';

const CountryAdded = (props) => {
    const countries = props.country;
    let totalPopulation = 0;
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        totalPopulation = totalPopulation + country.population;
        
    }
    
    return (
        <div>
            <h2>Information about country: {countries.length}</h2>
            <h4>Total population : {totalPopulation}</h4>
        </div>
    );
};

export default CountryAdded;