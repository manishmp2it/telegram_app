import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
   <HomeStack.Navigator>
      <HomeStack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}} />
   </HomeStack.Navigator>
  )
}

export default HomeStackNavigator