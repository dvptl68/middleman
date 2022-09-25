import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Matchmaking = () => {
  return (
    <View style={styles.container}>
      <Text>Matchmaking</Text>
    </View>
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
});

export default Matchmaking;
