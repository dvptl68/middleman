import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Profile from './../components/Profile';

const Discover = () => {
  const [isLoading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://127.0.0.1:5000/get_users/5/20/70/f/straight')
      .then((response) => response.json())
      .then((json) => setProfiles(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  const popProfile = () => {
    setProfiles((profiles) => profiles.slice(1));
  };
  const displayProfile = <Profile {...profiles[0]} />;
  return isLoading ? (
    <View style={styles.profileContainer}>
      <Text>Loading...</Text>
    </View>
  ) : (
    error ? (
      <View style={styles.profileContainer}>
        <Text>{error.stack}</Text>
      </View>
    ) : (
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
    )
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
