import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface LoadingMessageProps {
  message?: string;
}

const LoadingMessage = (props: LoadingMessageProps) => {
  const message = props.message || 'Loading ...';
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="tomato"
      />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: 'tomato',
  },
});

export default LoadingMessage;
