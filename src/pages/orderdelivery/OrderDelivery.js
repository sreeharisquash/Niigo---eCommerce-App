import React, { useContext } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import Header from "../../components/header/Header";
import CustomDropdown from "../../components/customdropdown/CustomDropdown";
import CommonDropdown from "../../components/commondropdown/CommonDropdown";
import { dropdownData } from "../../components/datamodule/DataModule";
import themeContext from "../../components/theme/themeContext";

const OrderDelivery = ({ route }) => {
  const { title } = route.params;
  const theme = useContext(themeContext);

  return (
    <ScrollView style={[commonStyles.scrollbackground , {backgroundColor:theme.background}]}>
      <View style={commonStyles.container}>
        <Header title="Help & Support" />
        <View style={styles.datacontainer}>
          <Text style={[commonStyles.subheading , {color:theme.color}]}>{title}</Text>
          <Text style={[{ marginTop: 10, marginBottom: 10} , {color:theme.fontLight}]}>
            Frequently Asked Questions
          </Text>
          <CommonDropdown
            title="How do I check the Status of my order?"
            para="Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a. Cum soci is nato que penatibus et magn is dis parturient mont es, nas cetur ridicul us mus. Do nec qu am fel is, ultric ies felis eu pede "
          />
          <Text style={[commonStyles.subheading, { marginTop: 30 } , {color:theme.color}]}>
            More query related to
          </Text>
          {dropdownData.map((item) => (
            <View key={item.id}>
              <CommonDropdown title={item.title} para={item.para} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  datacontainer: {
    paddingTop: "10%",
  },
});

export default OrderDelivery;
