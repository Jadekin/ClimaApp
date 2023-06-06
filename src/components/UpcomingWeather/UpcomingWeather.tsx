import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function UpcomingWeather() {
  const data = [
    {
      dt: 1661875200,
      main: {
        temp: 296.34,
        feels_like: 296.02,
        temp_min: 296.34,
        temp_max: 298.24,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 933,
        humidity: 50,
        temp_kf: -1.9,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 1.06,
        deg: 66,
        gust: 2.16,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        '1h': 0.13,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-30 16:00:00',
    },
    {
      dt: 1661878800,
      main: {
        temp: 296.31,
        feels_like: 296.07,
        temp_min: 296.2,
        temp_max: 296.31,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 932,
        humidity: 53,
        temp_kf: 0.11,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 1.58,
        deg: 103,
        gust: 3.52,
      },
      visibility: 10000,
      pop: 0.4,
      rain: {
        '1h': 0.24,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-30 17:00:00',
    },
    {
      dt: 1661882400,
      main: {
        temp: 294.94,
        feels_like: 294.74,
        temp_min: 292.84,
        temp_max: 294.94,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 931,
        humidity: 60,
        temp_kf: 2.1,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 1.97,
        deg: 157,
        gust: 3.39,
      },
      visibility: 10000,
      pop: 0.33,
      rain: {
        '1h': 0.2,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-30 18:00:00',
    },
  ];

  interface ItemProps {
    dt_txt: string;
    min: number;
    max: number;
    condition: string;
  }

  const Item = (props: ItemProps) => {
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

  interface WeatherItem {
    weather: { main: string }[];
    dt_txt: string;
    main: {
      temp_min: number;
      temp_max: number;
    };
  }

  const renderItem = ({ item }: { item: WeatherItem }) => {
    return (
      <>
        <Item
          condition={item.weather[0].main}
          dt_txt={item.dt_txt}
          min={item.main.temp_min}
          max={item.main.temp_max}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming weather</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    margin: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
  },
  separator: {
    backgroundColor: 'gray',
    height: 10,
  },
});
export default UpcomingWeather;
