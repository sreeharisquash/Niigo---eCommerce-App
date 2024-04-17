import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../../components/commonstylesheet/CommonStyles";
import DebitCardImg from "../../../assets/icons/debitcard.svg";
import { TextInput } from "react-native-paper";
import CommonButton from "../../components/commonbutton/CommonButton";
import MasterCard from "../../../assets/icons/mastercard.svg";
import { CardData, CardDetail } from "../../components/datamodule/DataModule";
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";
import themeContext from "../../components/theme/themeContext";

const Wallet = () => {
  const [cardDetails, setCardDetails] = useState({});
  const [showCard, setShowCard] = useState(false);
  const [addedCards, setAddedCards] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleInputChange = (fieldName, value) => {
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };

  const handleButtonClick = () => {
    const { cardnumber, cvv, name, expirationDate } = cardDetails;
    if (!cardnumber || !cvv || !name || !expirationDate) {
      alert("Card details cannot be empty.");
      return;
    }
    if (cardnumber.length === 16 && cvv.length === 3) {
      const newCard = {
        name: cardDetails.name,
        number: cardDetails.cardnumber,
        cvv: cardDetails.cvv,
        date: cardDetails.expirationDate,
      };
      setAddedCards((prevCards) => [...prevCards, newCard]);
      setShowCard(true);
      setCardDetails({});
    } else if (cardnumber.length < 16) {
      alert("Card number should be at least 16 characters.");
    } else if (cardnumber.length > 16) {
      alert("Invalid Card number");
    }
    if (
      cvv.length < 3 ||
      cvv.length > 3 ||
      cvv.length === 0 ||
      cardnumber.length === 0
    ) {
      alert("Invalid card details");
    }
  };

  const handleAddAnotherCard = () => {
    setShowCard(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      expirationDate: date,
    }));
    hideDatePicker();
  };

  const formatDate = (date) => {
    return moment(date).format("MM/YY");
  };

  console.log(addedCards);

  const theme = useContext(themeContext);

  const renderContent = () => {
    if (showCard) {
      return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          <DebitCardImg />
          {addedCards.map((card, index) => (
            <View key={index} style={styles.cardContainer}>
              <View style={styles.cardcontain}>
                <MasterCard />
                <View>
                  <Text
                    style={[commonStyles.innerpageHeading, { fontSize: 20 } , {color:theme.color}]}
                  >
                    Mater Card
                  </Text>
                  <Text style={{color:theme.color}}>{`xxxx xxxx xxxx ${card.number.slice(-4)}`}</Text>
                  <View
                    style={{ flexDirection: "row", paddingTop: "5%", gap: 15 }}
                  >
                    <Text style={{color:theme.color}}>
                      Expiry:
                      <Text style={{ fontWeight: 500 }}>
                        {card.date.toLocaleDateString("en-US", {
                          year: "2-digit",
                          month: "2-digit",
                        })}
                      </Text>
                    </Text>
                    <Text style={{color:theme.color}}>
                      cvv: <Text style={{ fontWeight: 500 }}>{card.cvv}</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
          <CommonButton
            label="Add Another Card"
            bgColor={theme.coloring}
            color="white"
            style={{ width: "100%" }}
            onPress={handleAddAnotherCard}
          />
        </View>
      );
    } else {
      return (
        <View>
          <View
            style={[styles.container, { backgroundColor: theme.background }]}
          >
            <DebitCardImg />
            <View style={{ paddingTop: "5%", width: "100%" }}>
              {CardData.map((items) => (
                <TextInput
                  key={items.id}
                  placeholder={items.placeholder}
                  placeholderTextColor={theme.color}
                  style={[styles.input, { backgroundColor: theme.background }]}
                  left={
                    <TextInput.Icon icon={items.icon} color={theme.color} />
                  }
                  underlineColor="transparent"
                  theme={{
                    colors: {
                      primary: "transparent",
                      underlineColor: "transparent",
                    },
                  }}
                  keyboardType={items.type}
                  onChangeText={(text) =>
                    handleInputChange(items.fieldName, text)
                  }
                  value={cardDetails[items.fieldName] || ""}
                  textColor={theme.color}
                />
              ))}
              <View style={{ flexDirection: "row", width: "100%", gap: 13 }}>
                <TextInput
                  placeholder="Expiration Date"
                  fieldName="expirationDate"
                  placeholderTextColor={theme.color}
                  style={[
                    styles.input,
                    { width: "48%" },
                    { backgroundColor: theme.background },
                  ]}
                  left={<TextInput.Icon icon="calendar" color={theme.color} />}
                  underlineColor="transparent"
                  theme={{
                    colors: {
                      primary: "transparent",
                      underlineColor: "transparent",
                    },
                  }}
                  onFocus={() => setDatePickerVisibility(true)}
                  value={
                    cardDetails.expirationDate
                      ? formatDate(cardDetails.expirationDate)
                      : ""
                  }
                  onChangeText={(text) =>
                    handleInputChange("expirationDate", text)
                  }
                  textColor={theme.color}
                />
                <DateTimePicker
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  {CardDetail.map((items) => (
                    <TextInput
                      key={items.id}
                      placeholder={items.placeholder}
                      placeholderTextColor={theme.color}
                      style={[
                        styles.input,
                        { width: "48%" },
                        { backgroundColor: theme.background },
                      ]}
                      left={
                        <TextInput.Icon icon={items.icon} color={theme.color} />
                      }
                      underlineColor="transparent"
                      theme={{
                        colors: {
                          primary: "transparent",
                          underlineColor: "transparent",
                        },
                      }}
                      keyboardType={items.type}
                      onChangeText={(text) =>
                        handleInputChange(items.fieldName, text)
                      }
                      value={cardDetails[items.fieldName] || ""}
                      textColor={theme.color}
                    />
                  ))}
                </View>
              </View>
            </View>

            <CommonButton
              label="Save"
              bgColor={theme.coloring}
              color="white"
              style={{ width: "100%" }}
              onPress={handleButtonClick}
            />
          </View>
        </View>
      );
    }
  };

  return <ScrollView>{renderContent()}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: "20%",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "90%",
  },
  input: {
    width: "100%",
    borderWidth: 0.5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: "grey",
    marginBottom: "5%",
    backgroundColor: "white",
  },
  cardContainer: {
    padding: 10,
    margin: 10,
    alignSelf: "flex-start",
  },
  cardcontain: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});

export default Wallet;
