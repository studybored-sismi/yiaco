import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
//import MapScreen from './MapScreen'
import { useNavigation } from '@react-navigation/native';

const AddScreen = () => {
    const navigation = useNavigation();
   
    return (
        <ScrollView>
            <View style={styles.placecontainer}>
                <View style={styles.container}>
                    <Icon name="map-marker-outline" size={25} color="black"  style={{paddingTop:20}}/>
                    <Text style={styles.text}>Ernakulam North</Text>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text 
                        onPress={()=>navigation.navigate('Location')}
                        style={styles.textcolor}>CHANGE</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.text1}>Ernakulam North, Kathrikadavu, Kochi, Kerala, India</Text>

                </View>
                <View style={styles.textadd}>
                    <TextInput placeholder="HOUSE/FLAT/BLOCK NO." />
                </View>
                <View style={styles.textadd}>
                    <TextInput placeholder="LANDMARK" />
                </View>
                <View>
                    <Text style={styles.textsave}>SAVE AS</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.container1}>
                        <Icon2 name="home" size={20} color="grey" />
                        <Text style={styles.containertext}>Home</Text>
                        <View></View>
                    </View>
                    <View style={styles.container1} >
                        <Icon1 name="work-outline" size={20} color="grey" />
                        <Text style={styles.containertext1}>Work</Text>
                        <View></View>
                    </View>
                    
                </View>
                <View style={styles.button}>
                    <Button 
                    color="#00bfff" 
                    title="ENTER HOUSE/FLAT/BLOCK NO." 
                    onPress={()=>navigation.navigate('Payment',{ items: t })} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop:20
    },
    container1: {
        flexDirection:'row',
       paddingRight:100,
        
    },
    button:{
        paddingTop:30,
    },
    mapcontainer: {
        height: 460
    },
    placecontainer: {
        backgroundColor: 'white',
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,

    },
    text: {
        paddingRight: 100,
        paddingLeft: 5,
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop:20
    },
    textadd: {
        paddingTop: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: "grey"
    },
    textsave: {
        paddingTop: 20,
        color: 'grey',
        paddingBottom: 10,
    },
    containertext:{
        paddingTop:7,
        paddingLeft:3,
        color: 'grey',
    },
    containertext1:{
        paddingTop:4,
        paddingLeft:3,
        color: 'grey',
        paddingRight:10
    },
    containertext2:{
        paddingTop:5,
        paddingLeft:1,
        color: 'grey',
    },
    textcolor:{
        elevation:5,
        backgroundColor:'white',
        borderRadius:5,
       paddingLeft:10,
       paddingRight:10,
       paddingTop:5,
       paddingBottom:5,
       color:'red',
       marginTop:25,
       marginRight:20
       
    },
    text1:{
        paddingRight:80,
        paddingTop:25
    }
});

export default AddScreen;