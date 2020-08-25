import React from 'react';

const Country = (props) => {
    // console.log(props);
    const {name, population, region, flag}= props.country;
    const flagStyle = {height: '50px'}
    return (
        <div>
            <h4>This is : {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population : {population}</p>
            <p><small>Region : {region}</small></p>
        </div>
    );
};

export default Country;