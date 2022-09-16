import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const HelloWorldApp = () => {
  return (

    
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{margin: 20, fontSize: 30}}>Henry Cavill</Text>
      <Image
        style={{margin: 20, width: 200, height: 200}}
        source={require('./assets/cavill.jpg')}
      />
      <Box
        style={{
          backgroundColor: '#FFF',
          borderRadius: 4,
          color: '#eee',
          minHeight: 200,
          padding: 12,
          width: 300,
          margin: 20,
        }}>
        <Text>Henry Cavill, Superman, Witcher, ready to slay</Text>
      </Box>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          backgroundColor: 'goldenrod',
        }}>
        <Image
          style={styles.img}
          source={require('./assets/lg_broken_heart.png')}
        />
        <Box
          style={{
            backgroundColor: '#FFF',
            borderRadius: 4,
            color: '#eee',
            minHeight: 200,
            padding: 12,
            width: 150,
          }}>
          <Text />
        </Box>
        <Image style={styles.imgr} source={require('./assets/lg_heart.png')} />
      </View>
    </View>
  );
};

function Box({children, ...props}) {
  return <View {...props}>{children}</View>;
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  img: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
  },
  imgr: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
  },
});

export default HelloWorldApp;
