import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const EmailLogin = ({navigation}) => {
    return (
        <View style={styles.emailLogin}>
            <View style={[styles.input, styles.inputPosition]}>
                <View style={styles.header}>
                    <View style={[styles.email, styles.emailLayout]}>
                        <Text style={[styles.email1, styles.labelTypo]}>Email</Text>
                        <View style={styles.emailChild} />
                    </View>
                    <View style={[styles.email2, styles.emailLayout]}>
                        <Text style={styles.subtitleTypo}>Phone Number</Text>
                    </View>
                </View>
                <View style={styles.inputSection}>
                    <View>
                        <View>
                            <View style={styles.email3}>
                                <Text style={[styles.label, styles.labelClr]} numberOfLines>
                                    Email Address
                                </Text>
                                <View style={[styles.input2, styles.input2Layout]}>
                                    <Text style={styles.text}>hello@example.com</Text>
                                </View>
                            </View>
                            <View style={styles.password}>
                                <View style={styles.header1}>
                                    <Text style={[styles.label1, styles.labelClr]} numberOfLines>
                                        Password
                                    </Text>
                                    <Text style={[styles.rightText, styles.labelTypo]}>
                                        Forgot Password?
                                    </Text>
                                </View>
                                <View style={[styles.input2, styles.input2Layout]}>
                                    <Text style={[styles.text1, styles.text1Clr]}>
                                        ●●●●●●●●●●●●●●
                                    </Text>
                                    <Image
                                        style={styles.iconeye}
                                        resizeMode="cover"
                                        source={require("../assets/iconeye.png")}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.button}>
                            <View style={styles.header1}>
                                <View style={styles.tick}>
                                    <View style={[styles.fill, styles.fillPosition]} />
                                    <Image
                                        style={[styles.iconsoutlinecheckmark, styles.fillPosition]}
                                        resizeMode="cover"
                                        source={require("../assets/iconsoutlinecheckmark.png")}
                                    />
                                </View>
                                <Text
                                    style={[styles.keepMeSigned, styles.keepMeSignedSpaceBlock]}
                                >
                                    Keep me signed in
                                </Text>
                            </View>
                            <View style={styles.loginprimary}>
                                <Text style={[styles.label2, styles.labelTypo]}>Login</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.devider}>
                        <View style={[styles.deviderChild, styles.deviderChildPosition]} />
                        <View style={styles.signInWith}>
                            <Text style={[styles.orSignIn, styles.text1Clr]}>
                                or sign in with
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.loginsecondary, styles.input2Layout]}>
                        <Image
                            style={styles.googleIcon}
                            resizeMode="cover"
                            source={require("../assets/google.png")}
                        />
                        <Text
                            style={[styles.continueWithGoogle, styles.keepMeSignedSpaceBlock]}
                        >
                            Continue with Google
                        </Text>
                    </View>
                </View>
            </View>
            <Text style={[styles.createAnAccount, styles.login1Typo]} numberOfLines>
                Create an account
            </Text>
            <View style={styles.androidStatusBars}>
                <View style={styles.header}>
                    <View style={styles.androidStatusBars2}>
                        <Image
                            style={styles.icon}
                            resizeMode="cover"
                            source={require("../assets/1230.png")}
                        />
                        <View style={styles.header}>
                            <Image
                                style={[styles.wifiIcon, styles.wifiIconLayout]}
                                resizeMode="cover"
                                source={require("../assets/wifi.png")}
                            />
                            <Image
                                style={[styles.frameChild, styles.wifiIconLayout]}
                                resizeMode="cover"
                                source={require("../assets/frame-2109.png")}
                            />
                            <Image
                                style={styles.batteryIcon}
                                resizeMode="cover"
                                source={require("../assets/battery.png")}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.header2, styles.inputPosition]}>
                <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
                <Text style={[styles.subtitle, styles.subtitleTypo]}>
                    Welcome back to the app
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputPosition: {
        left: 24,
        position: "absolute",
    },
    emailLayout: {
        height: 36,
        alignItems: "center",
    },
    labelTypo: {
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
    },
    labelClr: {
        color: Color.black,
        textAlign: "left",
    },
    input2Layout: {
        paddingVertical: Padding.p_xs,
        height: 48,
        borderRadius: Border.br_5xs,
        flexDirection: "row",
    },
    text1Clr: {
        color: Color.gray01,
        fontFamily: FontFamily.interRegular,
    },
    fillPosition: {
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
        width: "100%",
    },
    keepMeSignedSpaceBlock: {
        marginLeft: 16,
        lineHeight: 24,
        fontSize: FontSize.size_base,
    },
    deviderChildPosition: {
        left: "50%",
        position: "absolute",
    },
    login1Typo: {
        fontFamily: FontFamily.interSemibold,
        fontWeight: "600",
        width: 312,
    },
    wifiIconLayout: {
        height: 18,
        width: 18,
    },
    subtitleTypo: {
        color: Color.gray555,
        fontFamily: FontFamily.interRegular,
        textAlign: "left",
        lineHeight: 26,
        fontSize: FontSize.size_lg,
    },
    email1: {
        textAlign: "left",
        color: Color.secondary,
        lineHeight: 26,
        fontSize: FontSize.size_lg,
        fontWeight: "500",
    },
    emailChild: {
        height: 2,
        marginTop: 8,
        width: 24,
        backgroundColor: Color.secondary,
        borderRadius: Border.br_5xs,
    },
    email: {
        width: 46,
        alignItems: "center",
    },
    email2: {
        width: 129,
        marginLeft: 24,
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
    },
    label: {
        height: 24,
        width: 312,
        lineHeight: 24,
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        overflow: "hidden",
    },
    text: {
        lineHeight: 22,
        color: Color.lightslategray,
        width: 280,
        height: 24,
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.interRegular,
        textAlign: "left",
    },
    input2: {
        borderColor: "#d0d5dd",
        borderWidth: 1,
        paddingHorizontal: Padding.p_base,
        borderStyle: "solid",
        marginTop: 8,
    },
    email3: {
        justifyContent: "center",
    },
    label1: {
        width: 146,
        height: 24,
        lineHeight: 24,
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        overflow: "hidden",
    },
    rightText: {
        fontSize: FontSize.size_xs,
        textAlign: "right",
        width: 162,
        marginLeft: 4,
        lineHeight: 24,
        color: Color.secondary,
    },
    header1: {
        alignItems: "center",
        flexDirection: "row",
    },
    text1: {
        fontSize: FontSize.size_9xs,
        letterSpacing: 4,
        width: 232,
        height: 24,
        lineHeight: 24,
        textAlign: "left",
    },
    iconeye: {
        height: 24,
        marginLeft: 24,
        width: 24,
        overflow: "hidden",
    },
    password: {
        marginTop: 16,
    },
    fill: {
        borderRadius: Border.br_11xs,
        backgroundColor: Color.secondary,
    },
    iconsoutlinecheckmark: {
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "hidden",
    },
    tick: {
        width: 20,
        height: 20,
    },
    keepMeSigned: {
        fontWeight: "300",
        fontFamily: FontFamily.interLight,
        width: 228,
        color: Color.black,
        textAlign: "left",
    },
    label2: {
        lineHeight: 16,
        color: Color.white,
        width: 160,
        textAlign: "center",
        fontSize: FontSize.size_base,
    },
    loginprimary: {
        paddingHorizontal: Padding.p_xs,
        paddingVertical: Padding.p_base,
        marginTop: 16,
        height: 48,
        width: 312,
        justifyContent: "center",
        backgroundColor: Color.secondary,
        borderRadius: Border.br_5xs,
        alignItems: "center",
        flexDirection: "row",
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
    orSignIn: {
        fontSize: FontSize.size_sm,
        lineHeight: 20,
        width: 112,
        textAlign: "center",
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
    googleIcon: {
        height: 24,
        width: 24,
        overflow: "hidden",
    },
    continueWithGoogle: {
        color: Color.gray021,
        textAlign: "center",
        fontFamily: FontFamily.interRegular,
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
        marginTop: 20,
        alignItems: "center",
    },
    input: {
        top: 236,
    },
    createAnAccount: {
        marginLeft: -156,
        top: 736,
        left: "50%",
        position: "absolute",
        textAlign: "center",
        height: 24,
        lineHeight: 24,
        fontSize: FontSize.size_base,
        color: Color.secondary,
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
    androidStatusBars2: {
        width: 360,
        paddingVertical: 0,
        justifyContent: "space-between",
        paddingHorizontal: Padding.p_base,
        height: 24,
        alignItems: "center",
        flexDirection: "row",
    },
    androidStatusBars: {
        top: 0,
        left: 0,
        paddingTop: Padding.p_5xs,
        position: "absolute",
    },
    login1: {
        fontSize: FontSize.size_9xl,
        lineHeight: 40,
        color: Color.defaultBlack,
        textAlign: "left",
    },
    subtitle: {
        marginTop: 12,
        width: 312,
    },
    header2: {
        top: 110,
    },
    emailLogin: {
        flex: 1,
        height: 800,
        overflow: "hidden",
        width: "100%",
        backgroundColor: Color.white,
    },
});

export default EmailLogin;
