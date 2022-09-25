import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Discover from './pages/Discover';
import Matchmaking from './pages/Matchmaking';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

const Tabs = (props) => {
  const [tabs] = useState([<Discover />, <Matchmaking />, <Chat />, <Profile />]);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <View style={styles.pageContainer}>
        {tabs[activeTab]}
      </View>
      <View style={styles.tabsContainer}>
        <View style={styles.singleTabContainer}>
          <Text onPress={() => setActiveTab(0)}>
            Discover
          </Text>
        </View>
        <View style={styles.singleTabContainer}>
          <Text onPress={() => setActiveTab(1)}>
            Matchmaking
          </Text>
        </View>
        <View style={styles.singleTabContainer}>
          <Text onPress={() => setActiveTab(2)}>
            Chat
          </Text>
        </View>
        <View style={styles.singleTabContainer}>
          <Text onPress={() => setActiveTab(3)}>
            Profile
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 3,
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
    borderColor: 'green',
  },
});

export default Tabs;
