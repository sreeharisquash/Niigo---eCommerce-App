import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { FlashSaleData } from "../datamodule/DataModule";
import themeContext from "../theme/themeContext";
// import ActiveWishlist from "../../../assets/icons/wishlistbef.svg";
// import { useDispatch } from "react-redux";
// import { addToWishlist } from "../wishlistslice/WishlistSlice";

const FlashSaleSlide = () => {
  const slidesPerScreen = 3;

  // const dispatch = useDispatch();

  // const handleWishlist = (item) => {
  //   dispatch(addToWishlist(item));
  // };

  const theme = useContext(themeContext);

  const renderItem = ({ item }) => (
    <View style={[styles.slide , {backgroundColor:theme.background}]} key={item.id}>
      <View>{item.image}</View>
      <Text style={[styles.producttitle , {color:theme.color}]}>{item.title}</Text>
      <View style={styles.price}>
        <Text style={[{ fontWeight: "500", fontSize: 12 } , {color:theme.color}]}>${item.price}</Text>
        <Text style={[{ fontSize: 12, textDecorationLine: "line-through"} , {color:theme.color}]}>
          ${item.cutoff}
        </Text>
      </View>
    </View>
  );

  return (
    <Carousel
      data={FlashSaleData}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={400 / slidesPerScreen}
      layout={"default"}
      loop={true}
      inactiveSlideOpacity={1}
      //   inactiveSlideScale={1}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 5,
    position: "relative",
    paddingBottom:15
  },
  image: {
    width: "90%",
    height: "70%",
    resizeMode: "contain",
  },
  price: {
    flexDirection: "row",
    gap: 15,
  },
  producttitle: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 18,
    letterSpacing: 0.01,
    textAlign: "left",
  },
  wishlisticon: {
    position: "absolute",
    top: 35,
    right: 15,
    zIndex: 99,
  },
});

export default FlashSaleSlide;
