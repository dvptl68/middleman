import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { DisplayProfileStyles } from '../styles/Styles';

const DisplayProfile = (props) => {
  let image = null;
  //if (props.username === '') {
  image = require(`./../../assets/images/profile-pic.png`);
  //} else {
  //  image = require(`./../../assets/images/${props.username}.jpg`);
  //}
  return (
    <>
      <View style={DisplayProfileStyles.profileContainer}>
        <View style={DisplayProfileStyles.container}>
          <Image style={DisplayProfileStyles.picture} source={image} />
          <Text style={DisplayProfileStyles.nameText}>{props.name}</Text>
          <Text style={DisplayProfileStyles.text}>
            {props.orientation} ({props.sex}), Age {props.age}
          </Text>
          <Text style={DisplayProfileStyles.text}>{props.location}</Text>
          <Text style={DisplayProfileStyles.text}>
            {Math.floor(props.height / 12)}'{props.height % 12}"
          </Text>
          <Text style={DisplayProfileStyles.text}>
            Education: {props.education == null ? 'N/A' : props.education}
          </Text>
          <Text style={DisplayProfileStyles.text}>
            Religion: {props.religion == null ? 'N/A' : props.religion}
          </Text>
        </View>
      </View>
      <View style={DisplayProfileStyles.buttonsContainer}>
        <TouchableOpacity
          style={DisplayProfileStyles.singleButtonContainer}
          onPress={() => props.likeProfile(false)}
        >
          <Image
            style={DisplayProfileStyles.buttons}
            source={require('./../../assets/images/broken-heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={DisplayProfileStyles.singleButtonContainer}
          onPress={() => props.likeProfile(true)}
        >
          <Image
            style={DisplayProfileStyles.buttons}
            source={require('./../../assets/images/heart.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DisplayProfile;
