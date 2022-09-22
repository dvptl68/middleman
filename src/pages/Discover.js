import React from 'react';
import { View, StyleSheet } from 'react-native';
import Profile from './../components/Profile';

const Discover = () => {
  const profile = {
    name: 'Andrew',
    age: 24,
    gender: 'Male',
    height: 69,
    location: 'Columbus',
    sexual_orientation: 'Straight',
    word1: 'extrovert',
    word2: 'soccer',
    word3: 'marvel',
  };
  return (
    <>
      <View style={styles.profileContainer}>
        <Profile {...profile} />
      </View>
      <View style={styles.buttonsContainer}>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 3,
    borderWidth: 5,
    borderColor: 'red',
  },
  buttonsContainer: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'blue',
  }
});

export default Discover;
