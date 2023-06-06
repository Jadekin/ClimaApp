import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ItemProps {
  dt_txt: string;
  min: number;
  max: number;
  condition: string;
}

const WeatherListItem = (props: ItemProps) => {
  const { dt_txt, min, max, condition } = props;

  return (
    <View style={styles.item}>
      <Text>{dt_txt}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
      <Text>{condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: 'white',
  },
});

export default WeatherListItem
