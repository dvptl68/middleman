import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { DiscoverStyles } from '../styles/Styles';
import DiscoverProfile from '../components/DiscoverProfile';

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
  const displayProfile = <DiscoverProfile {...profiles[0]} />;
  return isLoading ? (
    <View style={DiscoverStyles.profileContainer}>
      <Text>Loading...</Text>
    </View>
  ) : error ? (
    <View style={DiscoverStyles.profileContainer}>
      <Text>{error.stack}</Text>
    </View>
  ) : profiles.length > 0 ? (
    <>
      <View style={DiscoverStyles.profileContainer}>{displayProfile}</View>
      <View style={DiscoverStyles.buttonsContainer}>
        <TouchableOpacity
          style={DiscoverStyles.singleButtonContainer}
          onPress={popProfile}
        >
          <Image
            style={DiscoverStyles.buttons}
            source={require('./../../assets/images/broken-heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={DiscoverStyles.singleButtonContainer}
          onPress={popProfile}
        >
          <Image
            style={DiscoverStyles.buttons}
            source={require('./../../assets/images/heart.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  ) : (
    <></>
  );
};

export default Discover;
