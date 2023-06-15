import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
}

const CustomButton = (props: CustomButtonProps) => {
    return (
        <Button title="Click me" onPress={() => {}} />
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomButton;