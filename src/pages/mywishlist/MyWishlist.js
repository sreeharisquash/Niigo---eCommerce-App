import React, { useContext } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import Header from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import ActiveWishlist from "../../../assets/icons/wishlistafter.svg";
import { removeFromWishlist } from "../../components/wishlistslice/WishlistSlice";
import themeContext from "../../components/theme/themeContext";
import { color } from "react-native-elements/dist/helpers";

const MyWishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);
  console.log("wishlist", wishlistItems);

  const dispath = useDispatch();
  
  const handleWishlist = (item) => {
    dispath(removeFromWishlist(item))
  }

  const theme = useContext(themeContext);

  return (
    <ScrollView style={[commonStyles.scrollbackground ,  {backgroundColor:theme.background}]}>
      <View style={commonStyles.container}>
        <Header title="My Wishlist" />
        <View style={styles.wishlistitems}>
          {wishlistItems.map((item) => (
            <View key={item.id} style={styles.productContainer}>
              <TouchableOpacity style={styles.activeicon} onPress={() => handleWishlist(item)}>
                <ActiveWishlist />
              </TouchableOpacity>
              {item.image}
              <View style={styles.titleandpara}>
                <Text style={[styles.title , {color:theme.color}]}>{item.title}</Text>
                <Text style={[styles.para , {color:theme.color}]}>{item.para}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 20,
                  marginTop: 3,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    width: "95%",
                    paddingLeft: 10,
                  }}
                >
                  <Text style={[styles.price , {color:theme.color}]}>${item.price}</Text>
                  <Text style={styles.previousPrice}>
                    ${item.previousPrice}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
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
    marginTop: "20%",
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
  flashslide: {
    marginTop: 15,
    height: 250,
  },
  productContainer: {
    width: "50%",
    marginBottom: 25,
    alignItems: "center",
  },
  para: {
    marginTop: 2,
  },
  titleandpara: {
    width: "85%",
    marginTop: 10,
    marginBottom: 7,
  },
  title: {
    fontWeight: "500",
    fontSize: 15,
  },
  price: {
    fontWeight: "500",
  },
  previousPrice: {
    textDecorationLine: "line-through",
    color: "grey",
    // fontSize: 15,
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
  },
  wishlistitems: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: "15%",
    position: "relative",
  },
  activeicon: {
    position: "absolute",
    right: 25,
    top: 15,
    zIndex: 99,
  },
});

export default MyWishlist;
