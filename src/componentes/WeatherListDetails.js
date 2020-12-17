import React from 'react';

import { StyleArticle, StyleLink } from '../styles/styleComponents/WeatherListDetailsCSS';

import PropTypes from 'prop-types';


const WeatherListDetails = ({ weather }) => {

    const { city_name, clouds, snow, sunset, sunrise, ob_time, wind_spd, wind_cdir_full } = weather[0];

    return (
        <StyleArticle>
            <h1>{city_name}</h1>
            <p>clouds: {clouds} %</p>
            <p>snow: {snow} mm</p>
            <p>sunset: {sunset} </p>
            <p>sunrise: {sunrise} </p>
            <p>wind speed: {Math.round(parseFloat(wind_spd))} km/h</p>
            <p>wind direction: {wind_cdir_full} </p>
            <p>The last time data was updated: {ob_time}</p>
            <StyleLink exact to='/forecast'>Close</StyleLink>
        </StyleArticle >
    );
};

WeatherListDetails.propTypes = {
    weather: PropTypes.array.isRequired,
};

export default WeatherListDetails;