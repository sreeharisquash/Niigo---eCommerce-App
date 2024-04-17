import React, { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import {
  CategoryData,
  OfferBrandsData,
} from "../../components/datamodule/DataModule";
import ImageSlider from "../../components/imageslide/ImageSlider";
import FlashSaleSlide from "../../components/flashsaleslide/FlashSaleSlide";
import Drawer from "../../components/drawer/Drawer";
import Notification from "../../../assets/icons/notification-1.svg";
import LogoIcon from "../../../assets/icons/logo.svg";
import SideBarIcon from "../../../assets/icons/sidebaricon.svg";
import { useNavigation } from "@react-navigation/native";
import InctiveWishlistIcon from "../../../assets/icons/wishlistbef.svg";
import ActiveWishalistIcon from "../../../assets/icons/wishlistafter.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../components/wishlistslice/WishlistSlice";
import themeContext from "../../components/theme/themeContext";

const HomePage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigation = useNavigation();

  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const dispatch = useDispatch();

  const handleWishlist = (item) => {
    dispatch(addToWishlist({ ...item, pageIdentifier: "homepage" }));
  };

  const theme = useContext(themeContext);

  return (
    <>
      {isDrawerOpen && <Drawer closeDrawer={handleDrawer} />}
      <ScrollView>
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleDrawer}>
              <SideBarIcon color={theme.color} />
            </TouchableOpacity>
            <TouchableOpacity>
              <LogoIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <Notification color={theme.color} />
            </TouchableOpacity>
          </View>
          <View style={styles.category}>
            <Text
              style={[commonStyles.innerpageHeading, { color: theme.color }]}
            >
              Categories
            </Text>
            <TouchableOpacity>
              <Text style={{ color: theme.color }}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categdetail}>
            {CategoryData.map((item) => (
              <View style={styles.details} key={item.id}>
                {item.icon}
                <Text style={{ color: theme.color }}>{item.title}</Text>
              </View>
            ))}
          </View>
          <View style={styles.slidewrapper}>
            <ImageSlider />
          </View>
          <View style={styles.flashsalecontain}>
            <Text
              style={[commonStyles.innerpageHeading, { color: theme.color }]}
            >
              Flash Sale
            </Text>
            <TouchableOpacity>
              <Text style={{ color: theme.color }}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.flashslide}>
            <FlashSaleSlide />
          </View>
          <View style={styles.brands}>
            <Text
              style={[commonStyles.innerpageHeading, { color: theme.color }]}
            >
              Offers brands
            </Text>
            <TouchableOpacity>
              <Text style={{ color: theme.color }}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.brandscontain}>
            {OfferBrandsData.map((item) => (
              <View key={item.id} style={styles.productContainer}>
                <TouchableOpacity
                  style={styles.inactiveicon}
                  onPress={() => handleWishlist(item)}
                >
                  {wishlistItems.some(
                    (wishlistItem) =>
                      wishlistItem.id === item.id &&
                      wishlistItem.pageIdentifier === item.pageIdentifier
                  ) ? (
                    <ActiveWishalistIcon />
                  ) : (
                    <InctiveWishlistIcon />
                  )}
                </TouchableOpacity>
                {item.image}
                <View style={styles.titleandpara}>
                  <Text style={[styles.title, { color: theme.color }]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.para, { color: theme.color }]}>
                    {item.para}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                    marginTop: 2,
                    width: "100%",
                    paddingLeft: 10,
                  }}
                >
                  <Text style={[styles.price, { color: theme.color }]}>
                    ${item.price}
                  </Text>
                  <Text style={[styles.previousPrice, { color: theme.color }]}>
                    ${item.previousPrice}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: "15%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 100,
    // padding: 25,
    backgroundColor: "white",
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  category: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  categdetail: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details: {
    justifyContent: "center",
    alignItems: "center",
  },
  slidewrapper: {
    // flex:1,
    // padding: 20,
    width: "100%",
    height: 310,
  },
  flashsalecontain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flashslide: {
    marginTop: 15,
    height: 250,
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
  brands: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandscontain: {
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productContainer: {
    width: "50%",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  para: {
    marginTop: 2,
  },
  titleandpara: {
    width: "90%",
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
  inactiveicon: {
    position: "absolute",
    right: 23,
    top: 15,
    zIndex: 99,
  },
});

export default HomePage;
