import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Tabs from './Tabs';

const Login = () => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? (
    <Tabs username={username}/>
  ) : (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />
      <Button title="login" onPress={() => setIsLoggedIn(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'blue',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
