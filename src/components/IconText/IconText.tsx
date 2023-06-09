import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface IconTextProps {
  icon: any;
  title: string;
}

const IconText = (props: IconTextProps) => {
  const { container, icon, title } = styles;
  return (
    <View style={container}>
      <Image
        style={icon}
        source={props.icon}
      />
      <Text style={title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  title: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },
});

export default IconText;
