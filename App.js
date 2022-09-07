import React from 'react';
import { Text, View, Image } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text style = {{fontSize: 30}}>Henry Cavill</Text>
      <Image
        style = {{width: 200, height: 200}}
        source = {require('./assets/cavill.jpg')}
      />
    </View>
  )
}

export default HelloWorldApp;
