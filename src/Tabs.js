import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Discover from './pages/Discover';
import Matchmaking from './pages/Matchmaking';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

const Tabs = () => {
  const [tabs] = useState([
    <Discover key={1} />,
    <Matchmaking key={2} />,
    <Chat key={3} />,
    <Profile key={4} />,
  ]);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <View style={styles.pageContainer}>{tabs[activeTab]}</View>
      <View style={styles.tabsContainer}>
        {['discover', 'matchmaking', 'chat', 'profile'].map((tabName, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.singleTabContainer}
              onPress={() => setActiveTab(i)}
            >
              <Image
                style={styles.buttons}
                source={require(`./../assets/images/${tabName}.png`)}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 8,
    borderWidth: 5,
    borderColor: 'green',
  },
  tabsContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'red',
  },
  singleTabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'blue',
  },
  buttons: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
});

export default Tabs;
