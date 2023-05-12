import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { Image } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const CallScreen = ({ navigation }) => {
    return (
        <View style={tw`flex-1`}>
            <ImageBackground style={tw`flex-1 `} blurRadius={3} source={require('../../assets/images/homeScreen/user5.png')} >
                <View style={tw`flex-1 justify-center items-center`}>
                    <Image style={tw`w-[157px] h-[157px]`} source={require('../../assets/images/homeScreen/user5.png')} />
                    <Text style={tw`text-[#fff] text-[20px] font-medium`}>Mother ❤</Text>
                    <Text style={tw`text-[#fff] text-[14px] font-normal`}>03:12</Text>
                </View>
                <View style={tw`flex-row justify-around bottom-28 items-center`}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="ios-chatbox-ellipses-outline" size={26} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`bg-[#FF0000] p-[12] rounded-full`} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="phone-hangup-outline" size={26} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="volume-medium-outline" size={26} color="#fff" />
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
}

export default CallScreen