import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, KeyboardAvoidingView, View ,Image} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';



const AddScreen = (props) => {

    const [name, setName] = useState('');

    const [phoneNumber, setPhonenumber] = useState('');
    const [pincode, setPincode] = useState('');
    const [State, setState] = useState('');
    const [city, setCity] = useState('');
    const [landmark, setLandmark] = useState('');
    const [house, setHouse] = useState('');
    const [roadName, setRoadname] = useState('');
    return (
        <KeyboardAvoidingView behavior="position">
            
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{ color: "00bfff", paddingLeft: 25, paddingTop:10 }}>Add Address</Text>
                    <TextInput style={styles.name}
                        mode="outlined"
                        value={name}
                        label="Name*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setName(text)} />
                    <TextInput style={styles.input}
                        mode="outlined"
                        value={phoneNumber}
                        keyboardType="number-pad"
                        label="Phone number*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setPhonenumber(text)} />

                    <TextInput style={styles.input}
                        mode="outlined"
                        value={pincode}
                        keyboardType="number-pad"
                        label="Pincode*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setPincode(text)} />


                    <TextInput style={styles.input}
                        mode="outlined"
                        value={State}
                        keyboardType="number-pad"
                        label="State*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setState(text)} />

                    <TextInput style={styles.input}
                        mode="outlined"
                        value={house}
                        keyboardType="number-pad"
                        label="House/Flat/Block No.*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setHouse(text)} />


                    <TextInput style={styles.input}
                        mode="outlined"
                        value={roadName}
                        keyboardType="number-pad"
                        label="Road name, Area,Colony* "
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setRoadname(text)} />

                    <TextInput style={styles.input}
                        mode="outlined"
                        value={city}
                        keyboardType="number-pad"
                        label="City*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setCity(text)} />

                    <TextInput style={styles.input}
                        mode="outlined"
                        value={landmark}
                        keyboardType="number-pad"
                        label="Landmark*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setLandmark(text)} />


                    <View style={styles.Button}>
                        <Button mode="contained" onPress={() => props.navigation.navigate("MainScreen")} color="#00bfff" width={200}>Save Address</Button>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default AddScreen;

const styles = StyleSheet.create({
    signup: {
        paddingTop: 70,
        paddingLeft: 120,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 35,
        fontWeight: "700",
        color: "#00bfff"
    },
    textsave: {
        paddingTop: 20,
        color: 'grey',
        paddingBottom: 10,
        paddingLeft: 25
    },
    create: {
        paddingLeft: 105,
        fontStyle: "italic",
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        color: "#00bfff"
    },
    Button: {

        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: "80%",
        height: 40,
        margin: 18,
        paddingRight: 5,
        marginLeft: 15

    },
    name: {
        width: "80%",
        height: 40,
        margin: 18,
        paddingRight: 5,
       
    }
});