import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import HomePage from "../../pages/home/HomePage";
import Category from "../category/Category";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cart from "../../pages/cart/Cart";
import Profile from "../../pages/profile/Profile";
import Wallet from "../../pages/wallet/Wallet";
import HomeLogo from "../../../assets/icons/home-2.svg";
import CategoryIcon from "../../../assets/icons/categories.svg";
import CartIcon from "../../../assets/icons/cart.svg";
import ProfileIcon from "../../../assets/icons/profile.svg";
import WalletIcon from '../../../assets/icons/wallet-1.svg'
import themeContext from "../theme/themeContext";

const PageWrapper = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navigation = useNavigation();

  const theme = useContext(themeContext);

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <HomePage />;
      case "Categories":
        return <Category />;
      case "Cart":
        return <Cart />;
      case "Wallet":
        return <Wallet />;
      case "Profile":
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      <View style={[styles.tabContainer ,  {backgroundColor:theme.background}]}>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "space-around" }}
          onPress={() => setActiveTab("Home")}
        >
          <HomeLogo color={activeTab==="Home" ? theme.tabactive : theme.tabInactive}/>
          <Text style={{ color: activeTab === "Home" ? theme.tabactive : theme.tabInactive }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "space-around" }}
          onPress={() => setActiveTab("Categories")}
        >
          <CategoryIcon color={activeTab==="Categories" ? theme.tabactive : theme.tabInactive}/>
          <Text
            style={{ color: activeTab === "Categories" ? theme.tabactive : theme.tabInactive }}
          >
            Categories
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "space-around" }}
          onPress={() => {
            setActiveTab("Cart");
          }}
        >
          <CartIcon color={activeTab==="Cart" ? theme.tabactive : theme.tabInactive} />
          <Text style={{ color: activeTab === "Cart" ? theme.tabactive : theme.tabInactive }}>
            Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "space-around" }}
          onPress={() => {
            setActiveTab("Wallet");
          }}
        >
          <WalletIcon color={activeTab==="Wallet" ? theme.tabactive : theme.tabInactive}/>
          <Text style={{ color: activeTab === "Wallet" ? theme.tabactive : theme.tabInactive }}>
            Wallet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "space-around" }}
          onPress={() => setActiveTab("Profile")}
        >
          <ProfileIcon color={activeTab==="Profile" ? theme.tabactive : theme.tabInactive}/>
          <Text
            style={{ color: activeTab === "Profile" ? theme.tabactive :theme.tabInactive }}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: "white",
    gap: 42,
    padding: 25,
  },
});

export default PageWrapper;
