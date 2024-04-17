import React, { useContext, useState } from "react";
import { ScrollView, Touchable, TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import CommonButton from "../../components/commonbutton/CommonButton";
import {
  ReviewData,
  SizesData,
  colors,
} from "../../components/datamodule/DataModule";
import Reviews from "../../components/reviews/Reviews";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../components/cartreducer/CartReducer";
import Notification from "../../../assets/icons/notification-1.svg";
import BackButton from "../../../assets/icons/backbutton.svg";
import CartIcon from '../../../assets/icons/carticon.svg'
import Rating from '../../../assets/icons/rating.svg'
import themeContext from "../../components/theme/themeContext";

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const theme = useContext(themeContext);

  const ButtonsData = [
    {
      id: "1",
      label: "Add to cart",
      bgcolor: "white",
      color: "black",
      width: 1,
    },
    { id: "2", label: "Buy Now", bgcolor: "#0300AA", color: "white" },
  ];

  const [color, setColor] = useState("Red");
  const [defaultSize, setDefaultSize] = useState("S");

  const {
    productId,
    productName,
    productimage,
    detaildescription,
    productprice,
  } = route.params;

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleAddToCart = () => {
    console.log("Adding to cart:", {
      productId,
      productName,
      productimage,
      detaildescription,
      productprice,
    });
    dispatch(
      addToCart({
        id: productId,
        productName,
        productimage,
        detaildescription,
        productprice,
      })
    );
  };

  return (
    <ScrollView>
      <View style={[commonStyles.container , {backgroundColor:theme.background}]}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
            <TouchableOpacity onPress={handleBackButton}>
              <BackButton color={theme.color}/>
            </TouchableOpacity>
            <Text style={[commonStyles.innerpageHeading , {color:theme.color}]}>{productName}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              {/* <Image source={require("../../../assets/images/carticon.png")} /> */}
              <CartIcon color={theme.color}/>
              
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
              <Notification color={theme.color}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imagecontainanddetail}>
          <View style={{alignSelf:"center" , marginBottom:20}}>{productimage}</View>
          <Text style={[commonStyles.innerpageHeading , {color:theme.color}]}>Product Details </Text>
          <Text
            style={[
              commonStyles.paragraph,
              { textAlign: "left", marginTop: 7 },
            ]}
          >
            {detaildescription}
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 7,
              paddingTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{color:theme.color}}>4.5</Text>
            <Rating/>
            <Text style={{color:theme.color}}>(89 reviews)</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 8, paddingTop: 20 }}>
            <Text style={{ color: theme.coloring }}>18% off </Text>
            <Text style={[{ textDecorationLine: "line-through" } , {color:theme.color}]}> 1,200</Text>
            <Text style={[{ fontWeight: 500 } , {color:theme.color}]}>$1000</Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={[commonStyles.innerpageHeading , {color:theme.color}]}>
              Shipping & Returns
            </Text>
            <Text
              style={[
                commonStyles.paragraph,
                { textAlign: "left", marginTop: 5 },
              ]}
            >
              Free standard shipping and free 60-day returns
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "flex-end", gap: 10 }}
            >
              <Text style={[{ fontWeight: 500, marginTop: 15 } , {color:theme.color}]}>Color:</Text>
              <Text>{color}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 20, paddingTop: 10 }}>
              {colors.map((item) => (
                <TouchableOpacity
                  style={[styles.colors, { backgroundColor: item.color }]}
                  onPress={() => setColor(item.name)}
                  key={item.id}
                ></TouchableOpacity>
              ))}
            </View>
            <Text style={[{ fontWeight: 500, marginTop: 15 } , {color:theme.color}]}>Size:</Text>
            <View style={{ paddingTop: 10, flexDirection: "row", gap: 15 }}>
              {SizesData.map((item) => (
                <TouchableOpacity
                  style={[
                    styles.sizes,
                    {
                      backgroundColor:
                        defaultSize === item.size ? theme.coloring : "white",
                    },
                  ]}
                  key={item.id}
                  onPress={() => setDefaultSize(item.size)}
                >
                  <Text
                    style={{
                      color: defaultSize === item.size ? "white" : "black",
                    }}
                  >
                    {item.size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ flexDirection: "row", paddingTop: 20 }}>
              <View style={{ width: "50%" }}>
                <CommonButton
                  label="Add To Cart"
                  bgColor="white"
                  borderwidth={1}
                  onPress={handleAddToCart}
                />
              </View>
              <View style={{ width: "50%" }}>
                <CommonButton label="Apply" bgColor={theme.coloring} color="white" />
              </View>
            </View>
            <View style={{ paddingTop: 30 }}>
              <Text style={[commonStyles.innerpageHeading , {color:theme.color}]}>Reviews</Text>
              <Text
                style={[
                  commonStyles.paragraph,
                  { textAlign: "left", marginBottom: 25 },
                ]}
              >
                89 Reviews
              </Text>
              <Reviews data={ReviewData} />
            </View>
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
    paddingTop: "10%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagecontainanddetail: {
    paddingTop: 10,
    justifyContent: "center",
    // alignItems:"center"
  },
  colors: {
    borderWidth: 0.5,
    width: 30,
    height: 30,
    borderRadius: 100,
    padding: 10,
  },
  colorsbtn: {},
  sizes: {
    borderWidth: 0.5,
    width: 50,
    height: 50,
    borderRadius: 100,
    padding: 10,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductDetail;
