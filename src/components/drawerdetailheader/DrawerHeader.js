import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { commonStyles } from "../commonstylesheet/CommonStyles";
import { Image } from "react-native";
import BackButton from "../../../assets/icons/backbutton.svg";
import themeContext from "../theme/themeContext";
// import BackButton from "../../../assets/svg/BackButton";

const DrawerHeader = ({title}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const theme = useContext(themeContext);

  return (
    <View>
      <View style={{ flexDirection: "row" , alignItems:"center"}}>
        <TouchableOpacity onPress={handleGoBack}>
          <BackButton color={theme.color}/>
        </TouchableOpacity>
        <Text
          style={[
            commonStyles.innerpageHeading,
            { marginLeft: "auto", marginRight: "auto" },
            {color:theme.color}
          ]}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default DrawerHeader;
