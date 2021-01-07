import { useState, useEffect } from 'react';

import axios from 'axios';

import { Api_Url, API_KEY, units } from '../utilis';

export const useWeatherApi = () => {

    const [url, setUrl] = useState(`${Api_Url}?city=Warsaw&units=${units}&key=${API_KEY}`);
    const [weather, setWeather] = useState([]);

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsError(false);
                const res = await axios.get(url);
                if (res.status === 204) return alertCity();
                const data = await res.data.data;
                return setWeather(data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            };
        };
        fetchData()
    }, [url]);

    const alertCity = () => {
        alert('Wrong city, I am sorry')
    };

    return [{ weather, isError }, setUrl];
};