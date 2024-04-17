import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import DrawerHeader from "../../components/drawerdetailheader/DrawerHeader";
import { Switch } from "react-native-paper";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../components/theme/themeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(themeContext);

    useEffect(() => {
      const loadDarkModeState = async () => {
        try {
          const darkModeState = await AsyncStorage.getItem("darkMode");
          if (darkModeState !== null) {
            setDarkMode(JSON.parse(darkModeState));
          }
        } catch (error) {
          console.error("Error loading dark mode state:", error);
        }
      };

      loadDarkModeState();
    }, []);

  useEffect(() => {
    const saveDarkModeState = async () => {
      try {
        await AsyncStorage.setItem("darkMode", JSON.stringify(darkMode));
      } catch (error) {
        console.error("Error saving dark mode state:", error);
      }
    };

    saveDarkModeState();
  }, [darkMode]);

  return (
    <ScrollView
      style={[
        commonStyles.scrollbackground,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={commonStyles.container}>
        <DrawerHeader title="Settings" />
        <View style={styles.contain}>
          <Text style={[commonStyles.subheading, { color: theme.color }]}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={(value) => {
              setDarkMode(value);
              EventRegister.emit("ChangeTheme", value);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "10%"
  },
});

export default Settings;
