import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import DrawerHeader from "../../components/drawerdetailheader/DrawerHeader";
import { NotificationsData } from "../../components/datamodule/DataModule";
import Notification from "../../../assets/icons/notification-1.svg";
import themeContext from "../../components/theme/themeContext";

const Notifications = () => {

  const theme = useContext(themeContext);

  return (
    <ScrollView>
      <View style={[commonStyles.container, { paddingBottom: "10%" } , {backgroundColor:theme.background}]}>
        <DrawerHeader title="Notifications" />
        <View style={styles.notificationscontainier}>
          {NotificationsData.map((item) => (
            <View style={[styles.notifications , {backgroundColor:theme.background}]} key={item.id}>
              <Notification color={theme.color}/>
              <Text style={[commonStyles.paragraph, { width: "90%" } , {color:theme.color}]}>
                {item.notification}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notifications: {
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "4%",
    paddingBottom: "4%",
    flexDirection: "row",
    gap: 10,
    width: "90%",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationscontainier: {
    paddingTop: "10%",
    alignSelf: "center",
  },
});

export default Notifications;
