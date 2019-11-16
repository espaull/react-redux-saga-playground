import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { weatherData } from '../redux/selectors';

const Weather = ({ weatherData }) => {
  return weatherData ? (
    <div>
      <h1>{weatherData.name}</h1>
      <List>
        <li>Main: {weatherData.weather[0].main}</li>
        <li>Min Temp: {weatherData.main.temp_min}&deg;</li>
        <li>Max temp: {weatherData.main.temp_max}&deg;</li>
      </List>
    </div>
  ) : (
    <div>No weather!</div>
  );
};

export default connect(state => ({ weatherData: weatherData(state) }))(Weather);

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
