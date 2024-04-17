import MasterCard from "../../../assets/icons/master.svg";
import Gpay from "../../../assets/icons/gpay.svg";
import Phonepay from "../../../assets/icons/phpay.svg";
import MyordersIcon from "../../../assets/icons/myordersicon.svg";
import Jacket from "../../../assets/icons/shipmentproduct1.svg";
import Shirt from "../../../assets/icons/shipmentproduct2.svg";
import Jeans from "../../../assets/icons/shipmentproduct3.svg";
import ActiveTimeline from "../../../assets/icons/timelineicon.svg";
import InActiveTimeline from "../../../assets/icons/timelineinactiveicon.svg";
import OrdersIcon from "../../../assets/icons/orders.svg";
import RefundIcon from "../../../assets/icons/refund.svg";
import Cancellation from "../../../assets/icons/cancellation.svg";
import OfferIcon from "../../../assets/icons/offer.svg";
import Membership from "../../../assets/icons/membership.svg";
import MyOrders from "../../../assets/icons/drawerorders.svg";
import MyWishlist from "../../../assets/icons/drawerwishlist.svg";
import MyAddress from "../../../assets/icons/drawerlocation.svg";
import MyPayment from "../../../assets/icons/drawerpayment.svg";
import Support from "../../../assets/icons/drawersupport.svg";
import CategWomen from "../../../assets/icons/categ-women.svg";
import CategAcc from "../../../assets/icons/categ-acc.svg";
import CategKids from "../../../assets/icons/categ-kids.svg";
import CategMen from "../../../assets/icons/categ-men.svg";
import CategBags from "../../../assets/icons/categ-bags.svg";
// import HomeImg from '../../../assets/icons/homepageimg.svg'
import Product1 from "../../../assets/icons/product-1.svg";
import Product2 from "../../../assets/icons/product-2.svg";
import OfferBrands1 from "../../../assets/icons/womenprinted.svg";
import OfferBrands2 from "../../../assets/icons/womenprinted2.svg";
import OfferBrands3 from "../../../assets/icons/womenprinted3.svg";
import OfferBrands4 from "../../../assets/icons/womenprinted4.svg";
import Clothing from "../../../assets/icons/clothing.svg";
import Accessories from "../../../assets/icons/accessories.svg";
import Hats from "../../../assets/icons/hats.svg";
import Bags from "../../../assets/icons/bags.svg";
import Clothing1 from "../../../assets/icons/clothing1.svg";
import Clothing2 from "../../../assets/icons/clothing2.svg";
import Clothing3 from "../../../assets/icons/rosedrs.svg";
import Clothing4 from "../../../assets/icons/clothing4.svg";
import Clothing5 from "../../../assets/icons/clothing5.svg";
import Clothing6 from "../../../assets/icons/clothing6.svg";
import Clothingdet1 from "../../../assets/icons/clothing1detail.svg";
import Clothingdet2 from "../../../assets/icons/clothing2detail.svg";
import Clothingdet3 from "../../../assets/icons/clothing3detail.svg";
import Clothingdet4 from "../../../assets/icons/clothing4detail.svg";
import Clothingdet5 from "../../../assets/icons/clothing5detail.svg";
import Clothingdet6 from "../../../assets/icons/clothing6detail.svg";
import SettingsIcon from '../../../assets/icons/settings.svg';

export const OnBoardingData = [
  {
    id: "1",
    image: require("../../../assets/images/home/onboarding/onboarding1.png"),
    title: "Choose Products",
    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    id: "2",
    image: require("../../../assets/images/home/onboarding/onboarding2.png"),
    title: "20% Discount Offer",
    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    id: "3",
    image: require("../../../assets/images/home/onboarding/onboarding3.png"),
    title: "Complete your shopping",
    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
];

export const LoginButtons = [
  {
    id: "1",
    image: require("../../../assets/images/home/apple.png"),
    title: "Continue With Apple",
  },
  {
    id: "2",
    image: require("../../../assets/images/home/google.png"),
    title: "Continue With Google",
  },
  {
    id: "3",
    image: require("../../../assets/images/home/fb.png"),
    title: "Continue With Facebook",
  },
];

export const SignUpButtons = [
  {
    id: "1",
    image: require("../../../assets/images/home/apple.png"),
    title: "Apple",
  },
  {
    id: "2",
    image: require("../../../assets/images/home/google.png"),
    title: "Google",
  },
  {
    id: "3",
    image: require("../../../assets/images/home/fb.png"),
    title: "Facebook",
  },
];

export const CategoryData = [
  {
    id: "1",
    icon: <CategWomen />,
    title: "Women",
  },
  {
    id: "2",
    icon: <CategAcc />,
    title: "Accessories",
  },
  {
    id: "3",
    icon: <CategKids />,
    title: "Kids",
  },
  {
    id: "4",
    icon: <CategMen />,
    title: "Men",
  },
  {
    id: "5",
    icon: <CategBags />,
    title: "Bags",
  },
];

export const HomeImageSlide = [
  { id: 1, image: require("../../../assets/images/home/mainslider.png") },
  { id: 2, image: require("../../../assets/images/home/mainslider.png") },
  { id: 3, image: require("../../../assets/images/home/mainslider.png") },
];

export const FlashSaleData = [
  {
    id: "1",
    image: <Product1 />,
    title: "Casual Clothes",
    price: "110.00",
    cutoff: "210.00",
  },
  {
    id: "2",
    image: <Product2 />,
    title: "Casual Clothes",
    price: "110.00",
    cutoff: "210.00",
  },
  {
    id: "3",
    image: <Product1 />,
    title: "Casual Clothes",
    price: "110.00",
    cutoff: "210.00",
  },
  {
    id: "4",
    image: <Product1 />,
    title: "Casual Clothes",
    price: "110.00",
    cutoff: "210.00",
  },
  {
    id: "5",
    image: <Product2 />,
    title: "Casual Clothes",
    price: "110.00",
    cutoff: "210.00",
  },
];

export const OfferBrandsData = [
  {
    id: "1",
    pageIdentifier: "homepage",
    image: <OfferBrands1 />,
    title: "Women Printed ...",
    para: "Auq ue por ro qu is quam est dolor em ipsum quia",
    price: "1500",
    previousPrice: "2499",
  },
  {
    id: "2",
    pageIdentifier: "homepage",
    image: <OfferBrands2 />,
    title: "Women Printed ...",
    para: "Auq ue por ro qu is quam est dolor em ipsum quia",
    price: "1500",
    previousPrice: "2499",
  },
  {
    id: "3",
    pageIdentifier: "homepage",
    image: <OfferBrands3 />,
    title: "Women Printed ...",
    para: "Auq ue por ro qu is quam est dolor em ipsum quia",
    price: "1500",
    previousPrice: "2499",
  },
  {
    id: "4",
    pageIdentifier: "homepage",
    image: <OfferBrands4 />,
    title: "Women Printed ...",
    para: "Auq ue por ro qu is quam est dolor em ipsum quia",
    price: "1500",
    previousPrice: "2499",
  },
];

export const DrawerTabs = [
  {
    id: 1,
    icon: <MyOrders />,
    title: "My Orders",
    link: "Myorders",
  },
  {
    id: 2,
    icon: <MyWishlist />,
    title: "My Wishlist",
    link: "Mywishlist",
  },
  {
    id: 3,
    icon: <MyAddress />,
    title: "My Address",
    link: "Myaddress",
  },
  {
    id: 4,
    icon: <MyPayment />,
    title: "Payment History",
    link: "Paymenthistory",
  },
  {
    id: 5,
    icon: <Support />,
    title: "Help & Support",
    link: "Helpandsupport",
  },
  {
    id: 6,
    icon: <SettingsIcon />,
    title: "Settings",
    link: "Settings",
  },
];

export const CategoryTabs = [
  { id: 1, title: "All" },
  { id: 2, title: "Men" },
  { id: 3, title: "Women" },
  { id: 4, title: "Kids" },
  { id: 5, title: "Footwear" },
];

export const AllCategories = [
  {
    id: 1,
    image: <Clothing />,
    title: "Clothing",
    innerscreen: "Clothing",
  },
  {
    id: 2,
    image: <Accessories />,
    title: "Accessories",
    innerscreen: "Clothing",

  },
  {
    id: 3,
    image: <Hats />,
    title: "Hats",
    innerscreen: "Clothing",

  },
  {
    id: 4,
    image: <Bags />,
    title: "Bags",
    innerscreen: "Clothing",

  },
];

export const ClothingData = [
  {
    id: 1,
    pageIdentifier: "clothingPage",
    image: <Clothing1 />,
    detailImage: <Clothingdet1 />,
    title: "Plane Shirts",
    para: "Auq ue por ro qu is quam est dolor em ipsum quia",
    price: "1500",
    previousPrice: "2499",
    detaildescription:
      "Our combo offer is designed to give you the best value for your money. You will get multiple high-quality Full sleeves shirts at a discounted price, making it a budget-friendly way to refresh your wardrobe",
  },
  {
    id: 2,
    pageIdentifier: "clothingPage",

    image: <Clothing2 />,
    detailImage: <Clothingdet2 />,

    title: "Full Sleeves Shirts",
    para: "Auq ue por ro qu is quam est dolor em ipsum quia",
    price: "1500",
    previousPrice: "2499",
    detaildescription:
      "Our combo offer is designed to give you the best value for your money. You will get multiple high-quality Full sleeves shirts at a discounted price, making it a budget-friendly way to refresh your wardrobe",
  },
  {
    id: 3,
    pageIdentifier: "clothingPage",

    image: <Clothing3 />,
    detailImage: <Clothingdet3 />,

    title: "Checked Shirts",
    para: "Auq ue por ro qu is quam est dolor em ipsum quia",
    price: "1500",
    previousPrice: "2499",
    detaildescription:
      "Our combo offer is designed to give you the best value for your money. You will get multiple high-quality Full sleeves shirts at a discounted price, making it a budget-friendly way to refresh your wardrobe",
  },
  {
    id: 4,
    pageIdentifier: "clothingPage",

    image: <Clothing4 />,
    detailImage: <Clothingdet4 />,

    title: "Halfsleeve Shirts",
    para: "Auq ue por ro qu is quam est dolor em ipsum quia",
    price: "1500",
    previousPrice: "2499",
    detaildescription:
      "Our combo offer is designed to give you the best value for your money. You will get multiple high-quality Full sleeves shirts at a discounted price, making it a budget-friendly way to refresh your wardrobe",
  },
  {
    id: 5,
    pageIdentifier: "clothingPage",

    image: <Clothing5 />,
    detailImage: <Clothingdet5 />,

    title: "Round Neck Shirts",
    para: "Auq ue por ro qu is quam est dolor em ipsum quia",
    price: "1500",
    previousPrice: "2499",
    detaildescription:
      "Our combo offer is designed to give you the best value for your money. You will get multiple high-quality Full sleeves shirts at a discounted price, making it a budget-friendly way to refresh your wardrobe",
  },
  {
    id: 6,
    pageIdentifier: "clothingPage",

    image: <Clothing6 />,
    detailImage: <Clothingdet6 />,

    title: "Five Sleeve Shirts",
    para: "Auq ue por ro qu is quam est dolor em ipsum quia",
    price: "1500",
    previousPrice: "2499",
    detaildescription:
      "Our combo offer is designed to give you the best value for your money. You will get multiple high-quality Full sleeves shirts at a discounted price, making it a budget-friendly way to refresh your wardrobe",
  },
];

export const colors = [
  { id: 1, color: "#FF0000", name: "Red" },
  { id: 2, color: "#0300AA", name: "Violet" },
  { id: 3, color: "#FF00E5", name: "Pink" },
  { id: 4, color: "#970000", name: "Meroon" },
  { id: 5, color: "#000000", name: "Black" },
];

export const SizesData = [
  { id: 1, size: "S" },
  { id: 2, size: "M" },
  { id: 3, size: "L" },
  { id: 4, size: "XL" },
  { id: 5, size: "2XL" },
  { id: 6, size: "3XL" },
];

export const ReviewData = [
  {
    id: "1",
    image: require("../../../assets/images/home/review1.png"),
    name: "Annette Black",
    para: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, ",
    days: "12days ago",
  },
  {
    id: "2",
    image: require("../../../assets/images/home/review2.png"),
    name: "Dianne Russell",
    para: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam  ",
    days: "12days ago",
  },
];

export const profileDetailInputData = [
  { id: "1", placeholder: "Devon Lane", icon: "account-circle" },
  { id: "2", placeholder: "tim.jennings@example.com", icon: "email" },
  { id: "3", placeholder: "(406) 555-0120", icon: "phone" },
];

export const profileDetailChangePassword = [
  { id: "1", placeholder: "Enter password", icon: "lock" },
  { id: "2", placeholder: "Re-enter password", icon: "lock" },
];

export const MyAddressData = [
  {
    id: "1",
    name: "Jane Cooper",
    location: "6391 Elgin St. Celina, Delaware 10299",
    phone: "(316) 555-0116",
  },
  {
    id: "2",
    name: "Robert Fox",
    location: "8502 Preston Rd. Inglewood, Maine 98380",
    phone: "(208) 555-0112",
  },
];

export const AddAddressData = [
  { id: "1", placeholder: "Name", icon: "account-circle" },
  { id: "2", placeholder: "Address", icon: "home" },
];

export const CityPinData = [
  { id: "1", placeholder: "City", icon: "map" },
  { id: "2", placeholder: "Pin-Code", icon: "pin", type: "numeric" },
];

export const CountryData = [
  { id: "1", country: "India" },
  { id: "2", country: "Nepal" },
  { id: "3", country: "Mexico" },
  { id: "4", country: "Madagascar" },
  { id: "5", country: "Pakistan" },
];

export const NotificationsData = [
  {
    id: "1",
    notification:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
  },
  {
    id: "2",
    notification:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
  },
  {
    id: "3",
    notification:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
  },
  {
    id: "4",
    notification:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma",
  },
  {
    id: "5",
    notification:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
  },
  {
    id: "6",
    notification:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
  },
  {
    id: "7",
    notification:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu",
  },
];

export const CardData = [
  {
    id: "1",
    fieldName: "name",
    placeholder: "Name on the card",
    icon: "account-circle",
  },
  {
    id: "2",
    fieldName: "cardnumber",
    placeholder: "Card Number",
    icon: "credit-card",
    type: "numeric",
  },
];

export const CardDetail = [
  {
    id: "1",
    fieldName: "cvv",
    placeholder: "cvv",
    icon: "lock",
    type: "numeric",
  },
];

export const PaymentHistoryData = [
  {
    id: "1",
    paymentmode: "Master Card",
    date: "Dec 18 2023",
    time: " 1:00 pm",
    amount: "3,000",
    image: <MasterCard />,
  },
  {
    id: "2",
    paymentmode: "Master Card",
    date: "Dec 18 2023",
    time: " 1:00 pm",
    amount: "3,000",
    image: <MasterCard />,
  },
  {
    id: "3",
    paymentmode: "Google Pay",
    date: "Dec 18 2023",
    time: " 1:00 pm",
    amount: "3,000",
    image: <Gpay />,
  },
  {
    id: "4",
    paymentmode: "Master Card",
    date: "Dec 18 2023",
    time: " 1:00 pm",
    amount: "3,000",
    image: <MasterCard />,
  },
  {
    id: "5",
    paymentmode: "Phone Pay",
    date: "Dec 18 2023",
    time: " 1:00 pm",
    amount: "3,000",
    image: <Phonepay />,
  },
];

export const MyOrderData = [
  { id: "1", orderid: "#0D6765", items: "4 items", image: <MyordersIcon /> },
  { id: "2", orderid: "#00D569", items: "2 items", image: <MyordersIcon /> },
  { id: "3", orderid: "#4D0009", items: "1 items", image: <MyordersIcon /> },
];

export const DeliveredOrders = [
  { id: "1", orderid: "#0D6765", items: "4 items", image: <MyordersIcon /> },
  { id: "2", orderid: "#00D569", items: "2 items", image: <MyordersIcon /> },
  { id: "3", orderid: "#4D0009", items: "1 items", image: <MyordersIcon /> },
];

export const OderDetailsData = [
  { id: "1", title: "Order date" },
  { id: "2", title: "Order no" },
  { id: "31", title: "Order Total" },
];

export const ShippngData = [
  { id: "1", title: "Jacket", size: "XL", amount: "200", image: <Jacket /> },
  { id: "2", title: "Shirt", size: "XL", amount: "200", image: <Shirt /> },
  { id: "3", title: "Jeans", size: "XL", amount: "200", image: <Jeans /> },
];

export const TimelineData = [
  { title: "Order Placed", description: "20 Dec", icon: <ActiveTimeline /> },
  {
    title: "Order Confirmed ",
    description: "24 Dec",
    icon: <ActiveTimeline />,
  },
  { title: "Shipped", description: "28 Dec", icon: <ActiveTimeline /> },
  { title: "Delivered", description: "30 Dec", icon: <InActiveTimeline /> },
];

export const HelpAndSupportData = [
  {
    id: 1,
    title: "Orders, Delivery & Payment",
    icon: <OrdersIcon />,
    link: "Orderdelivery",
  },
  {
    id: 2,
    title: "Refunds & Returns",
    icon: <RefundIcon />,
    link: "Refundreturn",
  },
  {
    id: 3,
    title: "Canellations",
    icon: <Cancellation />,
    link: "Cancellation",
  },
  {
    id: 4,
    title: "Offer and Combos",
    icon: <OfferIcon />,
    link: "Offerandcombo",
  },
  { id: 5, title: "Membership", icon: <Membership />, link: "Membership" },
];

export const dropdownData = [
  {
    id: 1,
    title: "Orders",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 2,
    title: "Delivery",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 3,
    title: "Payment",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
];

 export const buttonsData = [
  {
    id: 1,
    label: "Cancel",
    border: 0.5,
    bgcolor: "white",
    color: "black",
    // function: handleCancel,
  },
  {
    id: 2,
    label: "Logout",
    border: 0,
    bgcolor: "#0300AA",
    color: "white",
    // function: handleGoToLogin,
  },
];

export const RefundDropdownData = [
  {
    id: 1,
    title: "How do exchange my product?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 2,
    title: "How will i get my refund?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 3,
    title: "Which nas cetur ridicul us mus. Do ne?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 4,
    title: "How  nas cetur ridicul us mus. Do ne?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 5,
    title: "How cum soci is nato que penatibus?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
];

export const RefundSubDropdownData = [
  {
    id: 1,
    title: "Refunds",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 2,
    title: "Retunns",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
];

export const CancellationDropdownData = [
  {
    id: 1,
    title: "Can I cancel my order",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 2,
    title: "How will i get my refund?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 3,
    title: "Can I cancel my cancellation request",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
];

export const OfferandComboData = [
  {
    id: 1,
    title: "What are combo offer?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 2,
    title: "Can I available multiple combo offer?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 3,
    title: "Can I cancel my cancellation request",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 4,
    title: "How  nas cetur ridicul us mus. Do ne?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 5,
    title: "How cum soci is nato que penatibus?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
];

export const MembershipData = [
  {
    id: 1,
    title: "How do i become a member ?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 2,
    title: "Can I upgrade my membership plan?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 3,
    title: "How do i get the member prices on product?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 4,
    title: "Which nas cetur ridicul us mus. Do ne?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 5,
    title: "How  nas cetur ridicul us mus. Do ne?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
  {
    id: 6,
    title: "How cum soci is nato que penatibus?",
    para: "Lorem ipsum dolor sit amet, consec tetuer? adipiscing elit. Aene an comm odo ligula eget dolor. Aene an mass a.? Cum soci is nato que penatibus et magn is? ",
  },
];
