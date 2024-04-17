import React, { useContext, useState } from "react";
import { Modal, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/header/Header";
import ProfileIcon from "../../../assets/icons/profileicon.svg";
import { DrawerTabs } from "../../components/datamodule/DataModule";
import LogoutIcon from "../../../assets/icons/profilelogout.svg";
import TabArrow from "../../../assets/icons/tabsarrow.svg";
import LogoutImg from "../../../assets/icons/logout.svg";
import CommonButton from "../../components/commonbutton/CommonButton";
import themeContext from "../../components/theme/themeContext";

const Profile = () => {
  const navigation = useNavigation();
  const [isPopupOn, setIsPopupOn] = useState(false);

  const handleLogout = () => {
    setIsPopupOn(true);
  };

  const handleCancel = () => {
    setIsPopupOn(false);
  };

  const handleGoToLogin = () => {
    navigation.navigate("Login");
  };

  const theme = useContext(themeContext);

  const buttonsData = [
    {
      id: 1,
      label: "Cancel",
      border: 0.5,
      bgcolor: "white",
      color: "black",
      function: handleCancel,
    },
    {
      id: 2,
      label: "Logout",
      border: 0,
      bgcolor: theme.coloring,
      color: "white",
      function: handleGoToLogin,
    },
  ];

  return (
    <>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Header />
        <View style={styles.imagecontain}>
          <ProfileIcon />
        </View>
        <View
          style={[styles.profiledetail, { backgroundColor: theme.background }]}
        >
          <View>
            <Text
              style={[
                commonStyles.innerpageHeading,
                { fontSize: 20 },
                { color: theme.color },
              ]}
            >
              Devon Lane
            </Text>
            <Text style={[commonStyles.paragraph, { textAlign: "left" }]}>
              devonlane@gmail.com
            </Text>
            <Text style={[commonStyles.paragraph, { textAlign: "left" }]}>
              121-224-7890
            </Text>
          </View>
          <Text
            style={{ color: theme.tabactive, fontWeight: 400 }}
            onPress={() => navigation.navigate("Editprofile")}
          >
            Edit
          </Text>
        </View>
        <View style={styles.tabs}>
          {DrawerTabs.map((items) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
              key={items.id}
              onPress={() => navigation.navigate(items.link)}
            >
              <View
                style={{
                  marginBottom: "8%",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                {React.cloneElement(items.icon, { color: theme.coloring })}
                <Text style={{ color: theme.color }}>{items.title}</Text>
              </View>
              <TabArrow color={theme.color} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.logout}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 10,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onPress={handleLogout}
        >
          <LogoutIcon color={theme.coloring} />
          <Text style={[{ fontWeight: 500 }, { color: theme.color }]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      {isPopupOn && (
        <View style={styles.popupOverlay}>
          <TouchableOpacity
            style={styles.popupOverlayTouchable}
            activeOpacity={1}
            onPress={() => setIsPopupOn(false)}
          />
          {/* Your existing modal content */}
          <Modal
            animationType="slide"
            transparent={false}
            bac
            visible={isPopupOn}
            onRequestClose={() => setIsPopupOn(false)}
          >
            <View
              style={[
                styles.popupcontainer,
                { backgroundColor: theme.popupContain },
              ]}
            >
              <LogoutImg color={theme.coloring}/>

              {/* Logout and Navigate Button */}
              <Text
                style={[
                  { fontWeight: "500", marginTop: 20 },
                  { color: theme.color },
                ]}
              >
                Are you sure want to logout?
              </Text>
              <View style={styles.btncontainer}>
                {buttonsData.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={{
                      width: "40%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CommonButton
                      label={item.label}
                      color={item.color}
                      bgColor={item.bgcolor}
                      borderwidth={item.border}
                      onPress={item.function}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Modal>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "10%",
    backgroundColor: "white",
  },
  imagecontain: {
    paddingTop: "10%",
    alignItems: "center",
    paddingBottom: "10%",
  },
  profiledetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F1F1F1",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
  },
  tabs: {
    paddingTop: "10%",
    paddingBottom: "10%",
  },
  logout: {
    position: "absolute",
    flexDirection: "row",
    gap: 10,
    bottom: "15%",
    width: "100%",
  },
  popupcontainer: {
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "90%",
    marginTop: "50%",
    paddingTop: "10%",
    paddingBottom: "10%",
    borderRadius: 30,
  },
  btncontainer: {
    flexDirection: "row",
    gap: 15,
    paddingTop: "5%",
  },
  popupOverlayTouchable: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: "red",
    zIndex: 1000,
  },
  popupOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
