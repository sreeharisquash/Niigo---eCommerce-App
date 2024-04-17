import React, { useContext, useState } from "react";
import { Image } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../commonstylesheet/CommonStyles";
import { CategoryTabs } from "../datamodule/DataModule";
import Carousel from "react-native-snap-carousel";
import AllCategory from "../subcategories/allcategory/AllCategory";
import MenCategory from "../subcategories/mencategory/MenCategory";
import FemaleCategory from "../subcategories/femalecategory/FemaleCategory";
import Kids from "../subcategories/kids/Kids";
import Header from "../header/Header";
import themeContext from "../theme/themeContext";

const Category = () => {

  const slidesPerScreen = 3;
  const theme = useContext(themeContext);


  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.tabs,
        {
          backgroundColor: activeTab === item.title ? theme.coloring : "white",
          borderWidth: activeTab === item.title ? 0 : 1,
        },
      ]}
      key={index}
    >
      <Text
        onPress={() => setActiveTab(item.title)}
        style={{ color: activeTab === item.title ? "white" : "black" }}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const [activeTab, setActiveTab] = useState("All");

  const renderContent = () => {
    switch (activeTab) {
      case "All":
        return <AllCategory />;
      case "Men":
        return <MenCategory />;
      case "Women":
        return <FemaleCategory />;
      case "Kids":
        return <Kids />;
      default:
        return null;
    }
  };


  return (
    <View style={[styles.container , {backgroundColor:theme.background}]}>
      <Header title="All Categories"/>
      <View style={{paddingTop:"7%"}}>
        <Carousel
          data={CategoryTabs}
          renderItem={renderItem}
          sliderWidth={400}
          itemWidth={400 / slidesPerScreen}
          layout={"default"}
          loop={false}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          slide
        />
      </View>

      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "20%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  tabs: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginRight: 10,
    alignItems: "center",
    borderRadius: 30,
  },
});
export default Category;
