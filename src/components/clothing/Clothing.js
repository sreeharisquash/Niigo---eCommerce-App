import React, { useContext, useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { commonStyles } from "../commonstylesheet/CommonStyles";
import { ClothingData } from "../datamodule/DataModule";
import { useNavigation } from "@react-navigation/native";
import FilterPage from "../../pages/filter/FilterPage";
import InctiveWishlistIcon from "../../../assets/icons/wishlistbef.svg";
import ActiveWishalistIcon from "../../../assets/icons/wishlistafter.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../wishlistslice/WishlistSlice";
import BackButton from "../../../assets/icons/backbutton.svg";
import SortIcon from '../../../assets/icons/sort.svg'
import FilterIcon from '../../../assets/icons/filter.svg'
import themeContext from "../theme/themeContext";


const Clothing = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useContext(themeContext);


  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  const endButtons = [
    {
      id: "1",
      title: "Sort",
      icon: <SortIcon color={theme.coloring}/>,
    },
    {
      id: "2",
      title: "Filter",
      icon: <FilterIcon color={theme.coloring}/>,
    },
  ];

  const handleProductClick = (
    productId,
    productName,
    productDetails,
    productimage,
    detaildescription,
    productprice
  ) => {
    navigation.navigate("ProductDetail", {
      productId,
      productName,
      productDetails,
      productimage,
      detaildescription,
      productprice,
    });
  };

  const [filterOpen, setFilterOpen] = useState(false);

  const handleFliterOpen = () => {
    setFilterOpen(!filterOpen);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddWishlist = (item) => {
    dispatch(addToWishlist({ ...item, pageIdentifier: "clothingPage" }));
  };


  return (
    <>
      <ScrollView>
        <View style={[commonStyles.container , {backgroundColor:theme.background}]}>
          <View style={styles.header}>
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <TouchableOpacity onPress={handleGoBack}>
               {/* <BackButton/> */}
               <BackButton color={theme.color}/>
              </TouchableOpacity>
              <Text style={[commonStyles.innerpageHeading , {color:theme.color}]}>Clothing (6)</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              {endButtons.map((items) => (
                <TouchableOpacity
                  style={styles.sort}
                  key={items.id}
                  onPress={handleFliterOpen}
                >
                  <Text>{items.title}</Text>
                  {items.icon} 
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.clothingcontain}>
            {ClothingData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.productContainer}
                onPress={() =>
                  handleProductClick(
                    item.id,
                    item.title,
                    item.para,
                    item.detailImage,
                    item.detaildescription,
                    item.price
                  )
                }
              >
                <TouchableOpacity
                  style={styles.wishlisticon}
                  onPress={() => handleAddWishlist(item)}
                >
                  {wishlistItems.some(
                    (wishlistItem) =>
                      wishlistItem.id === item.id &&
                      wishlistItem.pageIdentifier === item.pageIdentifier
                  ) ? (
                    <ActiveWishalistIcon />
                  ) : (
                    <InctiveWishlistIcon />
                  )}
                </TouchableOpacity>
                {item.image}
                <View style={styles.titleandpara}>
                  <Text style={[styles.title , {color:theme.color}]}>{item.title}</Text>
                  <Text style={[styles.para , {color:theme.color}]}>{item.para}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    marginTop: 3,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      width: "100%",
                      paddingLeft: 10,
                    }}
                  >
                    <Text style={[styles.price , {color:theme.color}]}>${item.price}</Text>
                    <Text style={styles.previousPrice}>
                      ${item.previousPrice}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      {filterOpen && <FilterPage close={handleFliterOpen} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:"100%",
    backgroundColor: "white",
    paddingTop: "10%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sort: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "grey",
    backgroundColor:"white",
    gap: 5,
    padding: 8,
    borderWidth: 0.3,
    borderRadius: 14,
  },

  clothingcontain: {
    paddingTop: "8%",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  titleandpara: {
    width: "90%",
  },
  productContainer: {
    width: "50%",
    marginBottom: 25,
    alignItems: "center",
  },
  para: {
    marginTop: 2,
  },
  titleandpara: {
    width: "90%",
    marginTop: 10,
    marginBottom: 7,
  },
  title: {
    fontWeight: "500",
    fontSize: 15,
  },
  price: {
    fontWeight: "500",
  },
  previousPrice: {
    textDecorationLine: "line-through",
    color: "grey",
    // fontSize: 15,
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
  },
  wishlisticon: {
    position: "absolute",
    right: 25,
    top: 10,
    zIndex: 99,
  },
});

export default Clothing;
