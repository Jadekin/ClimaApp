import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';

interface TabScreenProps {
  name: string;
  icon: any;
  component: React.ComponentType;
}

// Testing: Open question, how to add a component that is a TabScreen in the navigator. 
const TabdScreen = (props: TabScreenProps) => {
  const Tab = createBottomTabNavigator();
  const { name, icon, component } = props;

  return (
    <Tab.Screen
      name={name}
      component={component}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles({ focused }).icon}
            source={icon}
          />
        ),
      }}
    />
  );
};

interface TabScreenStylesProps {
  focused: boolean;
}

const styles = (props: TabScreenStylesProps) =>
  StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
      tintColor: props.focused ? 'tomato' : 'gray',
    },
  });

export default TabdScreen;
