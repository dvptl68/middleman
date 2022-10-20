import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { ChatWindowStyles } from '../styles/Styles';

const ChatWindow = (props) => {
  const [message, setMessage] = useState('');
  return (
    <>
      <View style={ChatWindowStyles.headerContainer}>
        <TouchableOpacity
          style={ChatWindowStyles.backButtonContainer}
          onPress={() => props['backButton']()}
          >
          <Image
              style={ChatWindowStyles.backButton}
              source={require('./../../assets/images/back.png')}
            />
        </TouchableOpacity>
        <View style={ChatWindowStyles.titleContainer}>
          <Text style={ChatWindowStyles.titleText}>
            {props['chatUsername']}
          </Text>
        </View>
      </View>
      <View style={ChatWindowStyles.messagesContainer}>

      </View>
      <View style={ChatWindowStyles.footerContainer}>
        <View style={ChatWindowStyles.textBoxContainer}>
          <TextInput
            style={ChatWindowStyles.textInput}
            onChangeText={setMessage}
            value={message}
            placeholder="Message"
          />
        </View>
        <TouchableOpacity style={ChatWindowStyles.sendButtonContainer}>
          <Image
              style={ChatWindowStyles.sendButton}
              source={require('./../../assets/images/send.png')}
            />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChatWindow;
