import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import { DiscoverStyles } from '../styles/Styles';

const Discover = (props) => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const matchmakerApproved =
      props.userData[props.userData[props.username].matchmaker]
        .approvedProfiles;
    matchmakerApproved.forEach((username) => {
      const otherMatchmakerApproved =
        props.userData[props.userData[username].matchmaker].approvedProfiles;
      const userLiked = props.userData[props.username].userLiked;
      if (
        otherMatchmakerApproved.includes(props.username) &&
        !userLiked.includes(username)
      ) {
        setProfiles((prevArr) => [...prevArr, username]);
      }
    });
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
