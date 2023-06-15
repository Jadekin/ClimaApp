import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  ActivityIndicator,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const content = true ? (
    <ActivityIndicator
      size="small"
      color="white"
    />
  ) : (
    <Pressable
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text>{props.title}</Text>
    </Pressable>
  );

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
    color: 'white',
  },
});

export default CustomButton;
