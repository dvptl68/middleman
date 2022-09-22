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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Discover;
