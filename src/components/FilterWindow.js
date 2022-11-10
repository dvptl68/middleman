import React, { useEffect, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { FilterWindowStyles } from '../styles/Styles';

const FilterWindow = (props) => {
  return (
    <>
      <View style={FilterWindowStyles.filtersContainer}>
        
      </View>
      <Button title="filter" onPress={() => props.fetchData()} />
    </>
  );
};

export default FilterWindow;
