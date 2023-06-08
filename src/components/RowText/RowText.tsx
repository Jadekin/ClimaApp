import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RowTextProps {
  firstText: string;
  secondText: string;
}

const RowText = (props: RowTextProps) => {
  return (
    <View style={styles.rowContainer}>
      <Text>{props.firstText}</Text>
      <Text>{props.secondText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default RowText;
