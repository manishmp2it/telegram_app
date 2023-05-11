import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Badge, List, SegmentedButtons } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Menu from "../../assets/images/homeScreen/Menu.png"
import topMenu from '../../assets/data/topMenu';
import homeChats from '../../assets/data/homeChats';
import { StatusBar } from 'expo-status-bar';
import { SwipeListView } from 'react-native-swipe-list-view';
import { AntDesign, Feather, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const [value, setValue] = React.useState('');
    const [menu_value, setMenuValue] = useState(1);

    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../../assets/Fonts/Roboto-Bold.ttf'),
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
            <TouchableHighlight
                onPress={()=>navigation.navigate('ChatScreen')}
                style={{ backgroundColor: '#fff',padding:0}}
                underlayColor={'#F6F6F6'}>
                <List.Item
                style={{marginVertical:0,paddingVertical:2}}
                    title={item.name}
                    titleStyle={styles.chatTitle}
                    descriptionStyle={styles.chatDescription}
                    description={item.shortMessage}
                    left={props => <List.Image {...props} source={item.image} />}
                    right={props => <View style={{ alignItems: "center", flexDirection: "column", alignContent: "space-between" }}>
                        <Text style={{ fontSize: 12, lineHeight: 21, letterSpacing: -0.165 }} >{item.time}</Text>
                        <View style={{ marginTop: 5 }}>
                            <Badge style={{ color: '#fff', backgroundColor: '#2675EC' }} >{item.notification}</Badge>
                        </View>
                    </View>}
                />
            </TouchableHighlight>
        )
    }

    const renderHiddenItem = ({ item }) => (
        <View style={styles.rowBack}>
            <TouchableOpacity style={styles.hiddenItem}>
                <Feather name="bookmark" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.hiddenItem}>
            <Ionicons name="checkmark-done" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.hiddenItem}>
                <AntDesign name="delete" size={22} color="#fff" />
            </TouchableOpacity>
        </View>
    );

    const onRowDidOpen = key => {
        // console.log('This row opened', key);
    };

    return (
        <View onLayout={onLayoutRootView} style={{ backgroundColor: "#fff", flex: 1 }}>
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
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{ marginTop: 20,paddingBottom:158 }}>
                <SwipeListView
                    data={homeChats}
                    renderItem={renderChats}
                    disableRightSwipe
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={75}
                    keyExtractor={(item) => item.id}
                    rightOpenValue={-180}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onRowDidOpen={onRowDidOpen}
                />
            </View>
            <StatusBar style='auto' />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    headerTitle: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 26
    },
    topTabsTitle: {

        fontSize: 18,
        fontWeight: '600',
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginHorizontal: 5,
        borderRadius: 20,
    },
    chatTitle: {
        fontWeight: '700',
        fontStyle: 'normal',
        // fontSize:17,
        color: '#131313',
        lineHeight: 28,
        letterSpacing: -0.165,

    },
    chatDescription: {
        fontFamily: 'Roboto',
        color: '#2675EC',

        fontWeight: '500',
        lineHeight: 19,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#2675EC',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16,
    },
    hiddenItem: {
        marginHorizontal: 14
    }
})