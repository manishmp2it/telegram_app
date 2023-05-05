import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStackNavigator from './HomeStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='HomeStack' component={HomeStackNavigator} options={{headerShown:false,drawerPosition:"right"}}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator