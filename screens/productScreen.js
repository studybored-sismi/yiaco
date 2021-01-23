import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, Image, TextInput, TouchableOpacity,FlatList } from 'react-native';
import { Left } from 'native-base';
import { Button } from 'react-native-paper';
import SideMenuDrawer from '../src/components/SideMenuDrawer';
// import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/FontAwesome5'

const ProductScreen = () => {
    const navigation = useNavigation();
    const [Search, setSearch] = useState('');

    const [product, setProduct] = useState([
        { name: 'Thermometer', image: require("../assets/thermometer.jpg"),price:'$ 250',description:'A thermometer is a device that measures temperature or a temperature gradient (the degree of hotness or coldness of an object).', id: '1' },
        { name: 'Pen Knife ', image: require("../assets/pen_knifes.jpeg"),price:'$ 150',description:'A scalpel, or lancet, or bistoury, is a small and extremely sharp bladed instrument used for surgery, anatomical dissection, podiatry and various arts and crafts (called a hobby knife).', id: '2' },
        { name: 'Sthethescope', image: require("../assets/sthethescope.jpg"),price:'$ 275', description:'The stethoscope is an acoustic medical device for auscultation, or listening to internal sounds of an animal or human body.',id: '3' },
        { name: 'Artery Foreceps', image: require("../assets/artery_foreceps.jpg"),price:'$ 375',description:'Artery forceps are used to compress an artery to stem bleeding, because of this they belong to a group of surgical instruments called hemostats.', id: '4' },
        { name: 'KN95 Mask', image: require("../assets/KN95_mask.jpeg"),price:'$ 200', description:'The KN95 Respirator Mask is worn to protect the wearer from viruses, bacteria, pollen and other particles',id: '5' },
        { name: 'Surgical Gloves', image: require("../assets/surgical_gloves.jpg"),price:'$ 90',description:'The primary purpose of surgical gloves is to act as a protective barrier to prevent the possible transmission of diseases between healthcare professionals and patients during surgical procedures. ', id: '6' },
        { name: 'Walking Crutches', image: require("../assets/walking_crutches.jpg"), price:'$ 270',description:'Crutches are a type of Walking Aids that serve to increase the size of an individuals Base of support.',id: '7' },
        { name: 'Blood Pressure Monitor', image: require("../assets/bp_monitor.jpg"),price:'$ 90',description:'A sphygmomanometer, also known as a blood pressure monitor, or blood pressure gauge, is a device used to measure blood pressure, composed of an inflatable cuff to collapse and then release the artery under the cuff in a controlled manner, and a mercury or aneroid manometer to measure the pressure.', id: '8' },
        { name: 'Wheel Chair', image: require("../assets/wheel_chair.jpg"),price:'$ 250', description:'A wheelchair is a chair with wheels, used when walking is difficult or impossible due to illness, injury, problems related to old age, or disability.',id: '9' },
        { name: 'Microscope', image: require("../assets/microscope.jpg"), price:'$ 200',description:'A microscope is a laboratory instrument used to examine objects that are too small to be seen by the naked eye.',id: '10' },
        { name: 'Dental Chair', image: require("../assets/dental_chair.jpg"),price:'$ 400',description:'A dental engine is a large chair-side appliance for use in a dentists office.At minimum, a dental engine serves as a source of mechanical or pneumatic power for one or more handpieces.', id: '11' },
        { name: 'Hygenic Tools', image: require("../assets/hygenic_tools.jpg"),price:'$ 150',description:'Hygienic design principles cover everything from the materials used to the design of the equipment, with the aim of making them safe when in contact with food, and quicker and easier to clean and dry.', id: '12' },
        { name: 'Surgical Table', image: require("../assets/surgical_table.jpg"),price:'$ 550',description:'An operating table, sometimes called operating room table, is the table on which the patient lies during a surgical operation.', id: '13' },
        { name: 'Therapy Equipment', image: require("../assets/therapy_equipment.jpg"),price:'$ 350',description:'Treadmills, exercise bikes, pedal exerciser or elliptical trainer are some of the most common types of physiotherapy equipments used in most of the therapy clinics and hospitals.', id: '14' },
    ]);
    return (
       
            <View>
                <View style={styles.direction}>
                    <Text style={styles.directionpad}>More To love</Text>
                </View>
                <FlatList
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    data={product}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('medicScreen',{name:item})} >
                            <View style={styles.itemf}>
                                <Image style={styles.imagef} source={item.image}  />
                                <Text >{item.name}</Text>
                            </View>
                        </TouchableOpacity>

                    )}
                />
            </View>
      

    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        backgroundColor: 'white'
    },
    icon: {
        paddingBottom: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 15
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: 5
    },
    text1: {
        paddingRight: 150,
        paddingTop: 10
    },
    text2: {
        backgroundColor: 'white',
        elevation: 5,
        marginRight: 260,
        paddingRight: 5,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#00bfff',
        borderRadius: 5
    },
    textcon: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    image: {
        height: 100,
        width: 120,
    },
    imagecon: {
        top: -150,
        left: 250
    },
    pad: {
        paddingTop: 20
    },
    pad1: {
        paddingTop: 40
    },
    res: {
        backgroundColor: 'white',
        elevation: 3,
        paddingLeft: 10
    },
    view: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    viewdir: {
        flexDirection: 'row',
        paddingBottom: 100
    },
    imgres: {
        width: 90,
        height: 90
    },
    imgcon: {
        left: 260,
        top: -80
    },
    swipecon: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    swipeicon: {
        padding: 15,
        backgroundColor: 'pink'
    },
    swipetext: {
        alignItems: 'center'
    },
    si: {
        paddingLeft: 8
    },
    si1: {
        paddingLeft: 25
    },
    direction: {
        flexDirection: 'row',
    },

    directionpad: {
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 20,
        fontWeight: 'bold'
    },
    imgdir: {
        height: 50,
        width: 80
    },
    textdir: {
        width: 100,

    },
    dirtext: {
        paddingRight: 60
    },
    imgswiper: {
        width: 400,
        height: 400
    },

    restext: {
        fontWeight: 'bold'
    },
    imageh: {
        width: 20,
        height: 30,
        paddingLeft: 80,
        

    },
    texth: {
        
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#00bfff'
    },
    texth1: {
        
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#00bfff'

    },
    textviewh: {
        flexDirection: 'row',

    },
    textviewth: {
     paddingRight:20,
     paddingLeft:160

    },
    header:{
        flexDirection:'row',
        paddingTop:30,
        backgroundColor:'white',
        elevation:5,
        paddingBottom:20
    },
    itemf: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: 20,
        marginVertical: 20,
        elevation: 10,
        width: 150,
        alignItems: 'center'
    },
    imagef: {
        width: 50,
        height: 50,
    },

});

export default ProductScreen;