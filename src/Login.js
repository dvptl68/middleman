import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { LoginStyles } from './styles/Styles';
import MainView from './MainView';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const regex = new RegExp("^[a-zA-Z0-9_]*$");
  const getUserProfile = () => {
    if (!regex.test(username)) {
      console.log("Invalid username");
    } else {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(`http://127.0.0.1:5000/get_user_detail/${username}/`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          const userProfile = data[0];
          setUserData(userProfile);
          console.log(userProfile);
          setIsLoggedIn(true);
        })
        .catch(console.error);
    }
  };
  return isLoggedIn ? (
    <MainView {...userData} setLoggedIn={setIsLoggedIn} />
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
