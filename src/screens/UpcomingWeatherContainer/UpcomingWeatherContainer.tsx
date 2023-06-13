import React, { useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import UpcomingWeather from './components/UpdateWeather/UpcomingWeather';
import geolocation from '@react-native-community/geolocation';

const UpcomingWeatherContainer = () => {
  const [loading, setLoading] = useState(true);
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
