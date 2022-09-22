import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
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
        <TouchableOpacity style={styles.singleButtonContainer}>
          <Image style={styles.buttons} source={require('./../../assets/images/broken-heart.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.singleButtonContainer}>
          <Image style={styles.buttons} source={require('./../../assets/images/heart.png')} />
        </TouchableOpacity>
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
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'blue',
  },
  singleButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'green',
  },
  buttons: {
    width: 75,
    height: 75,
    resizeMode: 'stretch',
  }
});

export default Discover;
