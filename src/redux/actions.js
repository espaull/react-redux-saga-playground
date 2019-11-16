import { GET_WEATHER_DATA, UPDATE_WEATHER } from './actionTypes';

export const getWeatherData = location => ({
  type: GET_WEATHER_DATA,
  payload: location,
});

export const updateWeather = data => ({
  type: UPDATE_WEATHER,
  payload: data,
});
