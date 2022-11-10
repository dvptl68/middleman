import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { DisplayProfileStyles } from '../styles/Styles';
import { Icon } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';

function capitalName(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
}
//const[url, setUrl] = useState(0);

// function functionComb(){
//   url = 'https://fakeface.rest/face/view';
//   setUrl(url);
//   return props['likeProfile'](false, profile.matchmaker);
// }

const DisplayProfile = (props) => {
  const profile = props.profile;
  return (
    <>
            <View style={DisplayProfileStyles.profileContainer}>
              <View style={DisplayProfileStyles.container}>
                <Image
                  style={DisplayProfileStyles.picture}
                  source={{uri:'https://fakeface.rest/face/view'}}
                  />
              </View>
            </View>

            <View style = {DisplayProfileStyles.bioContainer}>
            <Text style={DisplayProfileStyles.nameText}>{profile.name}</Text>
            </View>

            <View style ={DisplayProfileStyles.bioContainer}>
              <View style={DisplayProfileStyles.bioL1}>
              <View style={{padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome name="transgender" size={24} color="black" />
                    <Text>{capitalName(profile.sex)}</Text>
                </View>
                <View style={{padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="ios-magnet-outline" size={24} color="black" />
                    <Text>{capitalName(profile.orientation)}</Text>
                </View>
                <View style={{ padding: 10 , flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="timer" size={24} color="black" />
                    <Text>{profile.age}</Text>
                </View>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center'   }}>
                    <MaterialCommunityIcons name="human-male-height-variant" size={24} color="black" />
                    <Text>{profile.height}</Text>
                </View>
              </View>
              <View style={DisplayProfileStyles.bioL1}>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center'   }}>
                <Entypo name="graduation-cap" size={24} color="black" />
                    <Text>{profile.education == null ? 'N/A' : capitalName(profile.education)}</Text>
                </View>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="mosque" size={24} color="black" />
                    <Text>{profile.religion == null ? 'N/A' : capitalName(profile.religion)}</Text>
                </View>
              </View>
              <View style={DisplayProfileStyles.bioL1}>
                <View style={{ padding: 10, flexDirection: 'row',alignItems: 'center' }}>
                <Feather name="map-pin" size={24} color="black" />
                    <Text>{capitalName(profile.location)}</Text>
                </View> 
              </View>
                {/* <Text style={DisplayProfileStyles.text}>
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
                </Text> */}
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
                onPress={() => props['likeProfile'](false, profile.matchmaker)}
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






