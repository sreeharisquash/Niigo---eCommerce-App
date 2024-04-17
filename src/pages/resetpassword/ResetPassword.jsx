import React, { useContext, useEffect, useRef, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CommonButton from '../../components/commonbutton/CommonButton'
import { commonStyles } from '../../components/commonstylesheet/CommonStyles';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../../assets/icons/backbutton.svg'
import themeContext from '../../components/theme/themeContext';

const ResetPassword = ({onClose}) => {
    
    const navigation = useNavigation();

    const theme = useContext(themeContext);

  return (
    <>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <TouchableOpacity onPress={onClose}>
        <BackButton color={theme.color}/>
      </TouchableOpacity>
      <Text style={[commonStyles.innerpageHeading , {color:theme.color}]}>
      Reset Password      </Text>
    </View>
    <Text style={[{ marginTop: 30, marginBottom: 30 } , {color:theme.color}]}>
    Set the new password for your account so you can login and access all the features.    </Text>
    <View>
      <TextInput style={[styles.input , {color:theme.color}]} placeholder="New Password" placeholderTextColor={theme.color}/>
        <TextInput style={[styles.input , {color:theme.color}]} placeholder="Re-enter Password" placeholderTextColor={theme.color}/>
    </View>

    <View style={styles.continuebutton}>
      <CommonButton
        label="Continue"
        bgColor="#0300AA"
        color="white"
        onPress={() => navigation.navigate("Success")}
      />
      <Text style={[{ textAlign: "center" } , {color:theme.color}]}>
        By continuing, you agree to Shopping{" "}
        <Text style={{ color: "red" }}>Conditions of Use </Text>and{" "}
        <Text style={{ color: "red" }}>Privacy Notice.</Text>
      </Text>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
    forgotpassword: {},
    input: {
      borderColor: "#9C9C9C",
      width: "100%",
      borderWidth: 1,
      borderRadius: 30,
      padding: 15,
      marginBottom: 20,
    },
    continuebutton: {
      // width:"100%",
      // justifyContent: "center",
      alignItems: "center",
    },
    otpInput: {
      borderColor: "#9C9C9C",
      borderWidth: 1,
      borderRadius: 10,
      width: 50,
      height: 50,
      fontSize: 16,
      textAlign: "center",
      marginBottom: 20,
    },
  });
  

export default ResetPassword