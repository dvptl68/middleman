import React from 'react';
import { View, Text, Button } from 'react-native';
import { ProfileStyles } from '../styles/Styles';
import DisplayProfile from '../components/DisplayProfile';

const Profile = (props) => {
  return (
    <View style={ProfileStyles.container}>
      <DisplayProfile
        {...props}
      />
      <Button title="logout" onPress={() => props.setLoggedIn(false)} />
    </View>
  );
};

export default Profile;
