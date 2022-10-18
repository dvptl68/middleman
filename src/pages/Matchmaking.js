import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import { MatchmakingStyles } from '../styles/Styles';

const Matchmaking = (props) => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    let profilesList = [];
    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'username': props['username']
      })
    };
    fetch(`http://127.0.0.1:3000/matchmaker_profiles/`, requestOptions)
      .then(response => response.json())
      .then(data => profilesList = data)
      .catch(console.error);
    requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    //fetch(`http://127.0.0.1:5000/get_users/5/${props.age}/${props.height}/${props.sex}/${props.orientation}`, requestOptions)
    fetch(`http://127.0.0.1:5000/get_users/5/20/68/m/straight`, requestOptions)
      .then(response => response.json())
      .then(data => {
        for (let profile of data) {
          profilesList = [...profilesList, profile.username];
        }
        setProfiles(profilesList);
      })
      .catch(console.error);
  }, []);
  const likeProfile = (liked, matchmaker) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'username': props['username'],
        'likedUsername': profiles[0],
        'likedUsernameMatchmaker': matchmaker,
        'liked': liked
      })
    };
    fetch(`http://127.0.0.1:3000/matchmaker_like/`, requestOptions)
      .catch(console.error);
    setProfiles(profiles.slice(1));
  };
  return profiles.length === 0 ? (
    <View style={MatchmakingStyles.noProfilesTextContainer}>
      <Text style={MatchmakingStyles.noProfilesText}>No profiles to show!</Text>
    </View>
  ) : (
    <View style={MatchmakingStyles.container}>
      <DisplayProfile
        username={profiles[0]}
        likeProfile={likeProfile}
      />
    </View>
  );
};

export default Matchmaking;
