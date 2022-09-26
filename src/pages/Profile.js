import React from 'react';
import { View, Text } from 'react-native';
import { ProfileStyles } from '../styles/Styles';

const Profile = (props) => {
  return (
    <View style={ProfileStyles.container}>
      <Text>Username: {props.username}</Text>
    </View>
  );
};

export default Profile;
