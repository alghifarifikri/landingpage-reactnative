/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import IndexHome from '../Screens/Home/Index';
import IndexOrder from '../Screens/MyOrder/Index';
import IndexPoint from '../Screens/Point/Index';
import Account from '../Screens/Account/Index';
import SplashScreen from '../Screens/SplashScreen';
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <IndexHome />
  );
}

function OrderScreen() {
  return (
    <IndexOrder />
  );
}

function PointScreen() {
  return (
    <IndexPoint />
  );
}

function AccountScreen() {
  return (
    <Account />
  );
}

const Route = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
          setisLoading(false);
      }, 500);
  }, [isLoading]);

  if (isLoading) {
      return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-variant-outline';
            } else if (route.name === 'My Order') {
              iconName = 'format-list-bulleted';
            } else if (route.name === 'Point') {
              iconName = 'ticket-confirmation';
            } else if (route.name === 'Account') {
              iconName = 'account-circle-outline';
            }
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? '#0064D2' : 'gray'}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0064D2',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Order" component={OrderScreen} />
        <Tab.Screen name="Point" component={PointScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Route;
