import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import { MatchmakingStyles } from '../styles/Styles';

const Matchmaking = (props) => {
  console.log(props)
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'username': props['username']
      })
    };
    fetch(`http://127.0.0.1:3000/matchmaker_profiles/`, requestOptions)
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
        'likedUsernameMatchmaker': '',
        'liked': liked
      })
    };
    fetch(`http://127.0.0.1:3000/matchmaker_like/`, requestOptions)
      .catch(console.error);
    setProfiles(profiles.slice(1));
  };
  return profiles.length > 0 ? (
    <View style={MatchmakingStyles.container}>
      {/* <DisplayProfile
        username={username}
        likeProfile={likeProfile}
      /> */}
    </View>
  ) : (
    <View style={MatchmakingStyles.noProfilesTextContainer}>
      <Text style={MatchmakingStyles.noProfilesText}>No profiles to show!</Text>
    </View>
  );
};

export default Matchmaking;
