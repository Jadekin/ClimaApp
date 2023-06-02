import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CurrentWeather from './src/components/CurrentWeather/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather/UpcomingWeather';

function App() {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      <UpcomingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
