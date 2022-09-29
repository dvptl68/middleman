import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { ChatStyles } from '../styles/Styles';

const Chat = (props) => {
  const chatUsernames = [];
  const userLiked = props.userData[props.username].userLiked;
  userLiked.forEach((username) => {
    const otherUserLiked = props.userData[username].userLiked;
    if (otherUserLiked.includes(props.username)) {
      chatUsernames.push(username);
    }
  });
  const renderItem = (username) => {
    return (
      <View style={ChatStyles.listItemContainer}>
        <Image
          style={ChatStyles.profilePicture}
          source={require(`./../../assets/images/${username}.jpg`)}
        />
        <View style={ChatStyles.listItemTextContainer}>
          <Text style={ChatStyles.listItemText}>
            {props.userData[username].profile.name}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={ChatStyles.container}>
      <FlatList
        data={chatUsernames}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};

export default Chat;
