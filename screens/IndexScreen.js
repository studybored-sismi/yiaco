import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const IndexScreen = ({ navigation }) => {
    return (
        <View style={styles.color} >
            <Image style={styles.image} source={require('../assets/logo.jpg')} />
            <View style={styles.textstyle} >

                <View style={styles.buttonContainer} >
                    <Button
                        color="#00bfff"
                        title="SIGN UP"
                        onPress={() => navigation.navigate('SignupScreen')}
                    />
                </View >
                <TouchableOpacity
                    style={styles.textContainer}
                    activeOpacity={1.0}
                    onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.text} >Have an account? </Text>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
                <View style={styles.text}>
                    <Text style={styles.textcolor} >By Signing up or logging in, you agree to our</Text>
                    <Text style={styles.term}>Terms and Conditions</Text>
                </View>
            </View>

        </View>
    )
};

export default IndexScreen;
const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        paddingTop: 15,
        color: 'grey',
        paddingBottom: 45
    },
    textstyle: {
        alignSelf: 'center',
        paddingTop: 100

    },
    textcolor: {
        color: 'grey'
    },
    text1: {
        alignSelf: 'center',
        padding: 15,
        color: 'grey',
        fontWeight: 'bold'
    },
    buttonContainer: {
        padding: 20,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    login: {
        color: '#00bfff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom:30
    },
    term: {
        color: '#00bfff',
        paddingLeft: 70,
        paddingBottom: 70,
        paddingTop:5
    },
    image: {
        width: 330,
        height: 200,

    },
    color: {
        backgroundColor: 'white',
        paddingTop: 200,
        paddingLeft: 25
    }

});
