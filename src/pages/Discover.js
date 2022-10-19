import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import { DiscoverStyles } from '../styles/Styles';

const Discover = (props) => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'username': props['username'],
          'matchmaker': props['matchmaker']
        })
      };
      let response = await fetch(`http://127.0.0.1:3000/user_profiles/`, requestOptions);
      let usernameList = await response.json();
      requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      const profilesList = [];
      for (let username of usernameList) {
        response = await fetch(`http://127.0.0.1:5000/get_user_detail/${username}/`, requestOptions);
        profilesList.push((await response.json())[0]);
      }
      setProfiles(profilesList);
    };
    fetchData();
  }, []);
  const likeProfile = (liked, _) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'username': props['username'],
        'likedUsername': profiles[0]['username'],
        'liked': liked
      })
    };
    fetch(`http://127.0.0.1:3000/user_like/`, requestOptions)
      .catch(console.error);
    setProfiles(profiles.slice(1));
  };
  return profiles.length === 0 ? (
    <View style={DiscoverStyles.noProfilesTextContainer}>
      <Text style={DiscoverStyles.noProfilesText}>No profiles to show!</Text>
    </View>
  ) : (
    <View style={DiscoverStyles.container}>
      <DisplayProfile
        profile={profiles[0]}
        likeProfile={likeProfile}
      />
    </View>
  );
};

export default Discover;
