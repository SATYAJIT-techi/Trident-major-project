import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Color, FontSize, Border } from "../GlobalStyles";
import { Calendar } from "react-native-calendars";

const PersonalInfo = ({ navigation }) => {

  return (
    <View style={styles.personalInfo}>
      <View style={[styles.personalInfo1, styles.topBarPosition]}>
        <View style={styles.personalInfo2}>
          <View style={styles.pictureName}>
            <View style={styles.picture}>
              <Image
                style={styles.pictureChild}
                resizeMode="cover"
                source={require("../assets/group-53.png")}
              />
            </View>
            <View style={styles.name}>
              <Text style={[styles.helloTraveler, styles.confirmTypo]}>
                Hello Traveler
              </Text>
            </View>
          </View>
          <View style={styles.infoDetails}>
            <View>
              <View style={styles.nameInner}>
                <View style={styles.nameWrapper}>
                  <Text style={styles.name2}>Name</Text>
                </View>
              </View>
              <View style={[styles.nameChild, styles.contentFlexBox]}>
                <View style={styles.nameParent}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../assets/name.png")}
                  />
                  <TextInput style={[styles.enterYourName, styles.textTypo]} placeholder="Enter your name here" />


                </View>
              </View>
            </View>
            <View style={styles.infoDetails}>
              <View style={styles.nameInner}>
                <View style={styles.nameWrapper}>
                  <Text style={styles.name2}>Addesss</Text>
                </View>
              </View>
              <View style={[styles.nameChild, styles.contentFlexBox]}>
                <View style={styles.nameParent}>
                  <Image
                    style={[styles.mapIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/map.png")}
                  />
                  <TextInput style={[styles.enterYourName, styles.textTypo]} placeholder="Enter your address" />


                </View>
              </View>
            </View>
            <View style={styles.infoDetails}>
              <View style={styles.nameInner}>
                <View style={styles.nameWrapper}>
                  <Text style={styles.name2}>Passport</Text>
                </View>
              </View>
              <View style={[styles.nameChild, styles.contentFlexBox]}>
                <View style={styles.nameParent}>
                  <Image
                    style={[styles.mapIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/passport.png")}
                  />
                  <TextInput style={[styles.enterYourName, styles.textTypo]} placeholder="  ED 25265 589" />


                </View>
              </View>
            </View>
            <View style={styles.infoDetails}>
              <View style={styles.nameInner}>
                <View style={styles.nameWrapper}>
                  <Text style={styles.name2}>DOB</Text>
                </View>
              </View>
              <View style={[styles.nameChild, styles.contentFlexBox]}>
                <View style={styles.nameParent}>
                  <Image
                    style={[styles.mapIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/dob.png")}
                  />
                  <TextInput style={[styles.text, styles.textTypo]} placeholder="12/05/1990" />
                </View>
                <TouchableOpacity onPress={()=> <Calendar/>}> 
                {/* NEED TO CHANGE THE CALEN */}
                <Image
                  style={[styles.calenderIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/calender.png")}
                />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.infoDetails}>
              <View style={styles.nameInner}>
                <View style={styles.nameWrapper}>
                  <Text style={styles.name2}>Country</Text>
                </View>
              </View>
              <View style={[styles.nameChild, styles.contentFlexBox]}>
                <View style={styles.nameParent}>
                  <Image
                    style={[styles.mapIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/globe.png")}
                  />
                  <Text style={[styles.text, styles.textTypo]}>Country</Text>
                </View>
                <Image
                  style={[styles.calenderIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/down-arrow.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.buttonBig}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={[styles.confirm, styles.confirmTypo]}>Confirm</Text>
        </Pressable>
        <Pressable
          style={styles.skip}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={styles.skip1}>Skip</Text>
        </Pressable>
      </View>
      <View style={[styles.topBar, styles.topBarPosition]}>

        <View style={[styles.content, styles.contentFlexBox]}>
          <Pressable
            style={styles.leftArrowFlexBox}
            onPress={() => navigation.navigate("Seats")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/left-arrow.png")}
            />
          </Pressable>
          <View style={styles.header}>
            <Text style={[styles.bookFlight, styles.confirmTypo]}>
              Personal Info
            </Text>
          </View>
          <View style={[styles.hamburgerMenu, styles.leftArrowFlexBox]}>
            <Image
              style={[styles.menuIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/menu.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarPosition: {
    position: "absolute",
    alignItems: "center",
  },
  confirmTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  contentFlexBox: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    marginLeft: 10,
    color: Color.darkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 24,
  },
  iconLayout1: {
    height: 20,
    width: 20,
  },
  wifiIconLayout: {
    height: 18,
    width: 18,
  },
  leftArrowFlexBox: {
    padding: Padding.p_9xs,
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  pictureChild: {
    width: 66,
    height: 66,
  },
  picture: {
    flexDirection: "row",
  },
  helloTraveler: {
    color: Color.defaultBlack,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  name: {
    width: 200,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pictureName: {
    justifyContent: "center",
    alignItems: "center",
  },
  name2: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.gray555,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  nameWrapper: {
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.gray_100,
  },
  nameInner: {
    zIndex: 1,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
  },
  enterYourName: {
    fontSize: FontSize.size_sm,
    width: 234,
  },
  nameParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameChild: {
    borderStyle: "solid",
    borderColor: "#e6e8e7",
    borderWidth: 1,
    paddingVertical: Padding.p_sm,
    zIndex: 0,
    marginTop: -12,
    borderRadius: Border.br_5xs,
  },
  mapIcon: {
    overflow: "hidden",
  },
  infoDetails: {
    marginTop: 16,
  },
  text: {
    width: 176,
    fontSize: FontSize.size_base,
    color: Color.darkgray_100,
  },
  calenderIcon: {
    marginLeft: 38,
    overflow: "hidden",
  },
  personalInfo2: {
    alignItems: "center",
  },
  confirm: {
    fontSize: FontSize.size_lg,
    color: Color.white,
    width: 120,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 24,
  },
  buttonBig: {
    backgroundColor: Color.secondary,
    width: 296,
    paddingHorizontal: Padding.p_85xl,
    paddingVertical: Padding.p_base,
    marginTop: 24,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  skip1: {
    color: Color.secondary,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  skip: {
    marginTop: 24,
  },
  personalInfo1: {
    top: 128,
    left: 32,
    alignItems: "center",
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
  androidStatusBars2: {
    width: 360,
    justifyContent: "space-between",
    height: 24,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  androidStatusBars: {
    paddingTop: Padding.p_5xs,
  },
  bookFlight: {
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    width: 192,
    color: Color.defaultBlack,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  header: {
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  menuIcon: {
    display: "none",
  },
  hamburgerMenu: {
    justifyContent: "flex-end",
  },
  content: {
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
  },
  topBar: {
    top: 0,
    left: 0,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.gray_100,
  },
  personalInfo: {
    flex: 1,

    backgroundColor: Color.gray_100,
  },
});

export default PersonalInfo;
