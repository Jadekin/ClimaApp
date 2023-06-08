import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import RowText from '../../components/RowText/RowText';
import { WeatherType } from '../../Utilities/WeatherType';

function CurrentWeather() {
  const [city, setCity] = useState('Lima');
  const [temperature, setTemperature] = useState(28);
  const [feelsLikeTemperature, setFeelsLikeTemperature] = useState(32);

  return (
    <SafeAreaView style={style.wrapper}>
      <View style={style.container}>
        <Text>Current weather in {city}</Text>
        <Text style={style.temp}>{temperature}</Text>
        <Text style={style.feelsTemp}>Feels like {feelsLikeTemperature}</Text>
        <RowText
          firstText="High: 30"
          secondText="Low: 7"
        />
      </View>
      <View style={style.body}>
        <Text style={style.description}>{WeatherType['Clouds'].message}</Text>
        <Text style={style.message}>Let's go to the beack!</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  body: {
    backgroundColor: 'pink',
    padding: 20,
  },
  description: {
    fontSize: 25,
  },
  message: {
    fontSize: 20,
  },
});

export default CurrentWeather;
