// ForgotPassword.js

import React, { useRef, useEffect, useState, useContext } from "react";
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import { Svg } from "react-native-svg";
import { TextInput } from "react-native";
import CommonButton from "../../components/commonbutton/CommonButton";
import OtpVerification from "../otpverification/OtpVerification";
import BackButton from '../../../assets/icons/backbutton.svg'
import themeContext from "../../components/theme/themeContext";

const ForgotPassword = ({ onClose }) => {

  const theme = useContext(themeContext);

  const translateY = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  const handleClose = () => {
    Animated.timing(translateY, {
      toValue: 400,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onClose());
  };

  const [isOtpVerify, setIsOtpVerify] = useState(false);

  const handlenavigate = () => {
    setIsOtpVerify(true);
  };

  const bg = theme.forgotPassBg;

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        backgroundColor: bg,
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
        position: "absolute",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        width: "100%",
        zIndex: 99,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      {!isOtpVerify ? (
        <>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TouchableOpacity onPress={handleClose}>
              <BackButton color={theme.color}/>
              {/* <Text>Close</Text> */}
            </TouchableOpacity>
            <Text style={[commonStyles.innerpageHeading , {color:theme.color}]}>Forgot Password </Text>
          </View>
          <Text style={[{ marginTop: 10, marginBottom: 20 } , {color:theme.color}]}>
            We will send you a message to set or reset your new password
          </Text>
          <TextInput style={[styles.input , {color:theme.color}]} placeholder="Email" keyboardType="email-address" placeholderTextColor={theme.color}/>
          <View style={styles.continuebutton}>
            <CommonButton
              label="Continue"
              bgColor="#0300AA"
              color="white"
              onPress={handlenavigate}
            />
            <Text style={[{ textAlign: "center" } , {color:theme.color}]}>
              By continuing, you agree to Shopping{" "}
              <Text style={{ color: "red" }}>Conditions of Use </Text>and{" "}
              <Text style={{ color: "red" }}>Privacy Notice.</Text>
            </Text>
          </View>
        </>
      ) : (
        <OtpVerification onClose={handleClose} />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  forgotpassword: {},
  input: {
    borderColor: "#9C9C9C",
    width: "100%",
    borderWidth: 1,
    borderRadius: 30,
    padding: 15,
    marginBottom: 30,
  },
  continuebutton: {
    // width:"100%",
    // justifyContent: "center",
    alignItems: "center",
  },
  termsandprivacy: {},
});

export default ForgotPassword;
