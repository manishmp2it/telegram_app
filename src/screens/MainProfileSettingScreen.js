import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { Appbar, Divider, List } from 'react-native-paper'
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

const MainProfileSettingScreen = ({ navigation }) => {
    return (
        <View style={tw`flex-1 bg-[#fff]`}>
            <Appbar.Header statusBarHeight={35} style={tw`px-[12px]`}>
                <View style={tw`flex-row w-full items-end`}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                        navigation.toggleDrawer();
                    }}>
                        <Ionicons name="chevron-back" size={28} color="#2675EC" />
                    </TouchableOpacity>
                    <Text style={tw`text-[#2675EC] ml-[10px] text-[24px] font-bold`}>@wdlam</Text>
                </View>
            </Appbar.Header>
            <View style={tw`flex-row items-center mx-[12px] mt-[10px]`}>
                <Image style={tw`w-[72px] h-[72px]`} source={require('../../assets/images/sidebar/sidebar-icon.png')} />
                <View style={tw`ml-[10px]`}>
                    <Text style={[tw`text-[20px] pl-[10px] font-semibold text-[#131313] w-full`]}>Gloria Mckinney</Text>
                    <Text style={[tw`text-[14px] pl-[10px] font-medium text-[#848484] w-full`]}>+375(29)9638433</Text>
                </View>
            </View>
            <View style={tw`mx-[12px] mt-[10px]`}>
                <Text style={[tw`text-[17px] pl-[10px] font-semibold text-[#131313] `]}>Account</Text>
                <Text style={[tw`text-[14px] pl-[10px] font-medium text-[#131313] mt-[8px]`]}>+375(29)9638433</Text>
                <Text style={[tw`text-[14px] pl-[10px] font-medium text-[#848484] mt-[8px] tracking-[-0.17px]`]}>Tap to change phone number</Text>
                <Divider style={tw`bg-[#F6F6F6] mt-[20px]`} bold />
                <Text style={[tw`text-[14px] pl-[10px] font-medium text-[#131313] mt-[14px]`]}>@wdlam</Text>
                <Text style={[tw`text-[14px] pl-[10px] font-medium text-[#848484] mt-[7px] tracking-[-0.17px]`]}>Username</Text>
                <Divider style={tw`bg-[#F6F6F6] mt-[20px]`} bold />
                <Text style={[tw`text-[14px] pl-[10px] font-medium text-[#131313] mt-[14px]`]}>I’m Frontend Developer from Webhopers Infotech</Text>
                <Text style={[tw`text-[14px] pl-[10px] font-medium text-[#848484] mt-[7px] tracking-[-0.17px]`]}>Bio</Text>
            </View>
            <View style={tw`mx-[12px] mt-[10px]`}>
                <Text style={[tw`text-[17px] pl-[10px] font-semibold text-[#131313] my-[10px] `]}>Settings</Text>
                <View>
                    <List.Item
                        style={tw`p-1`}
                        title="Notification and Sounds"
                        titleStyle={tw`text-[15px] font-medium text-[#131313]`}
                        left={() => (<Feather name="bell" size={20} color="#131313" />)}
                    />
                    <List.Item
                        style={tw`p-1`}
                        title="Privacy and Security"
                        titleStyle={tw`text-[15px] font-medium text-[#131313]`}
                        left={() => (<Feather name="lock" size={20} color="#131313" />)}
                    />
                    <List.Item
                        style={tw`p-1`}
                        title="Data and Stronge"
                        titleStyle={tw`text-[15px] font-medium text-[#131313]`}
                        left={() => (<MaterialCommunityIcons name="chart-bell-curve-cumulative" size={20} color="#131313" />)}
                    />
                    <List.Item
                        style={tw`p-1`}
                        title="Chat settings"
                        titleStyle={tw`text-[15px] font-medium text-[#131313]`}
                        left={() => (<Ionicons name="chatbubble-outline" size={20} color="#131313" />)}
                    />
                    <List.Item
                        style={tw`p-1`}
                        title="Devices"
                        titleStyle={tw`text-[15px] font-medium text-[#131313]`}
                        left={() => (<MaterialIcons name="devices" size={20} color="#131313" />)}
                    />
                </View>
            </View>
            <StatusBar style='dark' />
        </View>
    )
}

export default MainProfileSettingScreen