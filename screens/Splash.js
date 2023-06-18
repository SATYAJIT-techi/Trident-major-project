import  React,{useEffect} from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Onboarding')
        }, 3000);
    },[])

  return (
    <View style={styles.splash}>
      <View style={styles.logo}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={styles.bookFlight}>Travel Booking App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 99,
    height: 60,
  },
  bookFlight: {
    fontSize: 36,
    lineHeight: 36,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    color: Color.white,
    textAlign: "center",
    width: 216,
    marginTop: 20,
  },
  logo: {
    position: "absolute",
    top: 330,
    left: 72,
    alignItems: "center",
  },
  splash: {
    backgroundColor: Color.secondary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Splash;
