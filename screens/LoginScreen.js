import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, AsyncStorage, Alert, KeyboardAvoidingView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

  const LoginScreen =({navigation})=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitData = () =>{
    fetch("http://192.168.1.6:3000/api/login",{
      method:"post",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       
        "email":email,
        "password":password
    })
    })
    .then(res=>res.json())
    .then(data=>{
      Alert.alert(` Login successfully`)
      console.log(data)
      navigation.navigate("loginafterScreen")
    })
  }

 

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <Text style={styles.signup}>Login</Text>


        <TextInput style={styles.input}
          value={email}
          mode="outlined"
          label="Email"
          theme={{ colors: { primary: "green" } }}
          onChangeText={(text) => setEmail(text)} />

        <TextInput style={styles.input}
          secureTextEntry={true}
          value={password}
          mode="outlined"
          label="Password"
          theme={{ colors: { primary: "green" } }}
          onChangeText={(text) => setPassword(text)} />

        <View style={styles.Button}>
          <Button mode="contained" onPress={()=>submitData()}   color="green" width={200}>LOGIN</Button>
        </View>
        <View style={styles.login}>
          <Text style={styles.forgott} >Click here to </Text>
          <Text onPress={() => navigation.navigate("SignupScreen")} style={styles.logintext}> Signup</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}



export default LoginScreen;

const styles = StyleSheet.create({
  signup: {
    paddingTop: 100,
    paddingLeft: 130,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 35,
    fontWeight: "700",
    color: "green"
  },
  create: {
    paddingLeft: 105,
    fontStyle: "italic",
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    color: "green"
  },
  Button: {

    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: "90%",
    height: 50,
    margin: 18,
    paddingRight: 5
  },
  forgott: {
    paddingLeft: 200,
    fontStyle: "italic",
    paddingTop: 10
  },
  login: {
    flexDirection: 'row',
    paddingTop: 10
  },
  logintext: {
    color: 'green',
    paddingTop: 9
  }
});