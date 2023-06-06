import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import UpcomingWeather from './src/screens/UpcomingWeather/UpcomingWeather';
import City from './src/screens/City/City';

function App() {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      <City />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
