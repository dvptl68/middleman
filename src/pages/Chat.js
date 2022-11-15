import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import ChatWindow from '../components/ChatWindow';
import { ChatStyles } from '../styles/Styles';

const isNum = (num) => {
  return num >= '0' && num <= '9';
};

const isUpperCase = (str) => {
  return str >= 'A' && str <= 'Z';
};

const naming = (text) => {
  var first = text.charAt(0);
  for (var i = 1; i < text.length; i++) {
    if (isNum(text.charAt(i))) {
      return first.split(' ').reverse().join(' ');
    }
    if (isUpperCase(text.charAt(i))) {
      first += ' ';
      first += text.charAt(i);
    } else {
      first += text.charAt(i);
    }
  }
};

const Chat = (props) => {
  const [chatProfiles, setChatProfiles] = useState([]);
  const [currChat, setCurrChat] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(
        `http://127.0.0.1:5000/chat_users/${props['username']}/`,
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
            source={{ uri: 'https://fakeface.rest/face/view?' + new Date() }}
          />
          <View style={ChatStyles.listItemTextContainer}>
            <Text style={ChatStyles.listItemText}>{naming(username)}</Text>
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
        chatName={naming(currChat)}
        backButton={backButton}
      />
    </View>
  );
};

export default Chat;
