import { all, call, put, takeEvery } from 'redux-saga/effects';
import { updateWeather } from './actions';
import axios from 'axios';

const fetchWeatherData = location => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b9dac99df31071b2047233bb6191d883`
  );
};

function* getWeatherAsync(action) {
  try {
    const { data } = yield call(fetchWeatherData, action.payload);

    yield put(updateWeather(data));
  } catch (err) {
    console.log(err);
  }
}

function* watchGetWeatherData() {
  yield takeEvery('GET_WEATHER_DATA', getWeatherAsync);
}

export default function* rootSaga() {
  yield all([watchGetWeatherData()]);
}
