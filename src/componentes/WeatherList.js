import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import PropTypes from 'prop-types';

import { StyleLink, StyleArticle } from '../styles/styleComponents/WeatherListCSS';

const WeatherListDetails = lazy(() => import('../componentes/WeatherListDetails'));

const WeatherList = React.memo(({ weather }) => {

    const { url, path } = useRouteMatch();

    const { city_name, temp } = weather[0];
    const { icon, description } = weather[0].weather;

    return (

        <StyleArticle>

            <h1>{city_name}</h1>
            <img src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt="weather" />
            <p>{description}</p>
            <p>{temp} &#8451;</p>
            <StyleLink to={`${url}/details`}>MoreDetails</StyleLink>
            <Switch>
                <Route path={`${path}/details`} component={() => <WeatherListDetails weather={weather} />} />
            </Switch>
        </StyleArticle>
    );
});

WeatherList.propTypes = {
    weather: PropTypes.array.isRequired,
};

export default WeatherList;