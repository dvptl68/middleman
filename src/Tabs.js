import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Discover from './pages/Discover';

const Tabs = (props) => {
  const [tabs] = useState([<Discover/>]);
  return tabs[0];
};

const styles = StyleSheet.create({

});

export default Tabs;
