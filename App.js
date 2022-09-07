import React from 'react';
import { Text, View, Image } from 'react-native';

function Box({ children, ...props }) {
  return <View {...props}>{children}</View>
}

const HelloWorldApp = () => {
  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
      <Text style = {{fontSize: 30}}>Henry Cavill</Text>
      <Image
        style = {{width: 200, height: 200}}
        source = {require('./assets/cavill.jpg')}
      />
      <Box
      style={{
        backgroundColor: '#333',
        borderRadius: 4,
        color: '#eee',
        minHeight: 200,
        padding: 12,
        width: 300,
      }}
    >
      <Text>Karthick Sivasubramanian</Text>
    </Box>
    </View>
  
  )
}
export default HelloWorldApp;
