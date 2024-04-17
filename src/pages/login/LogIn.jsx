import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import CommonButton from "../../components/commonbutton/CommonButton";
import { LoginButtons } from "../../components/datamodule/DataModule";
import { useNavigation } from "@react-navigation/native";
import ForgotPassword from "../forgotpassword/ForgotPassword";
import { BlurView } from "expo-blur";
import themeContext from "../../components/theme/themeContext";

const LogIn = () => {
  const navigation = useNavigation();

  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);

  const handleForgotPasswordPress = () => {
    setForgotPasswordVisible(true);
  };

  const handleCloseForgotPassword = () => {
    setForgotPasswordVisible(false);
  };

  const theme = useContext(themeContext);

  return (
    <View style={[styles.container , {backgroundColor:theme.background}]}>
      <Text style={commonStyles.onboardingHeading}>Welcome Back!</Text>
      <Text style={commonStyles.paragraph}>Login to account </Text>
      <View style={styles.input_container}>
        <TextInput style={[styles.input , {color:theme.color}]} placeholder="Username" placeholderTextColor={theme.color}/>
        <TextInput style={[styles.input , {color:theme.color}]} placeholder="Password" placeholderTextColor={theme.color} secureTextEntry/>
        <TouchableOpacity>
          <Text
            style={styles.forgotPasswordText}
            onPress={handleForgotPasswordPress}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <CommonButton
        label="Login"
        bgColor={theme.coloring}
        color="white"
        onPress={() => navigation.navigate("Tabs")}
      />
      <Text style={styles.continueWith}>Or Continue With</Text>
      <View style={styles.logindatacontain}>
        {LoginButtons.map((items) => (
          <TouchableOpacity style={styles.loginbuttons} key={items.id}>
            <Image source={items.image} style={styles.image} />
            <Text>{items.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.signup}>
        <Text style={commonStyles.paragraph}>Don’t have an account?</Text>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </Text>
      </View>
      {forgotPasswordVisible && (
        <ForgotPassword onClose={handleCloseForgotPassword} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "30%",
  },
  input: {
    borderColor: "#9C9C9C",
    width: "100%",
    borderWidth: 1,
    borderRadius: 30,
    padding: 15,
    marginBottom: 30,
  },
  input_container: {
    paddingTop: 50,
    paddingBottom: 30,
    width: "90%",
  },
  forgotPasswordText: {
    color: "#A4A4A4",
    textAlign: "right",
  },
  continueWith: {
    color: "#A4A4A4",
    marginBottom: 20,
  },
  logindatacontain: {
    width: "90%",
  },
  loginbuttons: {
    paddingTop: 20,
    paddingRight: 25,
    paddingBottom: 20,
    // width:'100%',
    justifyContent: "center",
    paddingLeft: 25,
    borderRadius: 30,
    marginBottom: 10,
    gap: 15,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F4F4F4",
  },
  image: {
    // width: 20,
    // height: 15,
    resizeMode: "contain",
  },
  signup: {
    padding: 10,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  signupText: {
    color: "#FF6B00",
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default LogIn;
