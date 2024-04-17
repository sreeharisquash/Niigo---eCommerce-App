import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "rn-range-slider";
import themeContext from "../theme/themeContext";

const CustomRangeSlider = () => {

  const theme = useContext(themeContext);

  const handleValueChange = (low, high) => {
  };

  const renderThumb = (thumbIndex) => {
    return <View style={[styles.thumb , {backgroundColor:theme.coloring}]} />;
  };

  const renderRail = () => {
    return <View style={[styles.rail , {backgroundColor:theme.coloring}]} />;
  };

  const renderRailSelected = () => {
    return <View style={[styles.railSelected , {backgroundColor:theme.coloring}]} />;
  };

  const renderLabel = (value) => {
    return (
      <Text style={[styles.label , {color:theme.coloring}]}>
        {value === 0 ? "Low" : value === 100 ? "High" : value}
      </Text>
    );
  };

  return (
    <View>
      <Slider
        style={styles.slider}
        min={0}
        max={1000}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        
        onValueChanged={(low, high) => handleValueChange(low, high)}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: "100%",
  },
  thumb: {
    width: 20,
    height: 20,
    // backgroundColor: "#0300AA",
    borderRadius: 100,
  },
  rail: {
    height: 5,
    backgroundColor: "red",
  },
  railSelected: {
    height: 5,
    backgroundColor: "#0300AA",
  },
  label: {
    position: "absolute",
    top: -20,
    fontWeight: "bold",
    fontSize: 12,
    color: "#0300AA",
  },
});

export default CustomRangeSlider;
