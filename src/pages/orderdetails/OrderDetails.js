import React, { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import DrawerHeader from "../../components/drawerdetailheader/DrawerHeader";
import {
  OderDetailsData,
  ShippngData,
} from "../../components/datamodule/DataModule";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../components/theme/themeContext";

const OrderDetails = ({ route }) => {
  const { orderId } = route.params;

  const navigation = useNavigation();

  const theme = useContext(themeContext);

  return (
    <ScrollView
      style={[
        commonStyles.scrollbackground,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={commonStyles.container}>
        <DrawerHeader title="Order Details" />
        <View
          style={[styles.orderdetails, { backgroundColor: theme.background }]}
        >
          <View style={styles.orders}>
            <Text style={{ color: theme.color }}>Order date:</Text>
            <Text style={[{ fontWeight: 500 }, { color: theme.color }]}>
              23/12/24
            </Text>
          </View>
          <View style={styles.orders}>
            <Text style={{ color: theme.color }}>Order no:</Text>
            <Text style={[{ fontWeight: 500 }, { color: theme.color }]}>
              {orderId}
            </Text>
          </View>
          <View style={styles.orders}>
            <Text style={{ color: theme.color }}>Order Total:</Text>
            <Text style={[{ fontWeight: 500 }, { color: theme.color }]}>
              $500.00
            </Text>
          </View>
          <View style={[styles.lining, { borderColor: theme.color }]}></View>
          <Text style={[{ fontWeight: 500 }, { color: theme.color }]}>
            Cancel items
          </Text>
        </View>
        <View style={styles.shippingdetails}>
          <Text
            style={[
              commonStyles.subheading,
              { marginBottom: 30 },
              { color: theme.color },
            ]}
          >
            Shipment Details
          </Text>
          {ShippngData.map((item) => (
            <TouchableOpacity
              style={[styles.products]}
              key={item.id}
              onPress={() =>
                navigation.navigate("Trackorder", {
                  image: item.image,
                  title: item.title,
                  size: item.size,
                  amount: item.amount,
                })
              }
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                {item.image}
                <View style={{ gap: 5 }}>
                  <Text style={[commonStyles.subheading, { fontSize: 16 }]}>
                    {item.title}
                  </Text>
                  <Text>Size: {item.size}</Text>
                  <Text style={styles.delivery}>Free Delivery</Text>
                </View>
              </View>
              <Text style={[commonStyles.subheading, { fontSize: 16 }]}>
                ${item.amount}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  orderdetails: {
    backgroundColor: "#F4F4F4",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: "10%",
  },
  orders: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  lining: {
    borderWidth: 0.5,
    borderColor: "#474747",
    marginBottom: 20,
  },
  shippingdetails: {
    paddingTop: "10%",
  },
  products: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },

  delivery: {
    color: "#FF6B00",
    fontSize: 14,
  },
});

export default OrderDetails;
