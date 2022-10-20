import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ChatWindowStyles } from '../styles/Styles';

const ChatWindow = (props) => {
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

      </View>
    </>
  );
};

export default ChatWindow;
