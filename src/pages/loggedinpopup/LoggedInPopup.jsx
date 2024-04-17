import React, { useContext, useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const LoggedInPopup = () => {
    const navigation = useNavigation()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          navigation.navigate("Login"); 
        }, 3000);
    
        return () => clearTimeout(timeoutId);
      }, [navigation]);
    
    
    const theme = useContext(themeContext);

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/successscreen.png")}/>
      <Text style={[commonStyles.innerpageHeading , {color:theme.color}]}>Congratulations</Text>
      <Text style={[commonStyles.paragraph , {textAlign:"center"}]}>Your account is ready to use. You will be redirected to the next page in a few seconds.</Text>
      <ActivityIndicator color="#0300AA" size="large"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:"30%",
    paddingLeft:"10%",
    paddingRight:"10%",

    justifyContent:"center",
    alignItems:"center",
    gap:10
  },
});
export default LoggedInPopup;
