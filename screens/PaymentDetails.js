import React from 'react';
import { Text, Image, View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign'


const PaymentDetails = ({route}) => {
    //const item = route.params.item
    const navigation = useNavigation();
    const orderConfirmed = () =>{
        Alert.alert(
            'Order Confirmed',
            'Thank You! Keep Shopping',
            [
              {text: 'Ok', onPress: () => navigation.navigate("Myorder")},
              {text: 'Cancel', onPress: () => navigation.navigate("MainScreen"), style: 'cancel'},
            ],
            { 
              cancelable: true 
            }
          );
    }

    return (
        <View>
        <View style={styles.payment}>
        <TextInput style={styles.line} placeholder="Card holder name" />
            <TextInput style={styles.line} placeholder="Card Number" keyboardType="numeric" />

            <Text style={styles.text}>Valid date:</Text>
            <View style={styles.pad}>
                <View style={styles.line1}>
                    <TextInput placeholder="MM" keyboardType="numeric" />
                    <Icon style={styles.icon} name="caretdown" size={10} color="grey" />
                </View>
                <View style={styles.line3} >
                    <TextInput placeholder="YY" keyboardType="numeric" />
                    <Icon style={styles.icon} name="caretdown" size={10} color="grey" />
                </View>
                <View style={styles.line2}>
                    <TextInput placeholder="CCV" keyboardType="numeric" />
                    <Icon style={styles.icon1} name="questioncircle" size={10} color="grey" />
                </View>
            </View>
            </View>
            <View style={styles.bill}></View>
            <View style={styles.button}>
                <Button color="green" title="Place Order" onPress={orderConfirmed}/>
            </View>
            
            
        </View>

    )

}

const styles = StyleSheet.create({
    payment: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 30,
        paddingBottom: 50
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingTop: 30,
        paddingRight: 20,
        // paddingBottom:20
        flexDirection: 'row',

    },
   
    pad: {
        flexDirection: 'row'
    },
    icon: {
        paddingTop: 5,
        paddingLeft: 10
    },
    icon1: {
        paddingTop: 8,
        paddingLeft: 10,
        marginRight:20
    },
    line1: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingTop: 10,
        flexDirection: 'row',
        paddingRight: 20,
        width: 50
    },
    line3: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingTop: 10,
        flexDirection: 'row',
        paddingRight: 20,
        width: 50,
        left: 30
    },
    line2: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingTop: 10,
        flexDirection: 'row',
        left: 180,
        width: 90
    },
    text: {
        paddingTop: 30,
        color: 'grey'
    },
    containerbill: {
        backgroundColor: 'white',
        paddingLeft:10,
        paddingRight:10

    },
    containerbillCart: {

        paddingTop: 30
    },
    textcontainerbill: {
        paddingTop: 20,
    },
    textbill: {
        fontWeight: 'bold'
    },
    itemcontainerbill: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    itemcontainerbill1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 20,
    },
    itembill: {
        flexDirection: 'row'
    },
    iconbill: {
        paddingTop: 4,
    },
    linebill: {
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',
    },
    textbill1: {
        fontWeight: 'bold',
        color: 'orange'
    },
    bill: {
        paddingTop: 10
    },
    it:{
        paddingBottom:10
    },
    button:{
        backgroundColor:"white",
        paddingTop:40,
        paddingBottom:40,
        paddingLeft:10,
        paddingRight:10
    }

})

export default PaymentDetails;