import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainProfileSettingScreen from '../screens/MainProfileSettingScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatProfileScreen from '../screens/ChatProfileScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
   <HomeStack.Navigator>
      <HomeStack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}} />
      <HomeStack.Screen name='MainProfile' component={MainProfileSettingScreen} options={{headerShown:false}} />
      <HomeStack.Screen name='ChatScreen' component={ChatScreen} options={{headerShown:false}} />
      <HomeStack.Screen name='ChatProfile' component={ChatProfileScreen} options={{headerShown:false}} />

   </HomeStack.Navigator>
  )
}

export default HomeStackNavigator