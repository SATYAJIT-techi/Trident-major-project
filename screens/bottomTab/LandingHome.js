import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentPage from './studentpage/StudentPage';
import FamilyPage from './family/FamilyPage';
import FirstPage from './studentpage/FirstPage';
const homeStack = createNativeStackNavigator();




const LandingHome = () => {



  return (
    <homeStack.Navigator initialRouteName='StudentPage'>
      <homeStack.Screen name="StudentPage" component={StudentPage} options={{ headerShown: false }} />
      <homeStack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }} />

      <homeStack.Screen name="Family" component={FamilyPage} options={{ headerShown: false }} />
    </homeStack.Navigator>
  )
}

export default LandingHome

const styles = StyleSheet.create({

})