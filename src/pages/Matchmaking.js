import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import { MatchmakingStyles } from '../styles/Styles';

const Matchmaking = (props) => {
  const [profiles, setProfiles] = useState(props.userData[props.username].mProfiles);
  const likeProfile = (liked) => {
    const username = profiles[0];
    const newUserData = {...props.userData};
    newUserData[props.username].mProfiles = profiles.slice(1);
    if (liked) {
      newUserData[props.username].approvedProfiles.push(username);
      if (!newUserData[newUserData[username].matchmaker].approvedProfiles.includes(newUserData[props.username].matchmaking)) {
        newUserData[newUserData[username].matchmaker].mProfiles.push(newUserData[props.username].matchmaking);
      }
    }
    console.log(newUserData);
    props.setUserData(newUserData);
    setProfiles(newUserData[props.username].mProfiles);
  };
  return profiles.length > 0 ? (
    <View style={MatchmakingStyles.container}>
      <DisplayProfile
        username={profiles[0]}
        likeProfile={likeProfile}
        {...props.userData[profiles[0]].profile}
      />
    </View>
  ) : (
    <>
      <Text>No profiles to show!</Text>
    </>
  );
};

export default Matchmaking;
