import React, { useRef, useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { commonStyles } from "../commonstylesheet/CommonStyles";
import { DrawerTabs } from "../datamodule/DataModule";
import { useNavigation } from "@react-navigation/native";
import LogoutImg from "../../../assets/icons/logout.svg";
import ProfileIcon from "../../../assets/icons/profileicon.svg";
import CommonButton from "../commonbutton/CommonButton";
import EditProfile from "../../../assets/icons/profileedit.svg";
import themeContext from "../theme/themeContext";
import LogoutIcon from "../../../assets/icons/logout.svg";

const Drawer = ({ closeDrawer }) => {
  const drawerWidth = useRef(new Animated.Value(0)).current;

  const [isPopupOn, setIsPopupOn] = useState(false);

  const navigation = useNavigation();

  const openDrawer = () => {
    Animated.timing(drawerWidth, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeAnimatedDrawer = () => {
    Animated.timing(drawerWidth, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => closeDrawer());
  };

  useEffect(() => {
    openDrawer();
    return () => {
      closeAnimatedDrawer();
    };
  }, []);

  const interpolatedWidth = drawerWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ["-100%", "0%"],
  });

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
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={closeAnimatedDrawer}
      />
      <Animated.View style={[styles.drawer, { left: interpolatedWidth }]}>
        <View style={[styles.headsection, { backgroundColor: theme.coloring }]}>
          <View style={styles.personprofile}>
            <ProfileIcon />
            <View>
              <Text
                style={[
                  commonStyles.innerpageHeading,
                  { color: "white", marginBottom: 5 },
                ]}
              >
                Devon Lane
              </Text>
              <Text style={{ color: "white", marginBottom: 2 }}>
                devonlane@gmail.com
              </Text>
              <Text style={{ color: "white" }}>(316) 555-0116</Text>
            </View>
          </View>
          <View style={styles.editprofile}>
            <EditProfile color={theme.coloringViceVersa} />
            <Text style={{ color: theme.coloringViceVersa }}>Edit Profile</Text>
          </View>
        </View>
        <View
          style={[styles.tabsection, { backgroundColor: theme.background }]}
        >
          {DrawerTabs.map((items) => (
            <TouchableOpacity
              style={styles.individualtabs}
              key={items.id}
              onPress={() => navigation.navigate(items.link)}
            >
              {React.cloneElement(items.icon, { color: theme.coloring })}
              <Text style={{ color: theme.color }}>{items.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.logout}>
          <TouchableOpacity onPress={handleLogout}>
            <View
              style={[styles.logoutbtn, { backgroundColor: theme.coloring }]}
            >
              <Image
                source={require("../../../assets/images/home/whitelogout.png")}
              />
              <Text style={{ color: "white" }}>Logout</Text>
            </View>
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
              visible={isPopupOn}
              onRequestClose={() => setIsPopupOn(false)}
            >
              <View
                style={[
                  styles.popupcontainer,
                  { backgroundColor: theme.popupContain }
                ]}
              >
                <LogoutImg color={theme.coloring} />

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
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: "absolute",
    top: 45,
    bottom: 0,
    zIndex: 999,
    width: "70%",
    height: "100%",
  },
  headsection: {
    backgroundColor: "#0300AA",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
    borderTopRightRadius: 30,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    zIndex: 998,
  },
  personprofile: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  editprofile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 20,
    marginLeft: "30%",
  },
  tabsection: {
    backgroundColor: "white",
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 50,
    borderBottomRightRadius: 30,
    height: "100%",
  },
  individualtabs: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  logout: {
    position: "absolute",
    bottom: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutbtn: {
    // backgroundColor: "#0300AA",
    paddingTop: 20,
    paddingRight: 40,
    paddingBottom: 20,
    paddingLeft: 40,
    borderRadius: 30,
    flexDirection: "row",
    gap: 15,
  },
  popupcontainer: {
    // backgroundColor: "lightgrey",
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
    backgroundColor: "red",
    zIndex: 1000,
  },
  popupOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Drawer;
