import React, { useState } from 'react';
import { StyleSheet, Text, View,Alert,KeyboardAvoidingView } from 'react-native';
import { Button, TextInput} from 'react-native-paper';

//const userScreen =(props)=>{
export default class userScreen extends React.Component {
render() {
//const {id, name,email,phoneNumber}= props.route.params.item
const { navigation } = this.props;
const name = navigation.getParam('name');
const email = navigation.getParam('email');
const phoneNumber = navigation.getParam('phoneNumber');

  return(
 
       <KeyboardAvoidingView behavior="position">
    <View style={styles.root}>
      <Text style={styles.signup}>{name}</Text>
      <Text style={styles.create}>{email}</Text>
  <Text>{phoneNumber}</Text>
    </View>
    </KeyboardAvoidingView>
  )
}
 }

const styles= StyleSheet.create({
  mycard:{
    margin:5
  },
 
  input:{
    width:"90%",
    height:40,
    margin:18,
    paddingRight:5
  },
  Button:{
      
    alignItems:"center",
    justifyContent:"center"
  },
  signup:{
    paddingTop:70,
    paddingLeft:120,
    alignItems:"center",
    justifyContent:"center",
    fontSize:35,
    fontWeight:"700",
    color:"green"
  },
  create:{
    paddingLeft:105,
    fontStyle:"italic",
    fontSize:15,
    paddingTop:5,
    paddingBottom:5,
    color:"green"
  }

})

//export default userScreen;