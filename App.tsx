import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import City from './src/screens/City/City';
import CurrentWeather from './src/screens/CurrentWeather/CurrentWeather';

function App() {
  return (
    <View style={styles.container}>
      <CurrentWeather />
      {/* <City /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
