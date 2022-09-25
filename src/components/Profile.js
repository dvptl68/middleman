import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const Profile = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={require('./../../assets/images/profile-pic.png')}
      />
      <Text style={styles.nameText}>{props.name}</Text>
      <Text style={styles.text}>
        {props.orientation} ({props.sex}), Age {props.age}
      </Text>
      <Text style={styles.text}>{props.location}</Text>
      <Text style={styles.text}>
        {Math.floor(props.height / 12)}'{props.height % 12}"
      </Text>
      <Text style={styles.text}>
        Three words to describe me: {props.word1}, {props.word2}, {props.word3}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 100,
    height: 115,
    resizeMode: 'stretch',
    margin: 5,
  },
  nameText: {
    fontFamily: 'sans',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'sans',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
});

export default Profile;
