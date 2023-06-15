import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <View style={styles.container}>
      <Text>{props.message}</Text>
      <Button
        title="Retry"
        onPress={props.onRetry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ErrorMessage;
