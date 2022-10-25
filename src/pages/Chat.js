import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import ChatWindow from '../components/ChatWindow';
import { ChatStyles } from '../styles/Styles';

const Chat = (props) => {
  const [chatProfiles, setChatProfiles] = useState([]);
  const [currChat, setCurrChat] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: props['username'],
        }),
      };
      const response = await fetch(
        `http://127.0.0.1:3000/chat_profiles`,
        requestOptions
      );
      const responseJSON = await response.json();
      setChatProfiles(responseJSON);
    };
    fetchData();
  }, []);
  const backButton = () => {
    setCurrChat('');
  };
  const renderItem = (username) => {
    return (
      <TouchableOpacity onPress={() => setCurrChat(username)}>
        <View style={ChatStyles.listItemContainer}>
          <Image
            style={ChatStyles.profilePicture}
            source={require(`./../../assets/images/profile-pic.png`)}
          />
          <View style={ChatStyles.listItemTextContainer}>
            <Text style={ChatStyles.listItemText}>{username}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return chatProfiles.length === 0 ? (
    <View style={ChatStyles.noProfilesTextContainer}>
      <Text style={ChatStyles.noProfilesText}>No chats yet!</Text>
    </View>
  ) : currChat === '' ? (
    <View style={ChatStyles.container}>
      <FlatList
        data={chatProfiles}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  ) : (
    <View style={ChatStyles.container}>
      <ChatWindow
        username={props['username']}
        chatUsername={currChat}
        backButton={backButton}
      />
    </View>
  );
};

export default Chat;
