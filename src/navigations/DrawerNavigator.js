import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStackNavigator from './HomeStackNavigator';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import MainProfileSettingScreen from '../screens/MainProfileSettingScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props=><CustomSidebarMenu {...props} />}>
            <Drawer.Screen name='HomeStack' component={HomeStackNavigator} options={{headerShown:false,drawerPosition:"right"}}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator