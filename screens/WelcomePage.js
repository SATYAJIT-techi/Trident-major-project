import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const WelcomePage = ({ navigation }) => {
    return (
        <View style={styles.welcomePage}>
            <View style={styles.textParent}>
                <View>
                    <Text style={[styles.welcomeToTheContainer, styles.thisFileIsLayout]}>
                        <Text style={styles.welcomeToThe}>{`Welcome to the
`}</Text>
                        <Text style={styles.flightBookingAppTypo}>
                            Flight Booking App UI Kits
                        </Text>
                    </Text>
                    <Text style={[styles.thisFileIs, styles.thisFileIsLayout]}>
                        This file is totally free for education purpose, for commercial
                        licence please contact me on below address.
                    </Text>
                </View>
                <View style={styles.splitLine} />
                <View style={[styles.contactMe, styles.contactMeFlexBox]}>
                    <Text
                        style={styles.contactMeIf}
                    >{`Contact me if you need to design your 
custom project`}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <View
                            style={[
                                styles.saeefalmahmudgmailcomWrapper,
                                styles.contactMeFlexBox,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.saeefalmahmudgmailcom,
                                    styles.flightBookingAppTypo,
                                ]}
                            >
                                saeefalmahmud@gmail.com
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    thisFileIsLayout: {
        width: 606,
        textAlign: "center",
    },
    contactMeFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    flightBookingAppTypo: {
        fontFamily: FontFamily.interSemibold,
        fontWeight: "600",
    },
    welcomeToThe: {
        fontFamily: FontFamily.interRegular,
    },
    welcomeToTheContainer: {
        fontSize: 40,
        lineHeight: 60,
        color: Color.defaultBlack,
    },
    thisFileIs: {
        fontSize: FontSize.size_5xl,
        lineHeight: 36,
        color: Color.gray02,
        marginTop: 32,
        fontFamily: FontFamily.interRegular,
    },
    splitLine: {
        backgroundColor: "#e7e7e7",
        width: 200,
        height: 2,
        marginTop: 52,
    },
    contactMeIf: {
        lineHeight: 42,
        color: Color.secondary1,
        width: 514,
        fontSize: FontSize.size_9xl,
        fontFamily: FontFamily.interRegular,
        textAlign: "center",
    },
    saeefalmahmudgmailcom: {
        lineHeight: 36,
        color: Color.white,
        textAlign: "left",
        fontSize: FontSize.size_9xl,
    },
    saeefalmahmudgmailcomWrapper: {
        borderRadius: Border.br_31xl,
        backgroundColor: Color.secondary,
        flexDirection: "row",
        paddingHorizontal: 64,
        paddingVertical: Padding.p_5xl,
        marginTop: 40,
    },
    contactMe: {
        marginTop: 52,
    },
    textParent: {
        position: "absolute",
        marginLeft: -303,
        top: 100,
        left: "50%",
        alignItems: "center",
    },
    welcomePage: {
        backgroundColor: Color.specialMainBG,
        flex: 1,
        overflow: "hidden",
    },
});

export default WelcomePage;
