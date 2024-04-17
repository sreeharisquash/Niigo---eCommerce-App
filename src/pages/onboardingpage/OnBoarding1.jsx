import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CommonButton from "../../components/commonbutton/CommonButton";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import { OnBoardingData } from "../../components/datamodule/DataModule";
import themeContext from "../../components/theme/themeContext";

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);

  const handleSkip = () => {
    navigation.navigate("Login");
  };

  const theme = useContext(themeContext);

  const Slide = ({ item }) => {
    return (
      <View style={styles.slideContainer }>
        <Image
          source={item.image}
          style={{ height: "75%", width: "80%", resizeMode: "contain" }}
        />
        <Text style={commonStyles.onboardingHeading}>{item.title}</Text>
        <Text style={[commonStyles.paragraph , {textAlign:"center"}]}>{item.para}</Text>
      </View>
    );
  };

  const handleNext = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    const offset = nextSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
  };
  return (
    <View style={[styles.container , {backgroundColor:theme.background}]}>
      <TouchableOpacity onPress={handleSkip} style={styles.skipbtn}>
        <Text style={[styles.skiptologin  , {color:theme.color}]}>Skip</Text>
      </TouchableOpacity>
      <FlatList
        ref={ref}
        data={OnBoardingData}
        contentContainerStyle={styles.flatListContainer}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        keyExtractor={(item) => item.id.toString()}
        onViewableItemsChanged={({ viewableItems }) => {
          if (viewableItems.length > 0) {
            setCurrentSlideIndex(viewableItems[0].index || 0);
          }
        }}
      />
      <View style={{ flexDirection: "row", gap: 2 }}>
        {OnBoardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicators,
              currentSlideIndex == index && { backgroundColor: "#0300AA" },
            ]}
          />
        ))}
      </View>
      {currentSlideIndex === OnBoardingData.length - 1 ? (
        <CommonButton
          label="Get Started"
          bgColor={theme.coloring}
          color="white"
          style={styles.buttonCls}
          onPress={() => navigation.navigate("Login")}
        />
      ) : (
        <CommonButton
          label="Next"
          bgColor={theme.coloring}
          color="white"
          style={styles.buttonCls}
          onPress={handleNext}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  slideContainer: {
    alignItems: "center",
    width: Dimensions.get("window").width,
    padding: 20,
  },
  buttonCls: {
    marginTop: 100,
  },
  flatListContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  indicators: {
    width: 5,
    height: 5,
    backgroundColor: "grey",
    borderRadius: 100,
  },
  skipbtn: {
    paddingTop: "20%",
    paddingLeft: 300,
  },
  skiptologin: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 26,
    letterSpacing: 0,
    textAlign: "right",
  },
});

export default OnBoardingScreen;
