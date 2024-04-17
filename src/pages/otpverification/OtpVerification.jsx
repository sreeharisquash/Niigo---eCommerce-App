import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import CommonButton from "../../components/commonbutton/CommonButton";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import ResetPassword from "../resetpassword/ResetPassword";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../../assets/icons/backbutton.svg";
import themeContext from "../../components/theme/themeContext";

const OtpVerification = ({ onClose }) => {
  const navigation = useNavigation();
  const [resetPassword, setResetPassword] = useState(false);

  const translateY = useRef(new Animated.Value(400)).current;

  const theme = useContext(themeContext);

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

  const handlenavigate = () => {
    setResetPassword(true);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <>
      {!resetPassword ? (
        <>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TouchableOpacity onPress={handleGoBack}>
              <BackButton color={theme.color} />
            </TouchableOpacity>
            <Text
              style={[commonStyles.innerpageHeading, { color: theme.color }]}
            >
              Enter 4 Digits Code
            </Text>
          </View>
          <Text
            style={[
              { marginTop: 10, marginBottom: 30 },
              { color: theme.color },
            ]}
          >
            Enter the 4 digits code that you received on your email.{" "}
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 30,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <TextInput
              style={[styles.otpInput, { color: theme.color }]}
              keyboardType="numeric"
              maxLength={1}
              placeholderTextColor={theme.color}
            />
            <TextInput
              style={[styles.otpInput, { color: theme.color }]}
              keyboardType="numeric"
              maxLength={1}
              placeholderTextColor={theme.color}
            />
            <TextInput
              style={[styles.otpInput, { color: theme.color }]}
              keyboardType="numeric"
              maxLength={1}
              placeholderTextColor={theme.color}
            />
            <TextInput
              style={[styles.otpInput, { color: theme.color }]}
              keyboardType="numeric"
              maxLength={1}
              placeholderTextColor={theme.color}
            />
          </View>

          <View style={styles.continuebutton}>
            <CommonButton
              label="Continue"
              bgColor="#0300AA"
              color="white"
              onPress={handlenavigate}
            />
            <Text style={[{ textAlign: "center" }, { color: theme.color }]}>
              By continuing, you agree to Shopping{" "}
              <Text style={{ color: "red" }}>Conditions of Use </Text>and{" "}
              <Text style={{ color: "red" }}>Privacy Notice.</Text>
            </Text>
          </View>
        </>
      ) : (
        <ResetPassword onClose={handleClose} />
      )}
    </>
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

export default OtpVerification;
