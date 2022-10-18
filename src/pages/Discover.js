import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import { DiscoverStyles } from '../styles/Styles';

const Discover = (props) => {
  console.log(props)
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    
  }, []);
  const likeProfile = (liked) => {
    const username = profiles[0];
    const newUserData = { ...props.userData };
    if (liked) {
      newUserData[props.username].userLiked = [
        ...newUserData[props.username].userLiked,
        username,
      ];
    }
    props.setUserData(newUserData);
    setProfiles(profiles.slice(1));
  };
  return profiles.length > 0 ? (
    <View style={DiscoverStyles.container}>
      <DisplayProfile
        username={profiles[0]}
        likeProfile={likeProfile}
        {...props.userData[profiles[0]].profile}
      />
    </View>
  ) : (
    <View style={DiscoverStyles.noProfilesTextContainer}>
      <Text style={DiscoverStyles.noProfilesText}>No profiles to show!</Text>
    </View>
  );
};

export default Discover;
