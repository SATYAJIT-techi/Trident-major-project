import { Dimensions, StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;
const IndianPlaces = [
  {
    "id": "1",
    "name": "Kashmir",
    "image": require('../../../assets/kashmir.jpg')
  },
  {
    "id": "2",
    "name": "Andaman",
    "image": require('../../../assets/andaman.jpg')
  },
  {
    "id": "3",
    "name": "Goa",
    "image": require('../../../assets/goa.jpg')
  },
  {
    "id": "4",
    "name": "Himachal",
    "image": require('../../../assets/himachal.jpg')
  },
  {
    "id": "5",
    "name": "Kerela",
    "image": require('../../../assets/kerela.jpg')
  },
  {
    "id": "6",
    "name": "Ladakh",
    "image": require('../../../assets/ladakh.jpg')
  },
  {
    "id": "7",
    "name": "Ooty",
    "image": require('../../../assets/ooty.jpg')
  },
  {
    "id": "8",
    "name": "Rajasthan",
    "image": require('../../../assets/rajasthan.jpg')
  },
  {
    "id": "9",
    "name": "Thailand",
    "image": require('../../../assets/thailand.jpg')
  },
]
const FirstPage = () => {


  return (
    <View style={{ flex: 1 }}>
      {/* <LinearGradient colors={['#ccff33', 'cyan']} style={styles.linearGradient}> */}
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#03071e' }}>
        <View style={styles.startEnd}>
          <Image
            source={require('../../../assets/marker.png')}
            style={styles.markerImage}
          />
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: WIDTH * 0.70, marginLeft: 10 }}>
            <Text style={{ color: 'grey' }}>Starting From</Text>
            <TextInput style={styles.startEndText} placeholder='Bhubaneswar' placeholderTextColor={'black'} />
          </View>
        </View>

        <View style={styles.startEnd2}>
          <Image
            source={require('../../../assets/marker.png')}
            style={styles.markerImage}
          />
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: WIDTH * 0.70, marginLeft: 10 }}>
            <Text style={{ color: 'grey' }}>To</Text>
            <TextInput style={styles.startEndText} placeholder='Goa' placeholderTextColor={'black'} />
          </View>
        </View>




      </View>
      <ScrollView>
        <LinearGradient colors={['pink', "white"]}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          style={styles.linearGradient}>

          <Text style={{ color: "black", fontSize: 30, fontFamily: 'Cochin', textAlign: 'center', marginTop: HEIGHT * 0.05, }}>INDIAN STYLE</Text>
          <View style={styles.IndianPlacesDesign}>
            <Text style={{ color: "red", fontSize: 20, marginBottom: 10 }}>Summer Sales, Start your journeey with...</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={IndianPlaces}
              renderItem={({ item }) => {
                return (
                  <View key={item.id} style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Image source={item.image} style={{ height: 80, width: 80, borderRadius: 40, marginHorizontal: 10 }} />
                      <Text style={{ elevation: 20 }}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          </View>
          <Text style={{ color: "black", fontSize: 30, fontFamily: 'Cochin', textAlign: 'center', marginTop: HEIGHT * 0.05, }}>International STYLE</Text>
          <View style={styles.IndianPlacesDesign}>
            <Text style={{ color: "red", fontSize: 20, marginBottom: 10 }}>Summer Sales, Start your journeey with...</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={IndianPlaces}
              renderItem={({ item }) => {
                return (
                  <View key={item.id} style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Image source={item.image} style={{ height: 80, width: 80, borderRadius: 40, marginHorizontal: 10 }} />
                      <Text style={{ elevation: 20 }}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          </View>
          <Text style={{ color: "black", fontSize: 30, fontFamily: 'Cochin', textAlign: 'center', marginTop: HEIGHT * 0.05, }}>RECOMMENDATION</Text>
          <View style={[styles.IndianPlacesDesign, styles.rando]}>
            <Text style={{ color: "red", fontSize: 20, marginBottom: 10 }}>Summer Sales, Start your journeey with...</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={IndianPlaces}
              renderItem={({ item }) => {
                return (
                  <View key={item.id} style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Image source={item.image} style={{ height: 80, width: 80, borderRadius: 40, marginHorizontal: 10 }} />
                      <Text style={{ elevation: 20 }}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          </View>

        </LinearGradient>
      </ScrollView>



      {/* </LinearGradient> */}
    </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    backgroundColor: '#FFFFFF',

  },
  startEnd: {
    height: HEIGHT * 0.08,
    width: WIDTH * 0.9,
    backgroundColor: "yellow",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'grey',
  },
  startEnd2: {
    height: HEIGHT * 0.08,
    width: WIDTH * 0.9,
    backgroundColor: "yellow",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'black',


  },
  markerImage: { height: 30, width: 30 },
  startEndText: {
    color: "black",
    fontSize: 20,



  },
  startDate: {
    height: 30,
    backgroundColor: 'pink',
    width: WIDTH * 0.5
  },
  IndianPlacesDesign: {

    height: HEIGHT * 0.2,
    alignItems: "center",
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    padding: 10,
  },
  rando: {
    marginBottom: 60
  }
})