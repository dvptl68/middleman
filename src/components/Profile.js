import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={require('./../../assets/images/profile-pic.png')}
      />
      <Text>John Doe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'blue',
  },
  picture: {
    width: 100,
    height: 115,
    resizeMode: 'stretch',
    margin: 5,
    borderWidth: 5,
    borderColor: 'green',
  },
});

export default Profile;
