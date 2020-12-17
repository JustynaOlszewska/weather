import React from 'react'

import PropTypes from 'prop-types';

import { StyleFormSearchCity, StyleUl, StyleLink } from '../styles/styleComponents/FormSearchCityCSS';

const FormSearchCity = ({ city, getInputValue, getCityFromInput }) => {

    const handleSubmit = event => {
        event.preventDefault();
    };

    const handleChange = event => {
        getInputValue(event.target.value);
    };

    const handleClick = () => {
        getCityFromInput();
    };

    return (
        <StyleFormSearchCity onSubmit={handleSubmit}>
            <label className="label" htmlFor="city">Enter a city name: </label>
            <input className="input" type="text" id="city" name="city" value={city} onChange={handleChange} required />
            <StyleUl>
                <li>
                    <StyleLink to="/forecast" onClick={handleClick} >Search</StyleLink>
                </li>
            </StyleUl>
        </StyleFormSearchCity>
    );
};

FormSearchCity.propTypes = {
    city: PropTypes.string.isRequired,
    getInputValue: PropTypes.func.isRequired,
    getCityFromInput: PropTypes.func,
};

export default FormSearchCity;
