import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AllCategories } from "../../datamodule/DataModule";
import { useNavigation } from "@react-navigation/native";
import RightArrow from '../../../../assets/icons/rightarrow.svg'
import themeContext from "../../theme/themeContext";

const AllCategory = () => {

    const  navigation = useNavigation();

    const theme = useContext(themeContext);

  return (
    <View style={styles.container}>
      {AllCategories.map((items) => (
        <View style={{ marginBottom: 20 }} key={items.id}>
          {items.image}
          <TouchableOpacity style={styles.title} onPress={() => navigation.navigate(items.innerscreen) }>
            <Text style={{ color: "white" }}>{items.title}</Text>
            <RightArrow color="white"/>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  title: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#000000CC",
    color: "white",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default AllCategory;
