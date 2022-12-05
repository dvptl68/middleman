import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { MainViewStyles } from './styles/Styles';
import Discover from './pages/Discover';
import Matchmaking from './pages/Matchmaking';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

const MainView = (props) => {
  const [tabs] = useState([
    (props['orientation'] === 'straight') ? <Discover key={1} {...props} /> : <Matchmaking key={1} {...props} />,
    <Chat key={2} {...props} />,
    <Profile key={3} {...props} />,
  ]);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <View style={MainViewStyles.pageContainer}>{tabs[activeTab]}</View>
      <View style={MainViewStyles.tabsContainer}>
        {[(props['orientation'] === 'straight') ? 'discover' : 'matchmaking', 'chat', 'profile'].map((tabName, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={
                activeTab === i
                  ? MainViewStyles.boldedCurvedSingleTabContainer
                  : MainViewStyles.singleTabContainer
              }
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
