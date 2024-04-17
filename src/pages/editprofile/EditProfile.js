import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ScrollView } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import {
  profileDetailChangePassword,
  profileDetailInputData,
} from "../../components/datamodule/DataModule";
import { underlineColorAndroid } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import Header from "../../components/header/Header";

const EditProfile = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <View
          style={{
            flexDirection: "row",
            gap: 30,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={handleGoBack}>
            <Image
              source={require("../../../assets/images/home/backbutton1.png")}
            />
          </TouchableOpacity>
          <Text style={commonStyles.innerpageHeading}>My Profile</Text>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/home/notification-1.png")}
            />
          </TouchableOpacity>
        </View> */}
        <Header title="My Profile"/>
        <View style={{ paddingTop: "10%" }}>
          <Text style={{ fontWeight: 500, fontSize: 18 }}>Profile Details</Text>
          <View style={{ paddingTop: "5%" }}>
            {profileDetailInputData.map((items) => (
              <TextInput
                key={items.id}
                placeholder={items.placeholder}
                left={<TextInput.Icon icon={items.icon} />}
                style={styles.input}
                underlineColor="transparent"
                theme={{
                  colors: {
                    primary: "transparent",
                    underlineColor: "transparent",
                  },
                }}
              />
            ))}
          </View>
        </View>
        <View style={{ paddingTop: "10%" }}>
          <Text style={{ fontWeight: 500, fontSize: 18 }}>Change Password</Text>
          <View style={{ paddingTop: "5%" }}>
            {profileDetailChangePassword.map((items) => (
              <TextInput
                key={items.id}
                placeholder={items.placeholder}
                secureTextEntry
                style={styles.input}
                left={<TextInput.Icon icon={items.icon} />}
                right={<TextInput.Icon icon="eye" />}
                underlineColor="transparent"
                theme={{
                  colors: {
                    primary: "transparent",
                    underlineColor: "transparent",
                  },
                }}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: "20%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "80%",
  },
  input: {
    borderWidth: 0.5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: "grey",
    marginBottom: "5%",
    backgroundColor: "white",
  },
});

export default EditProfile;
