import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

function UpcomingWeather() {
  const data = [
    {
      id: '01',
      message: 'Karen',
    },
    {
      id: '02',
      message: 'Karen',
    },
    {
      id: '03',
      message: 'Karen',
    },
    {
      id: '04',
      message: 'Karen',
    },
  ];

  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming weather</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.message} />}
        keyExtractor={(item) => item.id}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default UpcomingWeather;
