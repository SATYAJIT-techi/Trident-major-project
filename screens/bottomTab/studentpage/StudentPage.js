import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SliderBox } from "react-native-image-slider-box";


const StudentPage = ({ navigation }) => {
    const images2 = [
        "https://media.istockphoto.com/id/1069137628/photo/top-of-the-jagannath-temple-puri-odisha-india.jpg?s=612x612&w=0&k=20&c=QIj54CAlnD_CKzb1roAVms9f2fdWnqwOb3BMSMvbee4=",
        "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80",
        "https://source.unsplash.com/1024x768/?nature",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]

    const transport = [
        {
            id: 1,
            name: 'Bus',
            image: require('../../../assets/fightimg.png')
        },
        {
            id: 2,
            name: 'Train',
            image: require('../../../assets/fightimg.png')
        },
        {
            id: 3,
            name: 'Flight',
            image: require('../../../assets/fightimg.png')
        },
        {
            id: 4,
            name: 'Package',
            image: require('../../../assets/fightimg.png')
        },
    ]

    const type = [
        {
            "id": 1,
            "img": require('../../../assets/student.png')
        },
        {
            "id": 2,
            "img": require('../../../assets/family.png')
        }
    ]
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#a4133c', '#ffccd5']}
                style={{ flex: 1 }}
            >
                <SliderBox
                    images={images2}
                    autoplay={true}
                    circleLoop={true}
                    autoplayInterval={3000}
                    sliderBoxHeight={Dimensions.get('window').height / 2.5}
                    sliderBoxBorderRadius={100}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    dotStyle={{
                        width: 5,
                        height: 5,
                        borderRadius: 15,
                        marginHorizontal: 10,
                        padding: 0,
                        margin: 0
                    }}
                />
                <View style={styles.transportMedium}>
                    <Text style={{ color: '#000', fontSize: 20, textAlign: 'center', marginBottom: Dimensions.get('screen').height * 0.01 }}>TRANSPORTATION</Text>
                    <FlatList
                        data={transport}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View key={item.id}
                                    style={{ width: 80, height: 80, backgroundColor: 'lightgrey', borderRadius: 50, marginHorizontal: 8, padding: 5, alignItems: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 1 }}
                                >
                                    <TouchableOpacity onPress={() => {
                                        // if(item.id==1)
                                        // console.log('bus')
                                        // else if(item.id==2)
                                        // console.log('train')
                                        // else if(item.id==3)
                                        // console.log('flight')
                                        // else if(item.id==4)
                                        // console.log('package')

                                        // change this to further pages
                                    }}>
                                        <Image source={item.image} style={{ height: 60, width: 60 }} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around', marginTop: Dimensions.get("screen").height * 0.02
                }}>


                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={type}
                        renderItem={({ item }) => {
                            return (
                                <View key={item.id}
                                    style={{
                                        height: Dimensions.get('screen').height * 0.35,
                                        width: Dimensions.get('screen').width * 0.50,
                                        marginHorizontal: 12
                                    }}>
                                    <LinearGradient
                                        colors={['#ccff33', '#008000']}
                                        style={{ flex: 1, borderRadius: 20, paddingTop: 20, alignItems: 'center' }}
                                    >
                                        <ImageBackground

                                            source={item.img}
                                            style={{
                                                height: 200, width: 200, position: 'absolute', top: Dimensions.get('screen').height * 0.04,
                                                right: 0,
                                            }}
                                        />
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('FirstPage')}
                                        >

                                            {
                                                (item.id == 1) ?
                                                    <Text
                                                        style={styles.studentFamilyLabel}
                                                    >Student</Text> :
                                                    <Text
                                                        style={styles.studentFamilyLabel}
                                                    >Family</Text>
                                            }

                                        </TouchableOpacity>


                                    </LinearGradient>
                                </View>
                            )
                        }}
                    />


                </View>
            </LinearGradient>
        </View>
    )
}

export default StudentPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    transportMedium: {

        marginTop: Dimensions.get('window').height * 0.01,
        marginBottom: Dimensions.get('window').height * 0.01,
        marginHorizontal: Dimensions.get('window').width * 0.02,

    },
    linearGradient: {
        paddingTop: Dimensions.get('window').height * 0.02,
        paddingHorizontal: Dimensions.get('window').width * 0.02,
        borderRadius: 5,
        height: Dimensions.get('screen').height * 0.4,
        width: 350,
        flexDirection: 'row'
    },
    studentFamilyLabel: {

        color: 'white',
        fontSize: 30,
        marginTop: Dimensions.get('screen').height * 0.25,
        backgroundColor: '#ff758f',
        width: Dimensions.get('screen').width * 0.4,
        textAlign: 'center',
        borderRadius: 19



    }
})