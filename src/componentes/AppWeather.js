import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { StyleApplication } from '../styles/styleComponents/AppWeatherCSS';

import { useWeatherApi } from '../customHookWeatherApi/useWeatherApi';

const FormSearchCity = lazy(() => import('./FormSearchCity'));
const Wish = lazy(() => import('./Wish'));
const WeatherList = lazy(() => import('./WeatherList'));
const NotFound = lazy(() => import('./NotFound'));

const AppWeather = () => {

    const [{ weather, isError }, setUrl] = useWeatherApi();

    return (
        <StyleApplication>
            <h1>Weather</h1>
            <FormSearchCity setUrl={setUrl} />
            {isError && <div>Something went wrong...</div>}
            <Switch>
                <Route exact path='/weather' component={() => <Wish />} />
                <Route path='/forecast'>
                    {weather.length && <WeatherList weather={weather} />}
                </Route>
                <Route component={NotFound} />
            </Switch>
        </StyleApplication>
    );
};

export default AppWeather;