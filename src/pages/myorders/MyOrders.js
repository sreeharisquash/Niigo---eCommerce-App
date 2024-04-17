import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import DrawerHeader from "../../components/drawerdetailheader/DrawerHeader";
import {
  DeliveredOrders,
  MyOrderData,
} from "../../components/datamodule/DataModule";
import OrderIcon from "../../../assets/icons/myordersicon.svg";
import DetailArrow from "../../../assets/icons/tabsarrow.svg";
import { useNavigation } from "@react-navigation/native";
import theme from "../../components/theme/theme";
import themeContext from "../../components/theme/themeContext";

const MyOrders = () => {
  const navigation = useNavigation();

  const theme = useContext(themeContext);

  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <View style={commonStyles.container}>
        <DrawerHeader title="My Orders" />
        <Text style={[commonStyles.subheading, { marginTop: "10%" }]}>
          Processing
        </Text>
        <View style={styles.itemscontainer}>
          {MyOrderData.map((item) => (
            <View style={styles.ordercontainer} key={item.id}>
              <View
                style={[
                  styles.individualdata,
                  { backgroundColor: theme.background },
                ]}
              >
                <OrderIcon />
                <View>
                  <Text style={[{ fontWeight: "500" }, { color: theme.color }]}>
                    Order {item.orderid}
                  </Text>
                  <Text style={{ color: theme.color }}>{item.items}</Text>
                </View>
                <TouchableOpacity
                  style={styles.absolute}
                  onPress={() => {
                    console.log("Item Order ID:", item.orderid);
                    navigation.navigate("Orderdetails", {
                      orderId: item.orderid,
                    });
                  }}
                >
                  <DetailArrow color={theme.color} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <Text style={[commonStyles.subheading, { marginTop: "10%" }]}>
          Delivered
        </Text>
        <View style={styles.itemscontainer}>
          {DeliveredOrders.map((item) => (
            <View style={[styles.ordercontainer]} key={item.id}>
              <View
                style={[
                  styles.individualdata,
                  { backgroundColor: theme.background },
                ]}
              >
                <OrderIcon />
                <View>
                  <Text style={[{ fontWeight: "500" }, { color: theme.color }]}>
                    Order {item.orderid}
                  </Text>
                  <Text style={{ color: theme.color }}>{item.items}</Text>
                </View>
                <TouchableOpacity
                  style={styles.absolute}
                  onPress={() =>
                    navigation.navigate("Orderdetails", {
                      orderid: item.orderid,
                    })
                  }
                >
                  <DetailArrow color={theme.color} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemscontainer: {
    paddingTop: "10%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  ordercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  individualdata: {
    backgroundColor: "#F1F1F1",
    padding: 15,
    flexDirection: "row",
    width: "100%",
    gap: 10,
    marginBottom: 15,
    borderRadius: 10,
  },
  absolute: {
    position: "absolute",
    right: 8,
    top: "50%",
  },
});

export default MyOrders;
