import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MatchmakingStyles } from '../styles/Styles';

const Matchmaking = (props) => {
  console.log(props);
  return (
    <View style={MatchmakingStyles.container}>
      <Text>Currently Matchmaking For:</Text>
      <View style={MatchmakingStyles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
        ]}
        renderItem={({item}) => <Text style={MatchmakingStyles.item}>{item.key}</Text>}
      />
    </View>
    </View>
  );
};

export default Matchmaking;
