import React from 'react';
import {View, StyleSheet} from 'react-native';
import Profile from './../components/Profile';
import { ProfileType } from './../components/ProfileType';


const [currentProfileIndex, setCurrentProfileIndex] = useState(0)

const Discover = () => {
  return (
    <View style={styles.page}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={onChangeText}
        clearTextOnFocus={true}
        placeholder="Discover"
      />
      <Profile />
      <View>
        <Button 
          title= "Press me" 
          onPress={() => setCurrentProfileIndex(currentProfileIndex == profiles.length - 1 ? 
              0 : 
              currentProfileIndex + 1
          )}
        />
      </View>
      <View>
        {
        profiles[currentProfileIndex] &&
          <Image
            key={profiles[currentProfileIndex].id}
            style = {{
              width: 300,
              height: 300,
            }}
            source={profiles[currentProfileIndex].actualimage} 
          />
        }
      </View>
    </View>

    
  );
};

// const profiles = require('./assets/input_profiles/profiles.json');
const profiles = ProfileType [
  {
    id: "1",
    actualimage: require("./images/image1.jpeg"),
  },
  {
    id: "2",
    actualimage: require("./images/image2.jpg"),
  },
  {
    id: "3",
    actualimage: require("./images/image3.jpg"),
  },
  {
    id: "4",
    actualimage: require("./images/image4.jpg"),
  },
];

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Discover;
