import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { FlatList, Image } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeAllItems,
  selectTotalAmount,
} from "../../components/cartreducer/CartReducer";
import ProductDetail from "../productdetail/ProductDetail";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import CommonButton from "../../components/commonbutton/CommonButton";
import CouponIcon from '../../../assets/icons/couponicon.svg'
import AwesomeAlert from "react-native-awesome-alerts";
import { Svg } from "react-native-svg";
import BackButton from '../../../assets/icons/backbutton.svg'
import themeContext from "../../components/theme/themeContext";
import Header from "../../components/header/Header";
import DrawerHeader from "../../components/drawerdetailheader/DrawerHeader";
import { color } from "react-native-elements/dist/helpers";

const Cart = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const cart = useSelector((state) => state.cart.cart);
  console.log("cartincart", cart.length);
  const dispatch = useDispatch();
  const totalAmount = useSelector(selectTotalAmount);
  const [showAlert, setShowAlert] = useState();

  const handleRemoveAll = () => {
    dispatch(removeAllItems());
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity({ id: itemId }));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity({ id: itemId }));
  };

  const handleCheckOut = () => {
    if (totalAmount <= 0) {
      setShowAlert(true);
    } else {
      navigation.navigate("Checkout");
    }
  };

  const theme = useContext(themeContext)

  return (
    <ScrollView style={{backgroundColor:theme.background}}>
      <View style={[styles.container, {backgroundColor:theme.background}]}>
        <AwesomeAlert
          show={showAlert}
          title="Hello"
          message="Add some products first"
          onDismiss={() => setShowAlert(false)}
        />
          <DrawerHeader title="My Cart"/>
  
        <View style={styles.head}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 16,
            color:theme.color}}
          >
            Items:
          </Text>
          <Text style={[styles.remove ,  {color:theme.color}]} onPress={handleRemoveAll}>
            Remove all
          </Text>
        </View>
        <View>
          {cart.map((item) => (
            <View key={item.productId} style={styles.products}>
              <View>
                <Svg
                  width={100} 
                  height={100}
                  viewBox="0 0 350 350" 
                >
                  {item.productimage}
                </Svg>
              </View>
              <View style={{ width: "50%" }}>
                <Text style={[commonStyles.innerpageHeading, { fontSize: 20 } , {color:theme.color}]}>
                  {item.productName}
                </Text>
                <Text style={{ color: "#FF6B00" }}>Free Delivery</Text>
                <Text style={[commonStyles.innerpageHeading, { fontSize: 17 }  , {color:theme.color}]}>
                  ${item.productprice}.00
                </Text>
                <View style={{ width: "70%" }}>
                  <View style={[styles.quantity , {backgroundColor:theme.coloring}]}>
                    <Text
                      style={{ color: "white", fontSize: 30 }}
                      onPress={() => handleDecrement(item.id)}
                    >
                      -
                    </Text>
                    <Text style={{ color: "white", fontSize: 17 }}>
                      {item.quantity}
                    </Text>
                    <Text
                      style={{ color: "white", fontSize: 30 }}
                      onPress={() => handleIncrement(item.id)}
                    >
                      +
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View
          style={{
            paddingTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={[commonStyles.paragraph  , {color:theme.color}]}>Total item :</Text>
          <Text style={[commonStyles.innerpageHeading, { fontSize: 20 } , {color:theme.color}]}>
            ${totalAmount.toFixed(2)}
          </Text>
        </View>
        <View style={{ paddingTop: 20, paddingBottom: 20 }}>
          <View style={styles.coupon}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <CouponIcon color={theme.coloring}/>
              <TextInput
                style={[styles.input , {color:theme.color}]}
                // onChangeText={onChangeText}
                placeholder="Enter Coupon code"
                placeholderTextColor={theme.color}
              />
            </View>

            <View style={[styles.applybtn , {backgroundColor:theme.coloring}]}>
              <Text style={{ color: "white" }}>Apply</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <CommonButton
            label="Checkout"
            bgColor={theme.coloring}
            color="white"
            onPress={handleCheckOut}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 100,
    backgroundColor: "white",
  },
  head: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  remove: {
    color: "#474747",
    fontSize: 16,
  },
  products: {
    paddingTop: "7%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  quantity: {
    marginTop: 10,
    borderRadius: 50,
    // backgroundColor: "#0300AA",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    // paddingBottom: 5,
    // paddingTop: 5,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  coupon: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    height: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  applybtn: {
    // backgroundColor: "#0300AA",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {},
});

export default Cart;
