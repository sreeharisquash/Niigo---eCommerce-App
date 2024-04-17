import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  onboardingHeading: {
    color: "#FF6B00",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 36,
    letterSpacing: 0,
  },
  paragraph: {
    color: "grey",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.02,
  },
  innerpageHeading: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 34,
    letterSpacing: 0,
    textAlign: "left",
  },
  subheading: {
    fontSize: 18,
    fontWeight: "500",
  },
  container:{
    flex:1,
    paddingTop:"20%",
    paddingLeft:"5%",
    paddingRight:"5%",
    paddingBottom:"10%"
  },
  scrollbackground:{
    backgroundColor:"white"
  },
  subpara:{
    color:"grey",
    fontSize:14,
    fontWeight:"400",
    lineHeight:21,
  },
});
