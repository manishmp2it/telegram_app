import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Appbar, Avatar, Button, Drawer, List } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import { Share } from 'react-native';

const CustomSidebarMenu = (props) => {

    const inviteFriend = async () => {
        try {
            const result = await Share.share({
                message: 'Check out this cool app!',
                url: 'https://example.com',
                title: 'Invite Friend',
            });
            if (result.action === Share.sharedAction) {
                console.log('Invite sent successfully');
            } else if (result.action === Share.dismissedAction) {
                console.log('Invite dismissed');
            }
        } catch (error) {
            console.log('Error sharing:', error.message);
        }
    };

    return (
        <View style={tw`flex-1`}>
            <Appbar.Header statusBarHeight={35} style={tw`px-[24px]`}>
                <View style={tw`flex-row justify-between w-full`}>
                    <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                        <Ionicons name="chevron-forward" size={28} color="#2675EC" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('MainProfile')}>
                        <SimpleLineIcons name="settings" size={26} color="#2675EC" />
                    </TouchableOpacity>
                </View>
            </Appbar.Header>
            <View style={tw`flex-row items-center mx-[24px]`}>
                <Image style={tw`w-[72px] h-[72px]`} source={require('../../assets/images/sidebar/sidebar-icon.png')} />
                <Text style={[tw`text-[20px] pl-[10px] font-semibold text-[#2675EC] w-full`]}>Gloria Mckinney</Text>
            </View>
            <View style={tw`mx-[24px] mt-[24px]`}>
                <List.Item
                    style={tw`mb-[8px]`}
                    title="Contacts"
                    titleStyle={tw`text-[19px] font-semibold `}
                    left={() => (<Ionicons name="person-outline" size={24} color="#2675EC" />)}
                />
                <List.Item
                    style={tw`mb-[8px]`}
                    title="Calls"
                    titleStyle={tw`text-[19px] font-semibold `}
                    left={() => (<MaterialCommunityIcons name="phone-hangup-outline" size={26} color="#2675EC" />)}
                />
                <List.Item
                    style={tw`mb-[8px]`}
                    title="Save messages"
                    titleStyle={tw`text-[19px] font-semibold `}
                    left={() => (<Feather name="bookmark" size={24} color="#2675EC" />)}
                />
                <List.Item
                    style={tw`mb-[8px]`}
                    onPress={inviteFriend}
                    title="Invite Friends"
                    titleStyle={tw`text-[19px] font-semibold `}
                    left={() => (<Ionicons name="person-add-outline" size={24} color="#2675EC" />)}
                />
                <List.Item
                    style={tw`mb-[8px]`}
                    title="Telegram FAQ"
                    titleStyle={tw`text-[19px] font-semibold `}
                    left={() => (<SimpleLineIcons name="question" size={24} color="#2675EC" />)}
                />
            </View>
        </View>
    )
}

export default CustomSidebarMenu

const styles = StyleSheet.create({

})