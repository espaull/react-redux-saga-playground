import React, { useState } from 'react';
import { getWeatherData } from '../redux/actions';
import { connect } from 'react-redux';

const Saga = ({ getWeatherData }) => {
  const [location, setLocation] = useState('London');

  const updateLocation = e => {
    setLocation(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    getWeatherData(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={location} onChange={updateLocation} />
      <button type="submit">Click</button>
    </form>
  );
};

export default connect(null, {
  getWeatherData,
})(Saga);
