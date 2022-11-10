import React, { useState } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import { LoginStyles } from './styles/Styles';
import MainView from './MainView';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const getUserProfile = () => {
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
        if (userProfile) setIsLoggedIn(true);
      })
      .catch(console.error);
  };
  return isLoggedIn ? (
    <MainView {...userData} setLoggedIn={setIsLoggedIn} />
  ) : (
    <View style={LoginStyles.loginContainer}>
      <Image
        style={LoginStyles.logo}
        source={require('../assets/images/logo.png')}
      />
      <TextInput
        style={LoginStyles.textInput}
        onChangeText={(value) =>
          setUsername(value.replace(/[^0-9a-z-A-Z ]/g, ''))
        }
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={LoginStyles.textInput}
        onChangeText={(value) =>
          setPassword(value.replace(/[^0-9a-z-A-Z ]/g, ''))
        }
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="login" onPress={getUserProfile} />
    </View>
  );
};

export default Login;
