import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../pages/onboardingpage/OnBoarding1";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import LoggedInPopup from "../pages/loggedinpopup/LoggedInPopup";
import PageWrapper from "../components/tabwrapper/PageWrapper";
import Clothing from "../components/clothing/Clothing";
import ProductDetail from "../pages/productdetail/ProductDetail";
import FilterPage from "../pages/filter/FilterPage";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/checkout/CheckOut";
import EditProfile from "../pages/editprofile/EditProfile";
import MyAddress from "../pages/myaddress/MyAddress";
import Notifications from "../pages/notifications/Notifications";
import PaymentHistory from "../pages/paymenthistory/PaymentHistory";
import MyOrders from "../pages/myorders/MyOrders";
import OrderDetails from "../pages/orderdetails/OrderDetails";
import TrackOrder from "../pages/trackorder/TrackOrder";
import MyWishlist from "../pages/mywishlist/MyWishlist";
import HelpAndSupport from "../pages/helpandsupport/HelpAndSupport";
import OrderDelivery from "../pages/orderdelivery/OrderDelivery";
import RefundandReturn from "../pages/refundreturn/RefundandReturn";
import Cancellations from "../pages/cancellations/Cancellations";
import OfferandCombo from "../pages/offerandcombos/OfferandCombo";
import Membership from "../pages/membership/Membership";
import Settings from "../pages/settings/Settings";

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Success" component={LoggedInPopup} />
        <Stack.Screen name="Tabs" component={PageWrapper} />
        <Stack.Screen name="Clothing" component={Clothing} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="FilterPage" component={FilterPage} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={CheckOut} />
        <Stack.Screen name="Editprofile" component={EditProfile} />
        <Stack.Screen name="Myaddress" component={MyAddress} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Paymenthistory" component={PaymentHistory} />
        <Stack.Screen name="Myorders" component={MyOrders} />
        <Stack.Screen name="Orderdetails" component={OrderDetails} />
        <Stack.Screen name="Trackorder" component={TrackOrder} />
        <Stack.Screen name="Mywishlist" component={MyWishlist} />
        <Stack.Screen name="Helpandsupport" component={HelpAndSupport} />
        <Stack.Screen name="Orderdelivery" component={OrderDelivery} />
        <Stack.Screen name="Refundreturn" component={RefundandReturn} />
        <Stack.Screen name="Cancellation" component={Cancellations} />
        <Stack.Screen name="Offerandcombo" component={OfferandCombo} />
        <Stack.Screen name="Membership" component={Membership} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
  );
};

export default Router;
