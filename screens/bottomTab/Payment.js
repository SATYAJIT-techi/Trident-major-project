import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../../GlobalStyles";

const Payment = ({navigation}) => {

  return (
    <View style={styles.payment}>
      <View style={[styles.flightDetails, styles.paymentInputShadowBox]}>
        <View style={styles.frameParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../../assets/frame-2328.png")}
          />
          <View style={styles.calenderParent}>
            <Image
              style={[styles.calenderIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../../assets/calender.png")}
            />
            <View style={styles.wrapper}>
              <Text style={[styles.text, styles.textClr]}>15/07/2022</Text>
            </View>
          </View>
        </View>
        <View style={styles.flightDetailsChild} />
        <View style={styles.frameGroup}>
          <View style={styles.parent}>
            <Text style={[styles.text1, styles.textTypo]}>5.50</Text>
            <Text style={[styles.del, styles.delTypo]}>DEL</Text>
          </View>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../../assets/group-451.png")}
          />
          <View style={styles.group}>
            <Text style={[styles.text2, styles.textTypo]}>7.30</Text>
            <Text style={[styles.ccu, styles.delTypo]}>CCU</Text>
          </View>
        </View>
        <View style={styles.flightDetailsChild} />
        <View style={styles.frameGroup}>
          <Text style={[styles.total, styles.textClr]}>Total</Text>
          <Text style={styles.text3}>$230</Text>
        </View>
      </View>
      <View style={[styles.paymentInput, styles.paymentInputShadowBox]}>
        <View style={styles.parent}>
          <View>
            <View>
              <Text style={[styles.cardNumber, styles.textClr]}>
                Card number
              </Text>
              <View style={styles.frameView}>
                <View style={styles.frameWrapper}>
                  <View style={styles.container}>
                    <Text style={styles.text4}>5300 0000 0000 0000</Text>
                  </View>
                </View>
                <View style={[styles.frameInner, styles.frameBorder]} />
              </View>
            </View>
            <View style={styles.cardHolderNameParent}>
              <Text style={[styles.cardNumber, styles.textClr]}>
                Card holder name
              </Text>
              <View style={styles.frameView}>
                <View style={styles.frameWrapper}>
                  <View style={styles.container}>
                    <Text style={styles.text4}>John Doe</Text>
                  </View>
                </View>
                <View style={[styles.frameInner, styles.frameBorder]} />
              </View>
            </View>
            <View style={styles.frameParent2}>
              <View>
                <Text style={[styles.cardNumber, styles.textClr]}>CVV</Text>
                <View style={styles.frameView}>
                  <View style={styles.frameWrapper}>
                    <View style={styles.container}>
                      <Text style={styles.text4}>000</Text>
                    </View>
                  </View>
                  <View style={[styles.frameChild1, styles.frameBorder]} />
                </View>
              </View>
              <View style={styles.expiryDateParent}>
                <Text style={[styles.cardNumber, styles.textClr]}>
                  Expiry date
                </Text>
                <View style={styles.frameView}>
                  <View style={styles.frameWrapper}>
                    <View style={styles.container}>
                      <Text style={styles.text4}>05/24</Text>
                    </View>
                  </View>
                  <View style={[styles.frameChild1, styles.frameBorder]} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.paymentOptions}>
            <Image
              style={[styles.mastercardLogoIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../../assets/mastercard-logo1.png")}
            />
            <Image
              style={[styles.visaLogoIcon, styles.logoIconSpaceBlock]}
              resizeMode="cover"
              source={require("../../assets/visa-logo.png")}
            />
            <Image
              style={[styles.amexLogoIcon, styles.logoIconSpaceBlock]}
              resizeMode="cover"
              source={require("../../assets/amex-logo.png")}
            />
            <Image
              style={[styles.amexLogoIcon, styles.logoIconSpaceBlock]}
              resizeMode="cover"
              source={require("../../assets/paypal-logo.png")}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Pressable
            style={[styles.buttonBig, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("BoardingPass")}
          >
            <Text style={[styles.confirm, styles.confirmTypo]}>Confirm</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonBig1, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={[styles.confirm1, styles.confirmTypo]}>Cancel</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.topBar}>
        <View style={styles.androidStatusBars}>
          <View style={styles.frameParent}>
            <View style={[styles.androidStatusBars2, styles.contentFlexBox]}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../assets/12302.png")}
              />
              <View style={styles.frameParent}>
                <Image
                  style={[styles.wifiIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/wifi3.png")}
                />
                <Image
                  style={[styles.frameIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../../assets/frame-21092.png")}
                />
                <Image
                  style={styles.batteryIcon}
                  resizeMode="cover"
                  source={require("../../assets/battery2.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.content, styles.contentFlexBox]}>
          <Pressable
            style={styles.leftArrowFlexBox}
            onPress={() => navigation.navigate("PersonalInfo")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../../assets/left-arrow.png")}
            />
          </Pressable>
          <View style={styles.header}>
            <Text style={styles.bookFlight}>Payment</Text>
          </View>
          <View style={[styles.hamburgerMenu, styles.leftArrowFlexBox]}>
            <Image
              style={[styles.menuIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/menu.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentInputShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    position: "absolute",
  },
  iconLayout2: {
    height: 20,
    overflow: "hidden",
  },
  textClr: {
    color: Color.defaultBlack,
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    width: 56,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.defaultBlack,
    lineHeight: 24,
  },
  delTypo: {
    marginTop: 4,
    fontSize: FontSize.size_base,
    color: Color.defaultBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frameBorder: {
    marginTop: 6,
    borderTopWidth: 0.8,
    borderColor: "#e6e8e7",
    height: 1,
    borderStyle: "solid",
  },
  logoIconSpaceBlock: {
    marginLeft: 16,
    height: 20,
    overflow: "hidden",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_85xl,
    width: 296,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  confirmTypo: {
    width: 120,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 24,
  },
  contentFlexBox: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    height: 18,
    width: 18,
  },
  leftArrowFlexBox: {
    padding: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameChild: {
    width: 48,
    height: 24,
  },
  calenderIcon: {
    width: 20,
  },
  text: {
    width: 78,
    textAlign: "right",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.defaultBlack,
    fontSize: FontSize.size_sm,
    lineHeight: 24,
  },
  wrapper: {
    marginLeft: 8,
    flexDirection: "row",
  },
  calenderParent: {
    marginLeft: 142,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    flexDirection: "row",
  },
  flightDetailsChild: {
    borderColor: "#84b6f8",
    borderTopWidth: 1,
    opacity: 0.15,
    marginTop: 16,
    height: 1,
    width: 297,
    borderStyle: "solid",
  },
  text1: {
    textAlign: "left",
  },
  del: {
    textAlign: "left",
  },
  parent: {
    justifyContent: "center",
  },
  frameItem: {
    width: 156,
    height: 36,
    marginLeft: 14,
  },
  text2: {
    textAlign: "right",
  },
  ccu: {
    textAlign: "right",
  },
  group: {
    alignItems: "flex-end",
    marginLeft: 14,
    justifyContent: "center",
  },
  frameGroup: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  total: {
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    width: 34,
    textAlign: "left",
    color: Color.defaultBlack,
    fontSize: FontSize.size_sm,
  },
  text3: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    width: 64,
    height: 28,
    marginLeft: 198,
    color: Color.secondary,
    textAlign: "right",
  },
  flightDetails: {
    top: 88,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    backgroundColor: "#eeefef",
    shadowColor: "rgba(89, 27, 27, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    paddingHorizontal: Padding.p_13xl,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_base,
    left: 0,
  },
  cardNumber: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.defaultBlack,
    fontSize: FontSize.size_sm,
  },
  text4: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.darkgray_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
  },
  frameInner: {
    width: 297,
    marginTop: 6,
    borderTopWidth: 0.8,
    borderColor: "#e6e8e7",
  },
  frameView: {
    marginTop: 10,
  },
  cardHolderNameParent: {
    marginTop: 20,
  },
  frameChild1: {
    width: 133,
  },
  expiryDateParent: {
    marginLeft: 32,
  },
  frameParent2: {
    marginTop: 20,
    flexDirection: "row",
  },
  mastercardLogoIcon: {
    width: 26,
  },
  visaLogoIcon: {
    width: 26,
  },
  amexLogoIcon: {
    width: 31,
  },
  paymentOptions: {
    marginTop: 32,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  confirm: {
    color: Color.white,
  },
  buttonBig: {
    backgroundColor: Color.secondary,
  },
  confirm1: {
    color: Color.secondary,
  },
  buttonBig1: {
    borderColor: "#ec441e",
    borderWidth: 1,
    marginTop: 20,
    borderStyle: "solid",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_85xl,
    width: 296,
    borderRadius: Border.br_5xs,
  },
  button: {
    marginTop: 40,
  },
  paymentInput: {
    top: 303,
    left: 16,
    borderRadius: Border.br_base,
    shadowColor: "rgba(51, 51, 51, 0.07)",
    shadowRadius: 20,
    elevation: 20,
    padding: Padding.p_base,
  },
  icon: {
    height: 9,
    width: 31,
  },
  wifiIcon: {
    overflow: "hidden",
  },
  frameIcon: {
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
    paddingVertical: 0,
    height: 24,
  },
  androidStatusBars: {
    paddingTop: Padding.p_5xs,
  },
  bookFlight: {
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    width: 192,
    textAlign: "center",
    color: Color.defaultBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  header: {
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    alignItems: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.gray_100,
  },
  payment: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.gray_100,
  },
});

export default Payment;
