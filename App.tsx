import React from 'react';
import CurrentWeather from './src/screens/CurrentWeather/CurrentWeather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import City from './src/screens/City/City';
import UpcomingWeather from './src/screens/UpcomingWeather/UpcomingWeather';
import { city, weather, upcomingWeather } from './assets/Icons';
import { Image, StyleSheet } from 'react-native';

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
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
          component={UpcomingWeather}
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
    </NavigationContainer>
  );
}

interface AppStylesProps {
  focused: boolean;
}

const styles = (props: AppStylesProps) =>
  StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
      tintColor: props.focused ? 'tomato' : 'gray',
    },
  });

export default App;
