import React, { useState, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { StyleApplication } from '../styles/styleComponents/AppWeatherCSS';

import { Api_Url, API_KEY, units } from '../utilis';

import { useWeatherApi } from '../customHookWeatherApi/useWeatherApi';

const FormSearchCity = lazy(() => import('./FormSearchCity'));
const Wish = lazy(() => import('./Wish'));
const WeatherList = lazy(() => import('./WeatherList'));
const NotFound = lazy(() => import('./NotFound'));

const AppWeather = () => {
    
    const [inputValue, setInputValue] = useState('');

    const [{ weather, isError }, setUrl] = useWeatherApi();

    const getInputValue = value => {
        setInputValue(value);
    };

    const getCityFromInput = () => {
        if (inputValue === '') return alert('Enter city, please');
        setUrl(`${Api_Url}?city=${inputValue}&units=${units}&key=${API_KEY}`)
        setInputValue('');
    };

    return (
        <StyleApplication>
            <h1>Weather</h1>
            <FormSearchCity city={inputValue} getInputValue={getInputValue} getCityFromInput={getCityFromInput} />
            {isError && <div>Something went wrong...</div>}
            <Switch>
                <Route exact path='/weather' component={() => <Wish />} />
                <Route path='/forecast' component={() => <WeatherList weather={weather} />} />
                <Route component={NotFound} />
            </Switch>
        </StyleApplication>
    );
};

export default AppWeather;