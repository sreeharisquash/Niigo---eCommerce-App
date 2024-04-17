import React, { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import Header from "../../components/header/Header";
import SearchCompo from "../../components/search/SearchCompo";
import { HelpAndSupportData } from "../../components/datamodule/DataModule";
import RightArrow from "../../../assets/icons/rightarrow.svg";
import { useNavigation } from "@react-navigation/native";
import CommonDropdown from "../../components/commondropdown/CommonDropdown";
import themeContext from "../../components/theme/themeContext";

const HelpAndSupport = () => {
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  return (
    <ScrollView
      style={[
        commonStyles.scrollbackground,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={commonStyles.container}>
        <Header title="Help & Support" />
        <View style={styles.querry}>
          <Text style={[commonStyles.subheading, { color: theme.color }]}>
            What’s your query about?
          </Text>
          <View style={styles.search}>
            <SearchCompo />
            {HelpAndSupportData.map((item) => (
              <TouchableOpacity
                style={styles.helpsupportdata}
                key={item.id}
                onPress={() =>
                  navigation.navigate(item.link, {
                    title: item.title,
                  })
                }
              >
                <View style={styles.iconandtitle}>
                  {React.cloneElement(item.icon, { color: theme.coloring })}
                  <Text style={{ color: theme.color }}>{item.title}</Text>
                </View>
                <RightArrow color={theme.color} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  querry: {
    paddingTop: "10%",
  },
  search: {
    paddingTop: "5%",
  },
  helpsupportdata: {
    paddingTop: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconandtitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});

export default HelpAndSupport;
