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

      <Box
            style={{
              backgroundColor: '#FFF',
              borderRadius: 4,
              color: '#eee',
              minHeight: 200,
              padding: 12,
              width: 300,
            }}
          >
            <Text>Henry Cavill</Text>
          </Box>


    </View>
  )
}


function Box({ children, ...props }) {
  return <View {...props}>{children}</View>
}


export default HelloWorldApp;
