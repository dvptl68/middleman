import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { MainViewStyles } from './styles/Styles';
import Discover from './pages/Discover';
import Matchmaking from './pages/Matchmaking';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

const MainView = () => {
  const [tabs] = useState([
    <Discover key={1} />,
    <Matchmaking key={2} />,
    <Chat key={3} />,
    <Profile key={4} />,
  ]);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <View style={MainViewStyles.pageContainer}>{tabs[activeTab]}</View>
      <View style={MainViewStyles.tabsContainer}>
        {['discover', 'matchmaking', 'chat', 'profile'].map((tabName, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={MainViewStyles.singleTabContainer}
              onPress={() => setActiveTab(i)}
            >
              <Image
                style={MainViewStyles.buttons}
                source={require(`./../assets/images/${tabName}.png`)}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default MainView;
