import React from 'react';
import { Text, View, Image } from 'react-native';

function Box({ children, ...props }) {
  return <View {...props}>{children}</View>
}

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  }
}

const HelloWorldApp = () => {
  return (

    <View
      style={{
        flex: 1,
        //justifyContent: "center",
        alignItems: "center",
        // justifyContent: 'space-between'
      }}>
      <Text style = {{margin: 20,  fontSize: 30}}>Henry Cavill</Text>
      <Image
        style = {{margin: 20, width: 200, height: 200}}
        source = {require('./assets/cavill.jpg')}
      />
      <Box
      style={{
        backgroundColor: '#333',
        borderRadius: 4,
        color: '#000000',
        minHeight: 200,
        padding: 12,
        width: 300,
        margin: 20
      }}
    >
      <Text style = {{color: "white"}}>Karthick Sivasubramanian</Text>
    </Box>
    </View>
  
  )
}
export default HelloWorldApp;
