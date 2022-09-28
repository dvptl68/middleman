import React, { useEffect, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { LoginStyles } from './styles/Styles';
import MainView from './MainView';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(require('./../assets/users.json'));
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     console.log('Logged in');
  //   } else {
  //     console.log('Not logged in');
  //   }
  // }, [isLoggedIn]);
  return isLoggedIn ? (
    <MainView
      loggedIn={setIsLoggedIn}
      username={username}
      userData={userData}
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
      <Button title="login" onPress={() => setIsLoggedIn(true)} />
    </View>
  );
};

export default Login;
