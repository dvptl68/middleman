import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import { DiscoverStyles } from '../styles/Styles';

const Discover = (props) => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'username': props['username'],
        'matchmaker': props['matchmaker']
      })
    };
    fetch(`http://127.0.0.1:3000/user_profiles/`, requestOptions)
      .then(response => response.json())
      .then(data => setProfiles(data))
      .catch(console.error);
  }, []);
  const likeProfile = (liked) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'username': props['username'],
        'likedUsername': profiles[0],
        'liked': liked
      })
    };
    fetch(`http://127.0.0.1:3000/user_like/`, requestOptions)
      .catch(console.error);
    setProfiles(profiles.slice(1));
  };
  return profiles.length > 0 ? (
    <View style={DiscoverStyles.container}>
      {/* <DisplayProfile
        username={profiles[0]}
        likeProfile={likeProfile}
        {...props.userData[profiles[0]].profile}
      /> */}
    </View>
  ) : (
    <View style={DiscoverStyles.noProfilesTextContainer}>
      <Text style={DiscoverStyles.noProfilesText}>No profiles to show!</Text>
    </View>
  );
};

export default Discover;
