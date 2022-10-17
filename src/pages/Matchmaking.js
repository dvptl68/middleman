import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import { MatchmakingStyles } from '../styles/Styles';

const Matchmaking = (props) => {
  console.log(props)
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    // make api call to set initial matchmaker profiles
    setProfiles([]);
  }, []);
  const likeProfile = (liked) => {
    // make api call to like/dislike profile
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
