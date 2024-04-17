import React from "react";
import { Text } from "react-native";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { HomeImageSlide } from "../datamodule/DataModule";

const { width } = Dimensions.get("window");

const ImageSlider = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
      {HomeImageSlide.map((item, index) => {
        return (
          <View key={index} style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlayText}>
              <Text style={styles.offertext}>50 -40% OFF</Text>
              <Text style={styles.offerpara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, Aenean
                commodo ligula eget dolor.
              </Text>
              <TouchableOpacity style={styles.buynowbtn}>
                <Text>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlayText: {
    position: "absolute",
    top: 35,
    left: 20,
    justifyContent: "center",
  },
  offertext: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  offerpara: {
    paddingTop: 8,
    paddingBottom: 10,
    color: "white",
    width: "30%",
    fontWeight: "500",
  },
  buynowbtn: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
});

export default ImageSlider;
