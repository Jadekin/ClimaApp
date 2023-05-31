import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

function App() {
  const [city, setCity] = useState('Lima');
  const [temperature, setTemperature] = useState(28);
  const [feelsLikeTemperature, setFeelsLikeTemperature] = useState(32);

  return (
    <SafeAreaView style={style.wrapper}>
      <View style={style.container}>
        <Text>Current weather in {city}</Text>
        <Text style={style.temp}>{temperature}</Text>
        <Text style={style.feelsTemp}>Feels like {feelsLikeTemperature}</Text>
        <Text>High: 28 | Low: 10</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feelsTemp: {
    fontSize: 20,
  },
});

export default App;
