import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../commonstylesheet/CommonStyles";
import CommonButton from "../commonbutton/CommonButton";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../theme/themeContext";

const OrderPlaced = () => {
    const navigation = useNavigation();

    const theme = useContext(themeContext);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/home/orderplace.png")}
      />
      <View style={{alignItems:"center"}}>
        <Text style={[commonStyles.innerpageHeading , {color:theme.color}]}>Order Placed!</Text>
        <Text style={[commonStyles.paragraph , {marginTop:"2%" , marginBottom:"2%"}]}>Your order will be delivered soon</Text>
        <Text style={{color:"#FF6B00" , fontWeight:500 , marginBottom:"3%" }}>THANK YOU!</Text>
        <CommonButton label="Track Order" bgColor={theme.coloring} color="white"/>
        <Text style={{color:"#0300AA"}} onPress={() => navigation.navigate("Clothing")}>Continue Shopping</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    backgroundColor: "white",
    borderColor: "grey",
    zIndex: 10,
    borderRadius: 40,
    paddingTop: "15%",
    paddingBottom: "25%",
  },
});
export default OrderPlaced;
