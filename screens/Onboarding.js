import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.onboarding}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Text style={[styles.theWorld, styles.letsTypo]}>The World</Text>
      <Text style={[styles.explore, styles.enterTypo]}>Explore</Text>
      <Text style={[styles.lets, styles.letsPosition]}>Let’s</Text>
      <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorPosition]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
        faucibus tortor, suscipit velit phasellus massa.
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate("WelcomePage")}>
      <View
        style={[styles.onboardingChild, styles.loremIpsumDolorPosition]}
        locations={[0, 1]}
        colors={["#8bd8f9", "#5495ff"]}
        useAngle={true}
        angle={257.4}
      />
      <Text style={[styles.enter, styles.enterTypo]}>Enter</Text>
      </TouchableOpacity>
      <Image
        style={styles.converted1Icon}
        resizeMode="cover"
        source={require("../assets/10476converted-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  letsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  enterTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
    textTransform: "uppercase",
    position: "absolute",
  },
  letsPosition: {
    left: 45,
    color: Color.steelblue_100,
  },
  loremIpsumDolorPosition: {
    left: 50,
    position: "absolute",
  },
  vectorIcon: {
    height: "72.29%",
    width: "140.53%",
    top: "52.59%",
    right: "-40.53%",
    bottom: "-24.88%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  theWorld: {
    top: 171,
    left: 47,
    color: Color.steelblue_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textTransform: "uppercase",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  explore: {
    top: 111,
    fontSize: 48,
    left: 45,
    color: Color.steelblue_100,
  },
  lets: {
    top: 86,
    textAlign: "left",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    left: 45,
    textTransform: "uppercase",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 226,
    fontSize: FontSize.size_3xs,
    width: 231,
    textAlign: "left",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.steelblue_100,
  },
  onboardingChild: {
    top: 312,
    borderRadius: 15,
    width: 156,
    height: 50,
    backgroundColor: Color.gradient,
  },
  enter: {
    top: 319,
    left: 93,
    fontSize: FontSize.size_5xl,
    color: Color.white,
  },
  converted1Icon: {
    top: 405,
    left: 0,
    width: 376,
    height: 376,
    position: "absolute",
  },
  onboarding: {
    backgroundColor: "#f4feff",
    flex: 1,
    backgroundColor:Color.white,
  },
});

export default Onboarding;
