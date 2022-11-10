import React from 'react';
import { View, Text, Button } from 'react-native';
import { FilterWindowStyles } from '../styles/Styles';
import { Slider } from 'react-native-range-slider-expo';

const FilterWindow = (props) => {
  return (
    <>
      <View style={FilterWindowStyles.filtersContainer}>
        <View style={FilterWindowStyles.categoryContainer}>
          <Text style={FilterWindowStyles.text}>Age:</Text>
          <Slider
            min={18}
            max={80}
            valueOnChange={(value) => props.setUserAge(value)}
            initialValue={Math.min(Math.max(props.userAge, 18), 80)}
          />
        </View>
        <View style={FilterWindowStyles.categoryContainer}>
          <Text style={FilterWindowStyles.text}>Height (inches):</Text>
          <Slider
            min={60}
            max={80}
            valueOnChange={(value) => props.setUserHeight(value)}
            initialValue={Math.min(Math.max(props.userHeight, 60), 80)}
          />
        </View>
      </View>
      <Button title="filter" onPress={() => props.fetchData()} />
    </>
  );
};

export default FilterWindow;
