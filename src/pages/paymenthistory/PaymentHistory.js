import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import { Header } from "react-native-elements/dist/header/Header";
import DrawerHeader from "../../components/drawerdetailheader/DrawerHeader";
import { PaymentHistoryData } from "../../components/datamodule/DataModule";
import themeContext from "../../components/theme/themeContext";

const PaymentHistory = () => {

  const theme = useContext(themeContext);

  return (
    <View style={[commonStyles.container, {backgroundColor:theme.background}]}>
      <DrawerHeader title="Payment History" />
      <View
        style={{ paddingTop: "10%", paddingLeft: "3%", paddingRight: "3%" }}
      >
        {PaymentHistoryData.map((item) => (
          <View key={item.id} style={styles.paymenthistorycontainer}>
            <View style={{flexDirection:"row" , alignItems:"center" , gap:20}}>

            {item.image}

            <View style={styles.cardicon}>
              <Text style={[commonStyles.innerpageHeading, { fontSize: 18 } , {color:theme.color}]}>
                {item.paymentmode}
              </Text>
              <Text style={{color:theme.color}}>{item.date} at {item.time}</Text>
            </View>
            </View>
            <Text style={[styles.amount, { fontWeight: 600 } , {color:theme.color}]}>
              ${item.amount} 
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymenthistorycontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  //   cardicon: {
  //     flexDirection: "row",
  //     gap: 10,
  //   },
  amount: {
    color: "#0300AA",
    fontSize: 15,
  },
});
export default PaymentHistory;
