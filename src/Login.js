import React, { useEffect, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { LoginStyles } from './styles/Styles';
import MainView from './MainView';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(require('./../assets/users.json'));
  const [elasticProfiles, setElasticProfiles] = useState([]);
  const getUserProfile = () => {
    const requestOptions = {
      method: 'GET',
    };
    console.log(username)
    fetch(`http://127.0.0.1:5000/get_user_detail/KellerMargaret399/`, requestOptions)
      .then((response) => response.json())
      .then(console.log)
      .catch(console.error);
    //setIsLoggedIn(true);
  }
  return isLoggedIn ? (
    <MainView
      username={username}
      password={password}
      userData={userData}
      elasticProfiles={elasticProfiles}
      setUserData={setUserData}
      setLoggedIn={setIsLoggedIn}
    />
  ) : (
    <View style={LoginStyles.loginContainer}>
      <TextInput
        style={LoginStyles.textInput}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={LoginStyles.textInput}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="login" onPress={getUserProfile} />
    </View>
  );
};

export default Login;
