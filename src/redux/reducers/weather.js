import { UPDATE_WEATHER } from '../actionTypes';

const initialState = {
  weatherData: null,
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WEATHER: {
      return {
        ...state,
        weatherData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default weather;
