import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import CommonButton from "../../components/commonbutton/CommonButton";
import OrderPlaced from "../../components/orderplaced/OrderPlaced";
import { BlurView } from "expo-blur"; 
import BackButton from '../../../assets/icons/backbutton.svg'
import AddressIcon from '../../../assets/icons/addressIcon.svg'
import theme from "../../components/theme/theme";
import themeContext from "../../components/theme/themeContext";

const CheckOut = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [popup, setPopup] = useState(false);

  const [items, setItems] = useState([
    {
      label: "Gpay",
      value: "Gpay",
      icon: () => (
        <Image
          source={require("../../../assets/images/home/checkout/gpayicon.png")}
          style={styles.iconStyle}
        />
      ),
    },
    {
      label: "PhonePay",
      value: "PhonePay",
      icon: () => (
        <Image
          source={require("../../../assets/images/home/checkout/phonepayicon.png")}
          style={styles.iconStyle}
        />
      ),
    },
    {
      label: "Credit card/Debit card",
      value: "Credit card/Debit card",
      icon: () => (
        <Image
          source={require("../../../assets/images/home/checkout/creditcardicon.png")}
          style={styles.iconStyle}
        />
      ),
    },
    {
      label: "Netbanking",
      value: "Netbanking",
      icon: () => (
        <Image
          source={require("../../../assets/images/home/checkout/netbankingicon.png")}
          style={styles.iconStyle}
        />
      ),
    },
    {
      label: "Cash on delivery",
      value: "Cash on delivery",
      icon: () => (
        <Image
          source={require("../../../assets/images/home/checkout/codicon.png")}
          style={styles.iconStyle}
        />
      ),
    },
  ]);

  const tickComponent = () => {
    return (
      <View style={{ padding: 2, borderWidth: 1, borderRadius: 30 }}>
        <View style={styles.selecteditem}></View>
      </View>
    );
  };

  const handlePopup = () => {
    console.log("Button pressed. Setting popup to true.");
    setPopup(true);
  };

  const theme =  useContext(themeContext);

  return (
    <>
      <View style={[commonStyles.container , {backgroundColor:theme.background}]}>
        {popup && (
          <BlurView intensity={100} tint="dark" style={StyleSheet.absoluteFill}>
          </BlurView>
        )}
        <View style={styles.popup}>{popup && <OrderPlaced />}</View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={handleGoBack}>
            <BackButton color={theme.color}/>
          </TouchableOpacity>
          <Text
            style={[
              commonStyles.innerpageHeading,
              { marginLeft: "auto", marginRight: "auto" },
              {color:theme.color}
            ]}
          >
            Checkout
          </Text>
        </View>
        <View style={styles.shipaddress}>
          <Text style={[commonStyles.innerpageHeading, { fontSize: 17 } , {color:theme.color}]}>
            Shipping to :
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              paddingTop: 10,
            }}
          >
            <Text style={[commonStyles.paragraph, { textAlign: "left" }]}>
              Jane Cooper
            </Text>
           <AddressIcon color={theme.coloring}/>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 40,
              paddingTop: 10,
            }}
          >
            <Text
              style={[
                commonStyles.paragraph,
                { textAlign: "left", width: "70%" },
              ]}
            >
              2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
            </Text>
            <Text style={{ color: theme.coloring, fontWeight: 500 }}>Edit</Text>
          </View>
          <Text
            style={[
              commonStyles.paragraph,
              { textAlign: "left", width: "70%" },
            ]}
          >
            (208) 555-0112
          </Text>
        </View>
        <View>
          <DropDownPicker
            placeholder="Payment method"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            TickIconComponent={tickComponent}
            dropDownContainerStyle={{
              borderWidth: 0,
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 10,
              paddingRight: 10,
              zIndex: -1,
            }}
            style={{
              borderWidth: 0,
              backgroundColor: "lightgrey",
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 20,
              paddingRight: 20,
              zIndex: -1,
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonbottom}>
        <CommonButton
          label="Continue"
          bgColor={theme.coloring}
          color="white"
          onPress={() => handlePopup()}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    position: "relative",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 100,
    backgroundColor: "white",
  },
  shipaddress: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  selecteditem: {
    width: 15,
    height: 15,
    borderRadius: 30,
    backgroundColor: "blue",
  },
  buttonbottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex:0
  },
  popup: {
    top: Dimensions.get("window").height / 8,
    marginHorizontal: Dimensions.get("window").width / 12,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
export default CheckOut;
