import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';
import City from '../../screens/City/City';
import UpcomingWeather from '../../screens/UpcomingWeatherContainer/components/UpdateWeather/UpcomingWeather';
import CurrentWeather from '../../screens/CurrentWeather/CurrentWeather';
import { city, weather, upcomingWeather } from '../../../assets/Icons';
import UpcomingWeatherContainer from '../../screens/UpcomingWeatherContainer/UpcomingWeatherContainer';

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name={'Current Weather'}
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles({ focused }).icon}
              source={weather}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Upcoming'}
        component={UpcomingWeatherContainer}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles({ focused }).icon}
              source={upcomingWeather}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles({ focused }).icon}
              source={city}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

interface TabsStylesProps {
  focused: boolean;
}

const styles = (props: TabsStylesProps) =>
  StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
      tintColor: props.focused ? 'tomato' : 'gray',
    },
  });

export default Tabs;
