import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import { MatchmakingStyles } from '../styles/Styles';

const Matchmaking = (props) => {
  const [profiles, setProfiles] = useState([
    ...props.userData[props.username].mProfiles,
  ]);
  useEffect(() => {
    if (props.username == 'catwoman1') {
      setProfiles((prevProfiles) => [
        ...prevProfiles,
        ...props.elasticProfiles,
      ]);
    }
  }, []);
  const likeProfile = (liked) => {
    const username = profiles[0];
    if (typeof username === 'string') {
      const newUserData = { ...props.userData };
      newUserData[props.username].mProfiles = profiles.slice(1);
      if (liked) {
        newUserData[props.username].approvedProfiles.push(username);
        if (
          !newUserData[
            newUserData[username].matchmaker
          ].approvedProfiles.includes(newUserData[props.username].matchmaking)
        ) {
          newUserData[newUserData[username].matchmaker].mProfiles.push(
            newUserData[props.username].matchmaking
          );
        }
      }
      props.setUserData(newUserData);
      setProfiles(newUserData[props.username].mProfiles);
    } else {
      setProfiles((prevProfiles) => prevProfiles.slice(1));
    }
  };
  let username = '';
  let params = null;
  if (typeof profiles[0] == 'string') {
    username = profiles[0];
    params = props.userData[username].profile;
  } else {
    params = profiles[0];
  }
  return profiles.length > 0 ? (
    <View style={MatchmakingStyles.container}>
      <DisplayProfile
        username={username}
        likeProfile={likeProfile}
        {...params}
      />
    </View>
  ) : (
    <View style={MatchmakingStyles.noProfilesTextContainer}>
      <Text style={MatchmakingStyles.noProfilesText}>No profiles to show!</Text>
    </View>
  );
};

export default Matchmaking;
