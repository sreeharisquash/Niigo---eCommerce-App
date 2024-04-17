import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DropClose from "../../../assets/icons/dropclose.svg";
import DropOpen from "../../../assets/icons/dropopen.svg";
import { commonStyles } from "../commonstylesheet/CommonStyles";
import themeContext from "../theme/themeContext";

const CommonDropdown = ({ title, para }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const theme = useContext(themeContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={styles.dropdownContainer}
      >
        <Text style={[commonStyles.subheading, { fontSize: 16 } , {color:theme.color}]}>{title}</Text>
        {isDropdownOpen ? <DropOpen color={theme.color}/> : <DropClose color={theme.color}/>}
      </TouchableOpacity>

      {isDropdownOpen && <Text style={[commonStyles.subpara , {paddingLeft:10 , paddingTop:15 , paddingBottom:15 , paddingRight:10} , {backgroundColor:theme.dropdownBg}]}>{para}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  para: {
    fontSize: 14,
    color: "black",
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default CommonDropdown;
