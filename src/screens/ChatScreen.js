import { View, Text, TouchableOpacity, Image, FlatList, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Dimensions, SafeAreaView, Modal, Pressable, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Appbar, Button, Divider, Menu, Provider } from 'react-native-paper'
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import chatsData from '../../assets/data/chatsData'
import { useRoute } from '@react-navigation/native'
import EmojiPicker from 'rn-emoji-keyboard'
import * as ImagePicker from 'expo-image-picker';

const ChatScreen = ({ navigation }) => {

    const [input, setInput] = useState("");
    const { params } = useRoute();
    const [height, setHeight] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [chats, setChats] = useState(chatsData);
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const handleOnClose = () => {
        setIsOpen(false)
    }

    const handleOnEmojiSelected = (emojiObject) => {
        setInput(input + emojiObject.emoji)
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setChats([...chats, {
                name: "Theresa Webb",
                message: null,
                message_type: 'image',
                incoming_type: "upload",
                image: result.assets[0].uri,
            },])
        }
    };

    const sendMessage = () => {
        setChats([...chats, {
            name: "Theresa Webb",
            message: `${input}`,
            message_type: 'text',
            incoming_type: "receiver",
            image: null,
        },])

        setInput('');
    }

    const renderChats = ({ item }) => {
        return (
            item.incoming_type === "sender" ?
                item.message_type === "text" ?
                    <View style={[tw`bg-[#2675EC] mr-[90px] rounded-t-[35px] rounded-br-[35px] px-5 py-3 my-2`, { alignSelf: "flex-start" }]}>
                        <Text style={tw`text-white leading-normal font-normal text-[13px]`}>{item.message}</Text>
                    </View> : <View  >
                        <Image source={item.image} style={tw`w-[286px] h-[209px]`} />
                    </View> :
                item.message_type === "text" ?
                    <View style={[tw`bg-[#F6F6F6] rounded-[35px] rounded-tr-none px-5 py-3 my-2`, { alignSelf: "flex-start", marginLeft: "auto" }]}>
                        <Text style={tw`text-[#131313] font-normal text-[13px] leading-normal`}>{item.message}</Text>
                    </View> : item.incoming_type === "receiver" ? <View>
                        <Image source={item.image} style={tw`w-[286px] h-[209px]`} />
                    </View> : <View style={tw`my-2 ml-auto`}>
                        <Image source={{ uri: item.image }} style={tw`w-[286px] h-[209px] rounded-r-[10px] rounded-l-[35px]`} />
                    </View>
        )
    }

    return (
        <SafeAreaView style={tw`flex-1 bg-[#fff]`}>

            <Appbar.Header statusBarHeight={35} style={tw`justify-between items-center`}>
                <View style={tw`flex-row items-center`}>
                    <TouchableOpacity style={tw`mt-[10px]`} onPress={() => {
                        navigation.goBack();
                    }}>
                        <Ionicons name="chevron-back" size={28} color="#2675EC" />
                    </TouchableOpacity>
                    <View style={tw`flex-row items-center mx-[12px] mt-[10px]`}>
                        <Image style={tw`w-[64px] h-[64px]`} source={require('../../assets/images/sidebar/sidebar-icon.png')} />
                        <View style={tw`ml-[10px]`}>
                            <Text style={[tw`text-[17px] pl-[10px] font-semibold text-[#131313] w-full`]}>Gloria Mckinney</Text>
                            <Text style={[tw`text-[12px] pl-[10px] font-medium text-[#2675EC] w-full`]}>Online</Text>
                        </View>
                    </View>
                </View>

                <Menu
                    style={tw`mt-[10px] rounded-[35px]`}
                    visible={visible}
                    contentStyle={tw`bg-[#2675EC] rounded-[35px] rounded-tr-[10px] `}

                    onDismiss={closeMenu}
                    anchor={<Button style={tw`mt-[10px]`} onPress={openMenu}> <Image style={tw`w-[18px] h-[16px] mr-[10px]`} source={require('../../assets/images/chatScreen/profile_menu.png')} /></Button>}>
                    <TouchableOpacity>
                        <Menu.Item titleStyle={tw`text-[#fff] text-[14px]`} leadingIcon={() => (
                            <MaterialCommunityIcons name="phone-hangup-outline" size={24} color="#fff" />
                        )} onPress={() => {
                            navigation.navigate('CallScreen');
                            closeMenu();
                        }} title="Call" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Menu.Item style={tw`focus:bg-[#fff]`} titleStyle={tw`text-[#fff] text-[14px]`} leadingIcon={() => (
                            <MaterialCommunityIcons name="delete" size={24} color="#fff" />
                        )} onPress={() => { }} title="Delete chat history" disabled />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Menu.Item titleStyle={tw`text-[#fff] text-[14px]`} leadingIcon={() => (
                            <Ionicons name="notifications-off-outline" size={24} color="#fff" />
                        )} onPress={() => { }} title="Mute notification" disabled />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Menu.Item titleStyle={tw`text-[#fff] text-[14px]`} leadingIcon={() => (
                            <Ionicons name="search" size={24} color="#fff" />
                        )} onPress={() => {
                            navigation.navigate('ChatProfile');
                            closeMenu();
                        }} title="Search" />
                    </TouchableOpacity>
                </Menu>
            </Appbar.Header>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={tw`flex-1 mx-[10px] mt-[20px]`}
                keyboardVerticalOffset={10} >

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <FlatList
                        data={chats}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderChats}
                        keyExtractor={(item, index) => index}
                        contentContainerStyle={{ flexDirection: 'column-reverse' }}
                        inverted
                    />
                </TouchableWithoutFeedback>

                <View style={tw`flex-row bg-[#FAFAFA] justify-between items-center rounded-full px-5 my-2 mx-2 py-2`}>
                    <TextInput
                        multiline={true}
                        style={[tw`h-8 text-[14px] text-[#848484] pr-[30px] flex-1`, { height: Math.max(35, height) }]}
                        placeholder="Type your message..."
                        onChangeText={setInput}
                        onContentSizeChange={(event) =>
                            setHeight(event.nativeEvent.contentSize.height)
                        }

                        onSubmitEditing={sendMessage}
                        value={input}
                    />

                    <View style={tw`flex-row`}>
                        {input === '' && <TouchableOpacity style={tw`mr-[12px]`} onPress={() => setIsVisible(true)}>
                            <AntDesign name="plus" size={24} color="#2675EC" />
                        </TouchableOpacity>}
                        <TouchableOpacity style={tw`mr-[12px]`} onPress={() => setIsOpen(true)}>
                            <MaterialIcons name="emoji-emotions" size={24} color="#2675EC" />
                        </TouchableOpacity>
                        {input === "" ? <TouchableOpacity style={tw`mr-[12px]`} onPress={pickImage}>
                            <MaterialIcons name="image" size={24} color="#2675EC" />
                        </TouchableOpacity> : <TouchableOpacity style={tw`mr-[12px] ml-[5px]`} onPress={sendMessage}>
                            <Ionicons name="send" size={24} color="#2675EC" />
                        </TouchableOpacity>}
                    </View>
                    <EmojiPicker open={isOpen} onClose={handleOnClose} onEmojiSelected={handleOnEmojiSelected} expandable={false} emojiSize={20} />

                    <Modal animationType="slide" transparent={true} visible={isVisible}>
                        <TouchableOpacity style={styles.modalContent} onPressOut={() => setIsVisible(false)}>
                            <TouchableOpacity style={styles.titleContainer} activeOpacity={10}>
                                <View style={tw`flex-row bg-[#fff] h-full items-center justify-around mx-[10px]`}>
                                    <TouchableOpacity style={tw`items-center`}>
                                        <Ionicons name="images" size={24} color="#2675EC" onPress={pickImage} />
                                        <Text style={tw`font-normal text-[12px] text-[#2675EC]`}>Image</Text>
                                    </TouchableOpacity>
                                    <View style={tw`items-center`}>
                                        <Ionicons name="md-document" size={24} color="#2675EC" />
                                        <Text style={tw`font-normal text-[12px] text-[#2675EC]`}>Documents</Text>
                                    </View >
                                    <View style={tw`items-center`}>
                                        <Ionicons name="person-outline" size={24} color="#2675EC" />
                                        <Text style={tw`font-normal text-[12px] text-[#2675EC]`}>Contacts</Text>
                                    </View>
                                    <View style={tw`items-center`}>
                                        <Ionicons name="location-sharp" size={24} color="#2675EC" />
                                        <Text style={tw`font-normal text-[12px] text-[#2675EC]`}>Location</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </Modal>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,

    },
    titleContainer: {
        height: '10%',
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,

    },

});