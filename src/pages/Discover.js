import React from 'react';
import { View, StyleSheet } from 'react-native';
import Profile from './../components/Profile';

const Discover = () => {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'red',
  },
});

export default Discover;
