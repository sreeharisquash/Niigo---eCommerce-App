import React, { useContext } from 'react'
import { ScrollView, View  , Text , StyleSheet} from 'react-native'
import { commonStyles } from '../../components/commonstylesheet/CommonStyles'
import Header from '../../components/header/Header'
import CommonDropdown from '../../components/commondropdown/CommonDropdown'
import { RefundDropdownData, RefundSubDropdownData, dropdownData } from '../../components/datamodule/DataModule'
import themeContext from '../../components/theme/themeContext'

const RefundandReturn = ({route}) => {

    const { title } = route.params

    const theme = useContext(themeContext);

  return (
    <ScrollView style={[commonStyles.scrollbackground , {backgroundColor:theme.background}]}>
    <View style={commonStyles.container}>
      <Header title="Help & Support" />
      <View style={styles.datacontainer}>
        <Text style={commonStyles.subheading}>{title}</Text>
          <Text style={[{ marginTop: 10, marginBottom: 10} , {color:theme.fontLight}]}>
          Frequently Asked Questions
        </Text>
        {RefundDropdownData.map((item) => (
            <View key={item.id}>
            <CommonDropdown title={item.title} para={item.para} />
          </View>
        ))}
        <Text style={[commonStyles.subheading, { marginTop: 30 , marginBottom:20 }, {color:theme.color}]}>
          More query related to
        </Text>
        {RefundSubDropdownData.map((item) => (
          <View key={item.id}>
            <CommonDropdown title={item.title} para={item.para} />
          </View>
        ))}
      </View>
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
    datacontainer: {
      paddingTop: "10%",
    },
  });

export default RefundandReturn