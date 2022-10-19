import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { DisplayProfileStyles } from '../styles/Styles';

const DisplayProfile = (props) => {
  const profile = props.profile;
  return (
    <>
      <View style={DisplayProfileStyles.profileContainer}>
        <View style={DisplayProfileStyles.container}>
          <Image style={DisplayProfileStyles.picture} source={require(`./../../assets/images/profile-pic.png`)} />
          <Text style={DisplayProfileStyles.nameText}>{profile.name}</Text>
          <Text style={DisplayProfileStyles.text}>
            {profile.orientation} ({profile.sex}), Age {profile.age}
          </Text>
          <Text style={DisplayProfileStyles.text}>{profile.location}</Text>
          <Text style={DisplayProfileStyles.text}>
            {Math.floor(profile.height / 12)}'{profile.height % 12}"
          </Text>
          <Text style={DisplayProfileStyles.text}>
            Education: {profile.education == null ? 'N/A' : profile.education}
          </Text>
          <Text style={DisplayProfileStyles.text}>
            Religion: {profile.religion == null ? 'N/A' : profile.religion}
          </Text>
        </View>
      </View>
      <View style={DisplayProfileStyles.buttonsContainer}>
        <TouchableOpacity
          style={DisplayProfileStyles.singleButtonContainer}
          onPress={() => props['likeProfile'](false, profile.matchmaker)}
        >
          <Image
            style={DisplayProfileStyles.buttons}
            source={require('./../../assets/images/broken-heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={DisplayProfileStyles.singleButtonContainer}
          onPress={() => props['likeProfile'](true, profile.matchmaker)}
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
