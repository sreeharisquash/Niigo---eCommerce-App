import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../commonstylesheet/CommonStyles";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
import Rating from '../../../assets/icons/rating.svg'
import themeContext from "../theme/themeContext";

const Reviews = ({ data }) => {
  const theme = useContext(themeContext);

  return (
    <View>
      {data.map((review) => (
        <View key={review.id} style={styles.reviewcontainer}>
          <Image source={review.image} />
          <View style={[styles.paraandday, { gap: 5 }]}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[{ fontWeight: 500 } , {color:theme.color}]}>{review.name}</Text>
              <Rating/>
            </View>
            <Text style={[commonStyles.paragraph, { textAlign: "left" }]}>
              {review.para}
            </Text>
            <Text style={[commonStyles.paragraph, { textAlign: "right" }]}>
              {review.days}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  reviewcontainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  paraandday: {
    width: "80%",
  },
});

export default Reviews;
