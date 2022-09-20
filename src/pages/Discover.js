import React from 'react';
import {View, StyleSheet} from 'react-native';
import Profile from './../components/Profile';

const Discover = () => {
  return (
    <View style={styles.page}>
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Discover;
