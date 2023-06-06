import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';

const City = () => {
  const { container, imageLayout, cityName, countryName, titles, sun } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../../assets/cloudbackground.jpg')}
        style={imageLayout}>
        <Text style={[cityName, titles]}>Lima</Text>
        <Text style={[countryName, titles]}>Peru</Text>
        <View>
          <Text style={titles}>Population: 12MM</Text>
        </View>
        <View style={sun}>
          <Text style={titles}>Sunrise time: 6am</Text>
          <Text style={titles}>Sunset: 6pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  titles: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  cityName: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  countryName: {
    fontSize: 20,
  },
  sun: {
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center',
  },
});

export default City;
