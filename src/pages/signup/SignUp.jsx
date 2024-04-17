import React, { useContext, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CommonButton from "../../components/commonbutton/CommonButton";
import { SignUpButtons } from "../../components/datamodule/DataModule";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import CheckBox from "react-native-check-box";
import themeContext from "../../components/theme/themeContext";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {

  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.loginbuttons, index % 2 !== 0 && { marginLeft: 20 }]}
      key={item.id}
    >
      <Image source={item.image} style={styles.image} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };

  const theme = useContext(themeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={commonStyles.onboardingHeading}>Sign up</Text>
      <Text style={commonStyles.paragraph}>Create new account</Text>
      <View style={styles.input_container}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <View style={styles.checkboxcontain}>
          <CheckBox
            style={{ flex: 1, padding: 10 }}
            onClick={handleCheckBoxClick}
            isChecked={isChecked}
            checkBoxColor={isChecked ? "blue" : "grey"}
          />
          <Text style={{color:theme.color}}>
            By clicking the <Text style={{ color: "#FF6B00" }}>Sign Up</Text>
            {" button, you agree to the public offer"}
          </Text>
        </View>
      </View>
      <CommonButton label="Sign Up" bgColor={theme.coloring} color="white" onPress={() => navigation.navigate("Tabs")}/>
      <Text style={[styles.continueWith , {color:theme.color}]}>Or Continue With</Text>
      <View style={[styles.signupBtns , { backgroundColor: theme.background }]}>
        {SignUpButtons.map((item, index) => (
          <TouchableOpacity
            style={[styles.loginbuttons, index % 2 !== 0 && { marginLeft: 20 }]}
            key={item.id}
          >
            <Image source={item.image} style={styles.image} />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    color: "#474747",
    //   textAlign: "center",
  },
  continueWith: {
    color: "#A4A4A4",
    // marginBottom: 0,
  },
  logindatacontain: {
    marginTop: -10,
  },
  loginbuttons: {
    paddingTop: 20,
    paddingRight: 45,
    paddingBottom: 20,
    // width:'100%',
    justifyContent: "center",
    marginBottom: "5%",
    paddingLeft: 45,
    borderRadius: 30,
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
  checkboxcontain: {
    width: "80%",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 20,
    // marginLeft:"auto",
    // marginRight:"auto"
  },
  signupBtns:{
    paddingTop:"5%",
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"center",
  }
});

export default SignUp;
