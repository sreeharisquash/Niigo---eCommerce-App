import React, { useContext, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DropdownIcon from "../../../assets/icons/dropdown.svg";
import { CountryData } from "../datamodule/DataModule";
import CountryIcon from "../../../assets/icons/country.svg";
import themeContext from "../theme/themeContext";

const CustomDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [isClicked, setIsClicked] = useState(false);
  const theme = useContext(themeContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.input , {backgroundColor:theme.background}]}
          onPress={() => setIsClicked(!isClicked)}
        >
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <CountryIcon color={theme.color}/>
            <Text style={{color:theme.color}}>{selectedCountry}</Text>
          </View>

          {isClicked ? <DropdownIcon /> : <DropdownIcon />}
        </TouchableOpacity>
        {isClicked ? (
          <View style={styles.dropdownitems}>
            {CountryData.map((item, i) => (
              <TouchableOpacity
              key={i + 1}
                style={styles.country}
                onPress={() => (
                  setSelectedCountry(item.country), setIsClicked(false)
                )}
              >
                <Text>{item.country}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          ""
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdown: {
    width: "90%",
    padding: 10,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 0.5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: "grey",
    padding: 20,
    marginBottom: "5%",
    backgroundColor: "white",
  },
  dropdownitems: {
    width: "90%",
    backgroundColor: "white",
    borderWidth: 0.3,
    borderColor: "grey",
    borderRadius: 7,
    marginBottom:15,
    alignSelf: "center",
  },
  country: {
    padding: 20,
  },
});
export default CustomDropdown;
