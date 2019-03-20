import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/auth/LoginScreen';
import SplashScreen from '../screens/SplashScreen'
import DetailsScreen from '../screens/details/DetailsScreen';

const DetailsStack = createStackNavigator({
  Main:  MainTabNavigator,
  Details: DetailsScreen,
});

export default createAppContainer(createSwitchNavigator({
  Login: LoginScreen,
  Main:  MainTabNavigator,
  Splash: SplashScreen,
  Details: DetailsStack
},
{
  initialRouteName: 'Splash'
}));

