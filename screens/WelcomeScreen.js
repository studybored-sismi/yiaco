import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Button, StatusBar, Image } from 'react-native';


export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('MainScreen')
        }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <Image source={require('../assets/main.jpg')}
                    style={{ width: '60%', height: '30%' ,resizeMode:"contain"}} />
               
            </View>
        );
    };
}