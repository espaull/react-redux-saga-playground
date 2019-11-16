export const getWeatherState = store => store.weather;
export const weatherData = store =>
  getWeatherState(store) ? getWeatherState(store).weatherData : {};
