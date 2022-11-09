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
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      let response = await fetch(
        `http://127.0.0.1:5000/matchmaker_profiles/${props['username']}/`,
        requestOptions
      );
      let responseJSON = await response.json();
      usernameList = responseJSON;
      requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      response = await fetch(
        `http://127.0.0.1:5000/get_user_detail/${props.matchmaking}/`,
        requestOptions
      );
      const user = (await response.json())[0];
      response = await fetch(
        `http://127.0.0.1:5000/get_users/5/${user.age}/${user.height}/${user.sex}/${user.orientation}/bachelors/agnostic/500`,
        requestOptions
      );
      responseJSON = await response.json();
      for (let profile of responseJSON) usernameList.push(profile.username);
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
        user: profiles[0]['username'],
        liked: (liked) ? 'y' : 'n',
      }),
    };
    fetch(`http://127.0.0.1:5000/matchmaker_profiles/${props['username']}/`, requestOptions).catch(
      console.error
    );
    setProfiles(profiles.slice(1));
  };
  return profiles.length === 0 ? (
    <View style={MatchmakingStyles.noProfilesTextContainer}>
      <Text style={MatchmakingStyles.noProfilesText}>No profiles to show!</Text>
    </View>
  ) : (
    <View style={MatchmakingStyles.container}>
      <DisplayProfile profile={profiles[0]} likeProfile={likeProfile} />
    </View>
  );
};

export default Matchmaking;
