import React, { useState } from 'react'

import PropTypes from 'prop-types';

import { Api_Url, API_KEY, units } from '../utilis';

import { StyleFormSearchCity, StyleUl, StyleLink } from '../styles/styleComponents/FormSearchCityCSS';

const FormSearchCity = React.memo(({ setUrl }) => {

    const [inputValue, setInputValue] = useState('');

    const getCityFromInput = () => {
        if (inputValue === '') return alert('Enter city, please');
        setUrl(`${Api_Url}?city=${inputValue}&units=${units}&key=${API_KEY}`)
        setInputValue('');
    };

    const handleSubmit = event => {
        event.preventDefault();
    };

    const handleChange = event => {
        setInputValue(event.target.value);

    };

    return (
        <StyleFormSearchCity onSubmit={handleSubmit}>
            <label className="label" htmlFor="city">Enter a city name: </label>
            <input className="input" type="text" id="city" name="city" value={inputValue} onChange={handleChange} required />
            <StyleUl>
                <li>
                    <StyleLink to="/forecast" onClick={getCityFromInput} >Search</StyleLink>
                </li>
            </StyleUl>
        </StyleFormSearchCity>
    );
});

FormSearchCity.propTypes = {
    setUrl: PropTypes.func.isRequired,
};

export default FormSearchCity;
