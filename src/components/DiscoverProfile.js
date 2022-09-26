import React from 'react';
import { Image, Text, View } from 'react-native';
import { DiscoverProfileStyles } from '../styles/Styles';

const DiscoverProfile = (props) => {
  console.log(props);
  return (
    <View style={DiscoverProfileStyles.container}>
      <Image
        style={DiscoverProfileStyles.picture}
        source={require('./../../assets/images/profile-pic.png')}
      />
      <Text style={DiscoverProfileStyles.nameText}>{props.name}</Text>
      <Text style={DiscoverProfileStyles.text}>
        {props.orientation} ({props.sex}), Age {props.age}
      </Text>
      <Text style={DiscoverProfileStyles.text}>{props.location}</Text>
      <Text style={DiscoverProfileStyles.text}>
        {Math.floor(props.height / 12)}'{props.height % 12}"
      </Text>
      <Text style={DiscoverProfileStyles.text}>
        Education: {props.education == null ? 'N/A' : props.education}
      </Text>
      <Text style={DiscoverProfileStyles.text}>
        Religion: {props.religion == null ? 'N/A' : props.religion}
      </Text>
    </View>
  );
};

export default DiscoverProfile;
