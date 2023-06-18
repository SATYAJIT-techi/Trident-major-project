import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../../GlobalStyles";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Payment from "./Payment";
import LandingHome from "./LandingHome";
import Package from "./Package";
import SettingPage from "./SettingPage";


const Home = ({ navigation }) => {

  const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, tabBarStyle: styles.container,
      tabBarHideOnKeyboard: true,
      tabBarActiveTintColor: 'red',

    }}>
      <Tab.Screen name="Landing" component={LandingHome}
        options={{
          tabBarItemStyle: [styles.tabStyle],
          tabBarActiveBackgroundColor: 'yellow',
          tabBarLabelStyle: styles.labStyle,
          tabBarActiveTintColor: 'red',
        }}
      // options={{
      //   headerShown: false,
      //   tabBarIcon: tabInfo => {
      //     return (
      //       <Image
      //         source={require('../checkbox.png')}
      //         style={{
      //           width: 20,
      //           height: 20,
      //           tintColor: tabInfo.focused ? 'purple' : 'black',
      //         }}
      //       />
      //     );
      //   },
      // }}

      />
      <Tab.Screen name="Package" component={Package}
        options={{
          tabBarItemStyle: [styles.tabStyle],
          tabBarActiveBackgroundColor: 'yellow',
          tabBarLabelStyle: styles.labStyle,
          tabBarActiveTintColor: 'red',
        }}
      />
      <Tab.Screen name="Payment" component={Payment}
        options={{
          tabBarItemStyle: [styles.tabStyle],
          tabBarActiveBackgroundColor: 'yellow',
          tabBarLabelStyle: styles.labStyle,
          tabBarActiveTintColor: 'red',
        }}
      />
      <Tab.Screen name="Setting" component={SettingPage}
        options={{
          tabBarItemStyle: [styles.tabStyle],
          tabBarActiveBackgroundColor: 'yellow',
          tabBarLabelStyle: styles.labStyle,
          tabBarActiveTintColor: 'red',
        }}
      />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderTopLeftRadius: Dimensions.get('window').width*0.5,
    // borderTopRightRadius:  Dimensions.get('window').width *0.5,
    borderRadius: Dimensions.get('window').width * 0.5,

    height: Dimensions.get('window').height * 0.06,
    position: 'absolute',
    bottom: 3,
    paddingHorizontal: Dimensions.get('window').width * 0.1,
    // paddingVertical: Dimensions.get('window').height * 0.02,
    borderTopColor: '#B0B0B0',
    borderColor: '#B0B0B0'
  },

  tabStyle: {
    borderRadius: 10,
    marginHorizontal: 5,
    height: 50,
  },
  labStyle: {
    fontWeight: 'bold',
    fontSize: 15,
  }

});

export default Home;
