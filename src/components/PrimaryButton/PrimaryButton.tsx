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
  const content = props.loading ? (
    <ActivityIndicator
      size="small"
      color="white"
    />
  ) : (
    <Pressable
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );

  const style = props.disabled ? styles.disabled : styles.container;

  return <View style={style}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
  disabled: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
});

export default CustomButton;
