import React, { useContext } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import DrawerHeader from "../../components/drawerdetailheader/DrawerHeader";
import Timeline from "react-native-timeline-flatlist";
import { TimelineData } from "../../components/datamodule/DataModule";
import ShippingAddress from "../../../assets/icons/shipping.svg";
import themeContext from "../../components/theme/themeContext";

const TrackOrder = ({ route }) => {
  const { image, title, size, amount } = route.params;

  const theme = useContext(themeContext)

  return (
    <ScrollView style={[commonStyles.scrollbackground , {backgroundColor:theme.background}]}>
      <View style={commonStyles.container}>
        <DrawerHeader title="Track Order" />
        <View style={{ paddingTop: "10%" }}>
          <Timeline
            data={TimelineData}
            circleSize={40}
            lineColor="#868686"
            innerCircle={"icon"}
            circleColor={theme.background}
            lineWidth={0.5}
            titleStyle={{
              color:theme.color
            }}
            descriptionStyle={{
              color: theme.color 
            }}
          />
        </View>
        <View style={styles.products}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {image}
            <View style={{ gap: 5 }}>
              <Text style={[commonStyles.subheading, { fontSize: 16 }]}>
                {title}
              </Text>
              <Text>Size: {size}</Text>
              <Text style={styles.delivery}>Free Delivery</Text>
            </View>
          </View>
          <Text style={[commonStyles.subheading, { fontSize: 16 }]}>
            ${amount}
          </Text>
        </View>
        <Text style={[commonStyles.subheading , {color:theme.color}]}>Shipping Address</Text>
        <View style={styles.shippingaddress}>
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <ShippingAddress />
            <View style={{ width: "60%" , gap:3}}>
              <Text style={[commonStyles.subheading, { fontSize: 16 }]}>
                Robert Fox
              </Text>
              <Text style={styles.addresspara}>
                8502 Preston Rd. Inglewood, Maine 98380
              </Text>
              <Text style={{ fontWeight: 500, fontSize: 13 }}>
                (208) 555-0112
              </Text>
            </View>
          </View>

          <Text style={styles.editsection}>Edit</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  products: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  delivery: {
    color: "#FF6B00",
    fontSize: 14,
  },
  shippingaddress: {
    marginTop: 20,
    backgroundColor: "#F4F4F4",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  addresspara: {
    color: "#868889",
    fontSize: 13,
  },
  editsection: {
    color: "#FF6B00",
    fontWeight: "500",
  },
});

export default TrackOrder;
