import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/auth/LoginScreen';
import SplashScreen from '../screens/SplashScreen'

export default createAppContainer(createSwitchNavigator({
  Login: LoginScreen,
  Main:  MainTabNavigator,
  Splash: SplashScreen
},
{
  initialRouteName: 'Splash'
}));