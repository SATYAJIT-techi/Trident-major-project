import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
// import AppButton from '../components/AppButton'
import { Calendar } from 'react-native-calendars'


const AppButton = ({ navigation, screenName }) => {
  return (
    <View style={styles.btnContainer}>

      <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate("Home")}>
        <Text style={{ color: 'white' }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const CalendarPage = ({ navigation }) => {

  const [date, setDate] = useState();
  const[noofDays, setNoofDays] = useState(0);
  
  // console.log(new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate());
  const [markedDates, setMarkedDates] = useState({
    //here put current date as string
    "2023-05-07": { startingDay: true, endingDay: true, color: '#25BE9B', textColor: 'white' },
  })
  return (
    <View style={styles.container}>

      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Charger')}>
          <Image source={require('../assets/left-arrow.png')} style={styles.backBtn} />
        </TouchableOpacity>
        <Text style={styles.headerContainText}>Booking</Text>
      </View>

      <Text style={styles.selectDateText}> Select Starting  Date</Text>

      <Calendar style={styles.calenderDesign} hideExtraDays={true}
        onDayPress={date => {
          setDate(date); 
          console.log('selected day', date.dateString);
          console.log(date.dateString + " " + noofDays)
          setMarkedDates({ [date.dateString]: { startingDay: true, endingDay: true, color: '#25BE9B', textColor: 'white' } })
        }}
        // current={date}
        scrollEnabled={true}
        theme={{ backgroundColor: '#ecf0ebo' }}

        markingType='period'
        markedDates={markedDates
        }
      />

      <View style={styles.detailsInputBox}>
        <Text style={styles.calenderHeading}> Select Number of People </Text>
        <View style={styles.selectDuration}>
          <TextInput
            style={styles.durationInput}
            placeholder="eg. 1" />


        </View>

        <Text style={styles.chargingDuration}> Ending Date</Text>

        <View style={styles.charginDurationInputBox}>
          <TextInput
            style={styles.chargingDurationInputText}
            placeholder="eg. DD/MM/YYYY"
            onChangeText={(text) => setNoofDays(text)}
            />


        </View>

        <View style={styles.lastInstructionBox}>
          <Text style={styles.lastInstructionText}>You Can only book available times. Unavailable time means someone else had booked it.</Text>
        </View>



      </View>


      <AppButton navigation={navigation} screenName="Payement" />
    </View>
  )
}

export default CalendarPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: '#fff',
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    padding: 20,
    width: Dimensions.get('window').width - 180,
  },
  backBtn: {
    height: 25,
    width: 25,
    marginLeft: 10,
  },
  headerContainText: {
    fontSize: 23,
    color: '#000',
    marginRight: 60
  },
  selectDateText: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  calenderDesign: {
    width: "90%",
    borderRadius: 10,
    // alignContent:'center',
    backgroundColor: '#f8faf7',
    alignSelf: 'center',
    elevation: 5
  },
  detailsInputBox: {
    flex: 3,
    // justifyContent: 'center',
    // flexDirection: 'row',
    // backgroundColor: 'pink',
    padding: 10,

  },
  calenderHeading: {
    fontSize: 20,
    marginLeft: 20,
  },
  selectDuration: {
    flexDirection: 'row',
    borderColor: '#25BE9B',
    borderBottomWidth: 1
  },
  durationInput: {
    fontSize: 20,
    margin: 5,
    marginLeft: 20,
    padding: 5,
    width: "70%"
  },
  amToPm: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 23
  },
  amToPmText: {
    fontSize: 20,
    color: '#25BE9B'
  },
  chargingDuration: {
    fontSize: 20,
    margin: 10,
    marginLeft: 20,
  },
  charginDurationInputBox: {
    flexDirection: 'row',
    borderColor: '#25BE9B',
    borderBottomWidth: 1
  },
  chargingDurationInputText: {
    fontSize: 20,
    margin: 5,
    marginLeft: 20,
    padding: 5,
    width: "70%"
  },
  changeCharginDuration: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  lastInstructionBox: {
    height: 80,
    backgroundColor: '#d3ffc2',
    width: '90%', alignItems: 'center',
    justifyContent: 'center', marginLeft: 20,
    marginTop: 30, borderRadius: 15
  },
  lastInstructionText: {
    marginLeft: 10,
    color: '#25BE9B',
    fontSize: 17
  },
  imagec: { width: 30, height: 30 },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueBtn: {
    height: 50,
    width: Dimensions.get('window').width - 30,
    backgroundColor: "#25BE9B",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9,
    borderRadius: 50
  },
})