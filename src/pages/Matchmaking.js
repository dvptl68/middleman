import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import { MatchmakingStyles } from '../styles/Styles';

const Matchmaking = (props) => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let usernameList = [];
      let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'username': props['username']
        })
      };
      let response = await fetch(`http://127.0.0.1:3000/matchmaker_profiles/`, requestOptions);
      let responseJSON = await response.json();
      usernameList = responseJSON;
      requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      };
      // response = await fetch(`http://127.0.0.1:5000/get_user_detail/${props.matchmaking}/`, requestOptions);
      // const user = await response.json();
      response = await fetch(`http://127.0.0.1:5000/get_users/5/${props.age}/${props.height}/${props.sex}/${props.orientation}`, requestOptions)
      responseJSON = await response.json();
      for (let profile of responseJSON)
        usernameList.push(profile.username);
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
  const likeProfile = (liked, matchmaker) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'username': props['username'],
        'likedUsername': profiles[0]['username'],
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
        profile={profiles[0]}
        likeProfile={likeProfile}
      />
    </View>
  );
};

export default Matchmaking;
