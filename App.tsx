/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text>Current weather</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
});
export default App;
