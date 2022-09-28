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
  //   fetch(
  //     `http://127.0.0.1:5000/get_users/5/${props.age}/${props.height}/${props.sex}/${props.orientation}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setProfiles(json))
  //     .catch((error) => setError(error))
  //     .finally(() => setLoading(false));
  // }, []);
  return isLoggedIn ? (
    <MainView
      username={username}
      password={password}
      userData={userData}
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
      <Button title="login" onPress={() => setIsLoggedIn(true)} />
    </View>
  );
};

export default Login;
