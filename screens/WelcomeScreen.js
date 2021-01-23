
    import { StatusBar } from 'expo-status-bar';
    import React from 'react';
    import { StyleSheet, ImageBackground, Text, View, image } from 'react-native';
    import { Button, TextInput } from 'react-native-paper';
    
    
    const WelcomeScreen = (props) => {
      return (
        <View style={styles.welcome}>
          <View >
            <ImageBackground source={require('../assets/logo.jpg')} style={styles.image} ></ImageBackground>
            <View style={styles.button} >
              <Button
                style={styles.Button}
                onPress={() => props.navigation.navigate("productScreen")} mode="contained" > GET STARTED</Button>
            </View>
          </View>
          <Text color="white"></Text>
        </View>
      );
    }
    
    export default WelcomeScreen;
    
    const styles = StyleSheet.create({
      welcome: {
        backgroundColor: "white",
        paddingTop: 250,
        paddingLeft:25
      },
      log: {
        color: "white",
        fontSize: 20,
        // marginTop: 500,
        // marginLeft: 150
      },
      image: {
        width: 200,
        height: 100,
        // paddingLeft:10
    
        // marginLeft:30,
        // marginTop:150 
        paddingTop: 80
      },
      Button: {
        backgroundColor: "#00bfff",
        width: "50%",
        marginLeft: 90,
      },
      button: {
        paddingTop: 200,
        paddingBottom:250
      }
    })