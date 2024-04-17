import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/routes/Router";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Store from "./src/components/store/Store";
import { useEffect, useState } from "react";
import { EventRegister } from "react-native-event-listeners";
import theme from "./src/components/theme/theme";
import themeContext from "./src/components/theme/themeContext";
import { DefaultTheme } from "react-native-paper";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);
  return (
    <themeContext.Provider value={darkMode ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
        <Provider store={Store}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="white"
            animated={true}
          />
          <Router />
        </Provider>
      </NavigationContainer>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
