import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const Signup = ({navigation}) => {
  return (
    <View style={styles.signup}>
      <View style={[styles.inputSection, styles.inputSectionPosition]}>
        <View>
          <View>
            <View style={styles.email}>
              <Text style={[styles.label, styles.labelTypo]} numberOfLines={1}>
                Name
              </Text>
              <View style={[styles.input1, styles.input1Layout]}>
                <Text style={[styles.text, styles.textLayout]}>John Doe</Text>
              </View>
            </View>
            <View style={styles.email1}>
              <Text style={[styles.label, styles.labelTypo]} numberOfLines={1}>
                Email Address
              </Text>
              <View style={[styles.input1, styles.input1Layout]}>
                <Text style={[styles.text1, styles.textLayout]}>
                  hello@example.com
                </Text>
              </View>
            </View>
            <View style={styles.email1}>
              <Text style={[styles.label, styles.labelTypo]} numberOfLines={1}>
                Password
              </Text>
              <View style={[styles.input1, styles.input1Layout]}>
                <Text style={[styles.text2, styles.orClr]}>●●●●●●●●●●●●●●</Text>
                <Image
                  style={[styles.iconeye, styles.iconeyeLayout]}
                  resizeMode="cover"
                  source={require("../assets/iconeye.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.button}>
            <Text style={styles.byContinuingYouContainer}>
              <Text
                style={styles.byContinuingYou}
              >{`By continuing, you agree to our `}</Text>
              <Text style={styles.termsOfService}>terms of service.</Text>
            </Text>
           <TouchableOpacity onPress={()=>navigation.navigate("CalenderPage")}>
           <View style={styles.loginprimary}>
              <Text style={[styles.label3, styles.labelTypo]}>Sign up</Text>
            </View>
           </TouchableOpacity>
          </View>
        </View>
        <View style={styles.devider}>
          <View style={[styles.deviderChild, styles.headerPosition]} />
          <View style={styles.signInWith}>
            <Text style={[styles.or, styles.orClr]}>or</Text>
          </View>
        </View>
        <TouchableOpacity  onPress={()=>navigation.navigate("CalenderPage")} >
        <View style={[styles.loginsecondary, styles.input1Layout]}>
          <Image
            style={styles.iconeyeLayout}
            resizeMode="cover"
            source={require("../assets/google.png")}
          />
          <Text
            style={[styles.continueWithGoogle, styles.continueWithGoogleTypo]}
          >
            Continue with Google
          </Text>
        </View>
        </TouchableOpacity>
      </View>
      <Text
        style={[styles.alreadyHaveAnContainer, styles.continueWithGoogleTypo]}
        numberOfLines={1}
      >
        <Text style={styles.orClr}>{`Already have an account? `}</Text>
        <Text style={[styles.signInHere, styles.login1Typo]}>Sign in here</Text>
      </Text>
      <View style={[styles.androidStatusBars, styles.headerPosition]}>
        <View style={styles.androidStatusBars1}>
          <View style={styles.androidStatusBars2}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/12301.png")}
            />
            <View style={styles.androidStatusBars1}>
              <Image
                style={[styles.wifiIcon, styles.wifiIconLayout]}
                resizeMode="cover"
                source={require("../assets/wifi2.png")}
              />
              <Image
                style={[styles.frameChild, styles.wifiIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame-21091.png")}
              />
              <Image
                style={styles.batteryIcon}
                resizeMode="cover"
                source={require("../assets/battery1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.login1, styles.login1Typo]}>
          Create an Account
        </Text>
        <Text style={styles.subtitle}>
          Enter your new password twice below to reset a new password
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputSectionPosition: {
    left: 24,
    position: "absolute",
  },
  labelTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  input1Layout: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    height: 48,
    borderRadius: Border.br_5xs,
  },
  textLayout: {
    width: 280,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    height: 24,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  orClr: {
    color: Color.gray01,
    fontFamily: FontFamily.interRegular,
  },
  iconeyeLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  headerPosition: {
    left: "50%",
    position: "absolute",
  },
  continueWithGoogleTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    lineHeight: 24,
  },
  login1Typo: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  wifiIconLayout: {
    height: 18,
    width: 18,
  },
  label: {
    color: Color.black,
    height: 24,
    width: 312,
    textAlign: "left",
    lineHeight: 24,
    overflow: "hidden",
  },
  text: {
    color: Color.gray999,
  },
  input1: {
    borderColor: "#d0d5dd",
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
  },
  email: {
    justifyContent: "center",
  },
  text1: {
    color: Color.lightslategray,
  },
  email1: {
    marginTop: 16,
    justifyContent: "center",
  },
  text2: {
    fontSize: FontSize.size_9xs,
    letterSpacing: 4,
    width: 232,
    height: 24,
    textAlign: "left",
    lineHeight: 24,
  },
  iconeye: {
    marginLeft: 24,
  },
  byContinuingYou: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.gray021,
  },
  termsOfService: {
    color: Color.secondary,
    fontFamily: FontFamily.interRegular,
  },
  byContinuingYouContainer: {
    fontSize: 13,
    lineHeight: 20,
    width: 312,
    textAlign: "left",
  },
  label3: {
    lineHeight: 16,
    color: Color.white,
    width: 160,
    textAlign: "center",
  },
  loginprimary: {
    backgroundColor: Color.secondary,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_base,
    marginTop: 16,
    flexDirection: "row",
    height: 48,
    borderRadius: Border.br_5xs,
    width: 312,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 24,
  },
  deviderChild: {
    marginLeft: -171.25,
    top: 18,
    borderColor: "#4b5768",
    borderTopWidth: 0.5,
    width: 343,
    height: 1,
    opacity: 0.25,
    zIndex: 0,
    borderStyle: "solid",
  },
  or: {
    fontSize: FontSize.size_sm,
    width: 48,
    textAlign: "center",
    lineHeight: 20,
  },
  signInWith: {
    padding: Padding.p_5xs,
    zIndex: 1,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  devider: {
    marginTop: 16,
    alignItems: "center",
  },
  continueWithGoogle: {
    marginLeft: 16,
    textAlign: "center",
    color: Color.gray021,
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
  },
  loginsecondary: {
    backgroundColor: Color.gray04,
    paddingHorizontal: Padding.p_35xl,
    marginTop: 16,
    width: 312,
    justifyContent: "center",
    alignItems: "center",
  },
  inputSection: {
    top: 180,
    alignItems: "center",
  },
  signInHere: {
    color: Color.secondary,
  },
  alreadyHaveAnContainer: {
    top: 736,
    textAlign: "center",
    height: 24,
    width: 312,
    lineHeight: 24,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    width: 31,
    height: 9,
  },
  wifiIcon: {
    overflow: "hidden",
  },
  frameChild: {
    marginLeft: 3.07,
  },
  batteryIcon: {
    width: 19,
    height: 19,
    marginLeft: 3.07,
    overflow: "hidden",
  },
  androidStatusBars1: {
    flexDirection: "row",
  },
  androidStatusBars2: {
    width: 360,
    paddingVertical: 0,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    height: 24,
    alignItems: "center",
  },
  androidStatusBars: {
    marginLeft: -180,
    top: 0,
    paddingTop: Padding.p_5xs,
  },
  login1: {
    fontSize: FontSize.size_9xl,
    lineHeight: 40,
    color: Color.defaultBlack,
    width: 312,
    textAlign: "left",
  },
  subtitle: {
    fontSize: FontSize.size_lg,
    lineHeight: 26,
    color: Color.gray555,
    display: "none",
    marginTop: 12,
    fontFamily: FontFamily.interRegular,
    width: 312,
    textAlign: "left",
  },
  header: {
    marginLeft: -156,
    top: 92,
  },
  signup: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Signup;
