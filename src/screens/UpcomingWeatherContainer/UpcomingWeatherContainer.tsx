import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import UpcomingWeather from './components/UpdateWeather/UpcomingWeather';
import Geolocation from '@react-native-community/geolocation';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const UpcomingWeatherContainer = () => {
  const [loading, setLoading] = useState(false);
  const [location] = useState(null);
  const [error, setError] = useState(true);

  useEffect(() => {});
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={'large'}
          color={'tomato'}
        />
      </View>
    );
  }

  if (error) {
    return (
      <ErrorMessage
        message="Something went wrong"
        onRetry={here}
      />
    );
  }

  function here() {
    console.log('here');
  }

  return <UpcomingWeather />;
  // load API
  // show error
  // show UpcomingWeather
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default UpcomingWeatherContainer;
