import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import {
  CategoryTabs,
  SizesData,
  colors,
} from "../../components/datamodule/DataModule";
import CommonButton from "../../components/commonbutton/CommonButton";
import CustomRangeSlider from "../../components/customrangeslider/CustomRangeSlider";
import CloseBtn from "../../../assets/icons/close.svg";
import themeContext from "../../components/theme/themeContext";

const FilterPage = ({ close }) => {
  const theme = useContext(themeContext);

  const filterData = [
    { id: "1", title: "Popularity" },
    { id: "2", title: "Price: High - Low" },
    { id: "3", title: "Price: Low - High" },
  ];
  const drawerWidth = useRef(new Animated.Value(0)).current;

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
    }).start(() => close());
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

  const [activeFilter, setActiveFilter] = useState("Popularity");
  const [defaultSize, setDefaultSize] = useState("S");
  const [activeTab, setActiveTab] = useState("All");

  const ButtonData = [
    { id: "1", label: "Discard", bgColor: "white", color: "black", border: 1 },
    { id: "2", label: "Apply", bgColor: theme.coloring, color: "white" },
  ];


  return (
    <Animated.View
      style={[
        styles.container,
        { right: interpolatedWidth, paddingTop: "20%" },
        {backgroundColor:theme.background}
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 20,
        }}
      >
        <Text style={[commonStyles.innerpageHeading , {color:theme.color}]}>Filters</Text>
        <TouchableOpacity onPress={closeAnimatedDrawer}>
          <CloseBtn color={theme.color}/>
        </TouchableOpacity>
      </View>
      <Text style={[{ fontWeight: 500, paddingBottom: 20 } , {color:theme.color}]}>Price</Text>
      <CustomRangeSlider />
      <Text style={[{ fontWeight: 500, paddingTop: 20 } , {color:theme.color}]}>Sort By</Text>
      <View style={{ paddingTop: 10, paddingBottom: 20 }}>
        {filterData.map((item) => (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginBottom: 15,
              alignItems: "center",
            }}
          >
            <View style={styles.outerround}>
              <TouchableOpacity
                style={[
                  styles.filteritem,
                  {
                    backgroundColor:
                      activeFilter === item.title ? theme.coloring : "grey",
                  },
                ]}
                onPress={() => setActiveFilter(item.title)}
              ></TouchableOpacity>
            </View>
            <Text style={[commonStyles.paragraph, { textAlign: "left" }]}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>
      <Text style={[{ fontWeight: 500 } , {color:theme.color}]}>Color</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        {colors.map((item) => (
          <View style={styles.colorcontain} key={item.id}>
            <TouchableOpacity
              style={[styles.colors, { backgroundColor: item.color }]}
            ></TouchableOpacity>
          </View>
        ))}
      </View>
      <Text style={[{ fontWeight: 500 } , {color:theme.color}]}>Size</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        {SizesData.map((item) => (
          <TouchableOpacity
            style={[
              styles.sizes,
              {
                backgroundColor:
                  defaultSize === item.size ? theme.coloring : "white",
              },
            ]}
            key={item.id}
            onPress={() => setDefaultSize(item.size)}
          >
            <Text
              style={{
                color: defaultSize === item.size ? "white" : "black",
                fontSize: 12,
              }}
            >
              {item.size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={[{ fontWeight: 500 } , {color:theme.color}]}>Category</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: 10,
          paddingTop: 10,
        }}
      >
        {CategoryTabs.map((item) => (
          <TouchableOpacity
            style={[
              styles.tabs,
              {
                backgroundColor: activeTab === item.title ? theme.coloring : "white",
              },
            ]}
            key={item.id}
            onPress={() => setActiveTab(item.title)}
          >
            <Text
              style={{ color: activeTab === item.title ? "white" : "black" }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.btncontain}>
        {ButtonData.map((item) => (
          <View style={{ width: "50%" }}>
            <CommonButton
              label={item.label}
              bgColor={item.bgColor}
              color={item.color}
              borderwidth={item.border}
            />
          </View>
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    paddingTop: "10%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  outerround: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 100,
  },
  filteritem: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  colorcontain: {
    borderWidth: 0.5,
    borderRadius: 100,
    padding: 2,
  },
  colors: {
    borderWidth: 0.5,
    width: 20,
    height: 20,
    borderRadius: 100,
    padding: 10,
  },
  sizes: {
    borderWidth: 0.5,
    width: 45,
    height: 45,
    borderRadius: 100,
    padding: 10,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  tabs: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 5,
  },
  btncontain: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
});

export default FilterPage;
