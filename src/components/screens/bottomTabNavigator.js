import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RestaurantScreen from './RestaurantScreen';
import MapScreen from './MapScreen';
import colors from '../../data/colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        style: {
          heigh: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: colors.primary,
      }}>
      <Tab.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="fast-food-outline" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FeatherIcon name="map-pin" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
