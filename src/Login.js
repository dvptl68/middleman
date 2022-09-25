import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder='Username'
        />
        <Button
          title='login'
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'red',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default Login;
