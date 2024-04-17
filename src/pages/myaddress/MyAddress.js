import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DrawerHeader from "../../components/drawerdetailheader/DrawerHeader";
import {
  AddAddressData,
  CityPinData,
  MyAddressData,
} from "../../components/datamodule/DataModule";
import AddressLocation from "../../../assets/icons/addresslocation.svg";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import { TextInput } from "react-native-paper";
import CustomDropdown from "../../components/customdropdown/CustomDropdown";
import CommonButton from "../../components/commonbutton/CommonButton";
import themeContext from "../../components/theme/themeContext";

const MyAddress = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const theme = useContext(themeContext);

  return (
    <ScrollView>
      <View style={[commonStyles.container , {backgroundColor:theme.background}]}>
        <DrawerHeader title="My Address" />
        <View style={styles.addresscontainer}>
          {MyAddressData.map((items) => (
            <View style={styles.individualaddress} key={items.id}>
              <View
                style={{ flexDirection: "row", gap: 15, alignItems: "center" }}
              >
                <AddressLocation />
                <View style={styles.locationcontainer}>
                  <Text style={[{ fontWeight: 500, fontSize: 15 } , {color:theme.color}]}>
                    {items.name}
                  </Text>
                  <Text style={commonStyles.paragraph}>{items.location}</Text>
                  <Text>{items.phone}</Text>
                </View>
              </View>
              <Text style={[styles.editbutton, { fontWeight: 500 }]}>Edit</Text>
            </View>
          ))}
        </View>
        <View style={styles.addaddress}>
          <Text style={{ fontSize: 20 }}>
            <Text style={[commonStyles.innerpageHeading, { fontSize: 20 } , {color:theme.color}]}>
              Add address
            </Text>
            {"  "}
            (Manual)
          </Text>
          <View style={{ paddingTop: "5%" }}>
            <View>
              {AddAddressData.map((items) => (
                <TextInput
                  key={items.id}
                  placeholder={items.placeholder}
                  style={[styles.input , {backgroundColor:theme.background}]}
                  left={<TextInput.Icon icon={items.icon} color={theme.color}/>}
                  underlineColor="transparent"
                  placeholderTextColor={theme.color}
                  theme={{
                    colors: {
                      primary: "transparent",
                      underlineColor: "transparent",
                    },
                  }}
                  textColor={theme.color}
                />
              ))}
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                {CityPinData.map((items) => (
                  <TextInput
                    key={items.id}
                    placeholder={items.placeholder}
                    style={[styles.input, { width: "48%" } , {backgroundColor:theme.background}]}
                    left={<TextInput.Icon icon={items.icon} color={theme.color}/>}
                    placeholderTextColor={theme.color}
                    underlineColor="transparent"
                    theme={{
                      colors: {
                        primary: "transparent",
                        underlineColor: "transparent",
                      },
                    }}
                    textColor={theme.color}
                    keyboardType={items.type}
                  />
                ))}
              </View>
              <CustomDropdown />
              <TextInput
                placeholder="Phone number"
                style={[styles.input , {backgroundColor:theme.background}]}
                left={<TextInput.Icon icon="phone" color={theme.color}/>}
                underlineColor="transparent"
                placeholderTextColor={theme.color}
                theme={{
                  colors: {
                    primary: "transparent",
                    underlineColor: "transparent",
                  },
                }}
                keyboardType="numeric"
                textColor={theme.color}
              />
            </View>
          </View>
          <CommonButton
            label="Save"
            bgColor={theme.coloring}
            color="white"
            style={{ alignSelf: "center", width: "100%", marginTop: "1%" }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: "20%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "30%",
  },
  addresscontainer: {
    paddingTop: "10%",
  },
  individualaddress: {
    marginBottom: "6%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationcontainer: {
    width: "65%",
  },
  editbutton: {
    color: "#FF6B00",
  },
  addaddress: {
    paddingTop: "10%",
  },
  input: {
    borderWidth: 0.5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: "grey",
    marginBottom: "5%",
    backgroundColor: "white",
  },
});

export default MyAddress;
