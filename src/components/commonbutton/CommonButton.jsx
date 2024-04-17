import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CommonButton = ({ label, bgColor, style , onPress , color , borderwidth}) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor , borderWidth:borderwidth}, style]} onPress={onPress}>
      <Text style={[styles.buttonText , {color:color}]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 20,
    paddingRight: 25,
    paddingBottom: 20,
    paddingLeft: 25,
    borderRadius: 30,
    marginBottom: 20,
    width: "90%",
  },
  buttonText: {

    textAlign: 'center',
  },
});

export default CommonButton;
