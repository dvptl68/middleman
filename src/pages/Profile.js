import React from 'react';
import { View, Text, Button } from 'react-native';
import { ProfileStyles } from '../styles/Styles';

const Profile = (props) => {
  return (
    <View style={ProfileStyles.container}>
      <Text>Username: {props.username}</Text>
      <Button title="logout" onPress={() => props.setLoggedIn(false)} />
    </View>
  );
};

export default Profile;
