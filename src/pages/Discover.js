import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import { DiscoverStyles } from '../styles/Styles';

const Discover = (props) => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      let response = await fetch(
        `http://127.0.0.1:5000/discover_tab/${props['username']}`,
        requestOptions
      );
      let usernameList = await response.json();
      requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      const profilesList = [];
      for (let username of usernameList) {
        response = await fetch(
          `http://127.0.0.1:5000/get_user_detail/${username}/`,
          requestOptions
        );
        profilesList.push((await response.json())[0]);
      }
      setProfiles(profilesList);
    };
    fetchData();
  }, []);
  const likeProfile = (liked) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userA: props['username'],
        userB: profiles[0]['username'],
      }),
    };
    fetch(
      `http://127.0.0.1:5000/${liked ? 'like_user' : 'dis_like_user'}/`,
      requestOptions
    ).catch(console.error);
    setProfiles(profiles.slice(1));
  };
  return profiles.length === 0 ? (
    <View style={DiscoverStyles.noProfilesTextContainer}>
      <Text style={DiscoverStyles.noProfilesText}>No profiles to show!</Text>
    </View>
  ) : (
    <View style={DiscoverStyles.container}>
      <DisplayProfile profile={profiles[0]} likeProfile={likeProfile} />
    </View>
  );
};

export default Discover;
