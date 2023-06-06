import React from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
  Image,
} from 'react-native';
import IconText from '../../components/IconText/IconText';

const City = () => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    titles,
    sunRiseSet,
    icon,
    population,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../../assets/cloudbackground.jpg')}
        style={imageLayout}>
        <Text style={[cityName, titles]}>Lima</Text>
        <Text style={[countryName, titles]}>Peru</Text>
        <IconText
          title="12MM"
          iconName="group"
        />
        <IconText
          title="6am"
          iconName="sunrise"
        />
        <IconText
          title="6pm"
          iconName="sunset"
        />
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
  population: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sunRiseSet: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
});

export default City;
