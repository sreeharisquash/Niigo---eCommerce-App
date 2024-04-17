import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import BackButton from "../../../assets/icons/backbutton.svg";
import { useNavigation } from "@react-navigation/native";
import Notification from "../../../assets/icons/notification-1.svg";
import { commonStyles } from "../commonstylesheet/CommonStyles";
import themeContext from "../theme/themeContext";

const Header = ({ title }) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigate = () => {
    navigation.navigate("Notifications")
  }

  const theme = useContext(themeContext);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          gap: 30,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleGoBack}>
          <BackButton color={theme.color}/>
        </TouchableOpacity>
        <Text style={[commonStyles.innerpageHeading , {color:theme.color}]}>{title}</Text>
        <TouchableOpacity onPress={handleNavigate}>
          <Notification color={theme.color}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
