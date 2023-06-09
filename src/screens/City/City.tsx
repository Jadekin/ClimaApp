import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import IconText from '../../components/IconText/IconText';
import { cloudBackground } from '../../../assets/Backgrounds';
import { group, sunset } from '../../../assets/Icons';

const City = () => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    titles,
    sunriseSunset,
  } = styles;

  const [image, setImage] = useState(null);

  useEffect(() => {
    const sunrise = require('../../../assets/Icons/sunrise.png');
    setImage(sunrise);
    // check assing to one of ou instance variables.
  });

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={cloudBackground}
        style={imageLayout}>
        <Text style={[cityName, titles]}>Lima</Text>
        <Text style={[countryName, titles]}>Peru</Text>
        {/* <IconText
          title="12MM"
          icon={group}
        /> */}
        <View style={sunriseSunset}>
          <IconText
            title="6am"
            icon={image}
          />
          <IconText
            title="6pm"
            icon={sunset}
          />
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
  sunriseSunset: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
  },
});

export default City;
