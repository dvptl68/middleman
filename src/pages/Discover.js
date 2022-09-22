import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Profile from './../components/Profile';

const Discover = () => {
  const [profiles, setProfile] = useState(
    require('./../../assets/input_profiles/profiles.json')
  );
  const popProfile = () => {
    setProfile((profiles) => profiles.slice(1));
  };
  const displayProfile = <Profile {...profiles[0]} />;
  return profiles.length > 0 ? (
    <>
      <View style={styles.profileContainer}>{displayProfile}</View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.singleButtonContainer}
          onPress={popProfile}
        >
          <Image
            style={styles.buttons}
            source={require('./../../assets/images/broken-heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleButtonContainer}
          onPress={popProfile}
        >
          <Image
            style={styles.buttons}
            source={require('./../../assets/images/heart.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  ) : (
    <View style={styles.profileContainer}></View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 3,
    padding: 5,
    // borderWidth: 5,
    // borderColor: 'red',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 5,
    // borderColor: 'blue',
  },
  singleButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 5,
    // borderColor: 'green',
  },
  buttons: {
    width: 75,
    height: 75,
    resizeMode: 'stretch',
  },
});

export default Discover;
