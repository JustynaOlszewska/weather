import React, { useState, useEffect, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { StyleApplication } from '../styles/styleComponents/AppWeatherCSS';

import axios from 'axios';

import { Api_Url, API_KEY, units } from '../utilis';

const FormSearchCity = lazy(() => import('./FormSearchCity'));
const Wish = lazy(() => import('./Wish'));
const WeatherList = lazy(() => import('./WeatherList'));
const NotFound = lazy(() => import('./NotFound'));

const AppWeather = () => {

    const [weather, setWeather] = useState([]);

    const [inputValue, setInputValue] = useState('');
    const [cityFromInput, setCityFromInput] = useState('');

    useEffect(() => {

        const url = `${Api_Url}?city=${cityFromInput ? cityFromInput : 'Warszawa'}&units=${units}&key=${API_KEY}`;
        axios.get(url)
            .then(res => {
                if (res.status === 204) return alertCity();
                return setWeather(res.data.data);
            })
            .catch(err => console.log(err));

    }, [cityFromInput]);

    const alertCity = () => {
        alert('Wrong city, I am sorry')
    };

    const getInputValue = value => {
        setInputValue(value);
    };

    const getCityFromInput = () => {
        if (inputValue === '') return alert('Enter city, please');
        setCityFromInput(inputValue);
        setInputValue('');
    };

    return (
        <StyleApplication>
            <h1>Weather</h1>
            <FormSearchCity city={inputValue} getInputValue={getInputValue} getCityFromInput={getCityFromInput} />
            <Switch>
                <Route exact path='/weather' component={() => <Wish />} />
                <Route path='/forecast' component={() => <WeatherList weather={weather} />} />
                <Route component={NotFound} />
            </Switch>
        </StyleApplication>
    );
};

export default AppWeather;