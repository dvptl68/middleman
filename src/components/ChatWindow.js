import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { ChatWindowStyles } from '../styles/Styles';

const ChatWindow = (props) => {
  const [messages, setMessages] = useState([]);
  const [currMessage, setCurrMessage] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fromUsername: props['username'],
          toUsername: props['chatUsername'],
        }),
      };
      const response = await fetch(
        `http://127.0.0.1:3000/get_chat`,
        requestOptions
      );
      const responseJSON = await response.json();
      setMessages(responseJSON);
    };
    fetchData();
  }, []);
  const renderChatItem = (item) => {
    const type = item.type;
    const message = item.message;
    return (
      <View style={ChatWindowStyles.singleMessageContainer}>
        {type === 'sent' ? (
          <View style={ChatWindowStyles.messagePaddingContainer}></View>
        ) : (
          <></>
        )}
        <View
          style={
            type === 'sent'
              ? ChatWindowStyles.sentMessageTextContainer
              : ChatWindowStyles.receivedMessageTextContainer
          }
        >
          <Text style={ChatWindowStyles.messageText}>{message}</Text>
        </View>
        {type === 'received' ? (
          <View style={ChatWindowStyles.messagePaddingContainer}></View>
        ) : (
          <></>
        )}
      </View>
    );
  };
  const sendMessage = () => {
    if (currMessage === '') return;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fromUsername: props['username'],
        toUsername: props['chatUsername'],
        message: currMessage,
      }),
    };
    fetch(`http://127.0.0.1:3000/make_chat`, requestOptions);
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'sent', message: currMessage },
    ]);
    setCurrMessage('');
  };
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
        <FlatList
          data={messages}
          renderItem={({ item }) => renderChatItem(item)}
        />
      </View>
      <View style={ChatWindowStyles.footerContainer}>
        <View style={ChatWindowStyles.textBoxContainer}>
          <TextInput
            style={ChatWindowStyles.textInput}
            onChangeText={setCurrMessage}
            value={currMessage}
            placeholder="Message"
          />
        </View>
        <TouchableOpacity
          style={ChatWindowStyles.sendButtonContainer}
          onPress={sendMessage}
        >
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
