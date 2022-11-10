import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import DisplayProfile from '../components/DisplayProfile';
import FilterWindow from '../components/FilterWindow';
import { MatchmakingStyles } from '../styles/Styles';

const Matchmaking = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [editingFilters, setEditingFilters] = useState(false);
  const [userAge, setUserAge] = useState(0);
  const [userHeight, setUserHeight] = useState(0);
  const [userSex, setUserSex] = useState('');
  const [userOrientation, setUserOrientation] = useState('');
  const fetchData = async (
    usernameList = [],
    givenUserAge = 0,
    givenUserHeight = 0,
    givenUserSex = '',
    givenUserOrientation = ''
  ) => {
    if (givenUserAge === 0) {
      givenUserAge = userAge;
      givenUserHeight = userHeight;
      givenUserSex = userSex;
      givenUserOrientation = userOrientation;
    } else {
      setUserAge(givenUserAge);
      setUserHeight(givenUserHeight);
      setUserSex(givenUserSex);
      setUserOrientation(givenUserOrientation);
    }
    let requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    let response = await fetch(
      `http://127.0.0.1:5000/get_users/5/${givenUserAge}/${givenUserHeight}/${givenUserSex}/${givenUserOrientation}/bachelors/agnostic/500`,
      requestOptions
    );
    let responseJSON = await response.json();
    for (let profile of responseJSON) usernameList.push(profile.username);
    requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const profilesList = [];
    for (let username of usernameList) {
      if (
        username === props['username'] ||
        username === props['matchmaking'] ||
        props.approvedProfiles.includes(username)
      )
        continue;
      response = await fetch(
        `http://127.0.0.1:5000/get_user_detail/${username}/`,
        requestOptions
      );
      profilesList.push((await response.json())[0]);
    }
    setProfiles(profilesList);
    setEditingFilters(false);
  };
  useEffect(() => {
    const fetchInitialData = async () => {
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
      await fetchData(
        usernameList,
        user.age,
        user.height,
        user.sex,
        user.orientation
      );
    };
    fetchInitialData();
  }, []);
  const likeProfile = (liked) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: profiles[0]['username'],
        liked: liked ? 'y' : 'n',
      }),
    };
    fetch(
      `http://127.0.0.1:5000/matchmaker_profiles/${props['username']}/`,
      requestOptions
    ).catch(console.error);
    setProfiles(profiles.slice(1));
  };
  return editingFilters ? (
    <View style={MatchmakingStyles.container}>
      <FilterWindow
        fetchData={fetchData}
        userAge={userAge}
        userHeight={userHeight}
        setUserAge={setUserAge}
        setUserHeight={setUserHeight}
      />
    </View>
  ) : profiles.length === 0 ? (
    <>
      <View style={MatchmakingStyles.headerContainer}>
        <View style={MatchmakingStyles.titleContainer}>
          <Text style={MatchmakingStyles.titleText}>
            Matchmaking for {props.matchmaking}
          </Text>
        </View>
        <TouchableOpacity
          style={MatchmakingStyles.filterButtonContainer}
          onPress={() => setEditingFilters(true)}
        >
          <Image
            style={MatchmakingStyles.filterButton}
            source={require('./../../assets/images/filter.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={MatchmakingStyles.noProfilesTextContainer}>
        <Text style={MatchmakingStyles.noProfilesText}>
          No profiles to show!
        </Text>
      </View>
    </>
  ) : (
    <>
      <View style={MatchmakingStyles.headerContainer}>
        <View style={MatchmakingStyles.titleContainer}>
          <Text style={MatchmakingStyles.titleText}>
            Matchmaking for {props.matchmaking}
          </Text>
        </View>
        <TouchableOpacity
          style={MatchmakingStyles.filterButtonContainer}
          onPress={() => setEditingFilters(true)}
        >
          <Image
            style={MatchmakingStyles.filterButton}
            source={require('./../../assets/images/filter.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={MatchmakingStyles.container}>
        <DisplayProfile profile={profiles[0]} likeProfile={likeProfile} />
      </View>
    </>
  );
};

export default Matchmaking;
