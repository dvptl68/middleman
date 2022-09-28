import React from 'react';
import { View, Text } from 'react-native';
import { ChatStyles } from '../styles/Styles';

const Chat = (props) => {
  const chatUsernames = []
  const userLiked = props.userData[props.username].userLiked;
  userLiked.forEach(username => {
    const otherUserLiked = props.userData[username].userLiked;
    if (otherUserLiked.includes(props.username)) {
      chatUsernames.push(username)
    }
  });
  console.log(chatUsernames)
  return (
    <View style={ChatStyles.container}>
      <Text>Chat</Text>
    </View>
  );
};

export default Chat;
