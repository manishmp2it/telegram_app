import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Appbar, List, SegmentedButtons } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Menu from "../../assets/images/homeScreen/Menu.png"
import topMenu from '../../assets/data/topMenu';
import homeChats from '../../assets/data/homeChats';

const HomeScreen = ({ navigation }) => {
    const [value, setValue] = React.useState('');
    const [menu_value, setMenuValue] = useState(1);

    const [fontsLoaded] = useFonts({
        'Roboto': require('../../assets/Fonts/Roboto-Regular.ttf'),

    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const renderTopMenu = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => setMenuValue(item.id)}>
                <Text style={[styles.topTabsTitle, { color: item.id === menu_value ? '#fff' : '#131313', backgroundColor: item.id === menu_value ? '#2675EC' : '#fff' }]} >{item.name}</Text>
            </TouchableOpacity>
        )
    }

    const renderChats = ({ item }) => {
        return (
            <List.Item
                title={item.name}
                titleStyle={styles.chatTitle}
                description={item.shortMessage}
                left={props => <List.Image {...props} source={item.image} />}
                right={props => <View style={{alignItems:"center",flexDirection:"column",alignContent:"space-between"}}>
                    <Text>{item.time}</Text>
                    <Text>{item.notification}</Text>

                </View>}
            />
        )
    }

    return (
        <View onLayout={onLayoutRootView} style={{ backgroundColor: "#fff" }}>
            <Appbar.Header statusBarHeight={35}>
                <Appbar.Content title="Telegram" titleStyle={styles.headerTitle} />
                <Appbar.Action icon="plus" size={32} color='#2675EC' />
                <Appbar.Action icon="magnify" size={30} color='#2675EC' />
                <Appbar.Action icon={Menu} size={22} color='#2675EC' onPress={() => navigation.toggleDrawer()} />
            </Appbar.Header>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={topMenu}
                    renderItem={renderTopMenu}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsVerticalScrollIndicator={false}

                />
            </View>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={homeChats}
                    renderItem={renderChats}
                    keyExtractor={(item) => item.id}

                    showsVerticalScrollIndicator={false}

                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    headerTitle: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 30
    },
    topTabsTitle: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginHorizontal: 5,
        borderRadius: 20,
    },
    chatTitle:{
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize:23,
        color:'#131313'

    }
})