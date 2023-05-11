import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Appbar, Divider, List } from 'react-native-paper';
import { Image } from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc'
import chatProfileImage from '../../assets/data/chatProfileImage';
import { FlatList } from 'react-native';
import { Pressable } from 'react-native';

const ChatProfileScreen = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Pressable>
          <Image source={item.image} style={{aspectRatio:1,height:115,margin:5}} />
        </Pressable>
      );

    return (
        <View style={tw`flex-1 bg-[#fff]`}>
            <Appbar.Header statusBarHeight={35} style={tw`px-[12px]`}>
                <View style={tw`flex-row w-full items-end`}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();

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
                    <Text style={[tw`text-[14px] pl-[10px] font-medium text-[#848484] w-full`]}>Online</Text>
                </View>
            </View>
            <View style={tw`mx-[12px] mt-[20px]`}>
                <Text style={[tw`text-[17px] pl-[10px] font-semibold text-[#131313] `]}>Phone Number</Text>
                <Text style={[tw`text-[14px] pl-[10px] font-medium text-[#131313] mt-[8px]`]}>+375(29)9638433</Text>

                <Divider style={tw`bg-[#F6F6F6] mt-[20px]`} bold />

            </View>
            <View style={tw`mx-[12px] mt-[10px] flex-row justify-around`}>
                <TouchableOpacity>
                    <Text style={tw`text-[#131313] bg-[#fff] px-[30] py-[10] rounded-[14px] font-normal`} >Location</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={tw`text-[#fff] bg-[#2675EC] px-[30] py-[10] rounded-[14px] font-normal`} >Image</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={tw`text-[#131313] bg-[#fff] px-[30] py-[10] rounded-[14px] font-normal`} >Documents</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`flex-1 pt-2 mt-2`}>
                <FlatList 
                style={tw``} 
                data={chatProfileImage} 
                numColumns={3} 
                renderItem={renderItem}
                keyExtractor={(item,index)=>index}
                 />
            </View>
            <StatusBar style='dark' />
        </View>
    )
}

export default ChatProfileScreen