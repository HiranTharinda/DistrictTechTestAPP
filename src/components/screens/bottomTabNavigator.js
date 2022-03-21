import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RestaurantScreen from './restaurantScreen';
import MapScreen from './mapScreen';
import colors from '../../constants/colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: colors.white,
          borderRadius: 15,
          height: 70,
          borderTopWidth: 0,
          elevation: 5,
        },
        activeTintColor: colors.primary,
      }}>
      <Tab.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="hamburger"
              color={focused ? colors.primary : colors.grey}
              size={35}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="map-marker-alt"
              color={focused ? colors.primary : colors.grey}
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
