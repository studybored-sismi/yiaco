import React, { useState } from 'react';
import { StyleSheet, Text, View,Alert,KeyboardAvoidingView } from 'react-native';
import { Button, TextInput} from 'react-native-paper';

const SignupScreen =({navigation})=>{
  const [name, setName] = useState("")
  const [email,setEmail] = useState("")
  const [phoneNumber,setPhonenumber] = useState("")
  const [password,setPassword] = useState("")
  const [modal,setModal] = useState(false)
  
  const submitData = () =>{
    fetch("http://192.168.1.6:3000/api/signup",{
      method:"post",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name":name,
        "email":email,
        "phoneNumber":phoneNumber,
        "password":password
    })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      Alert.alert(`user created successfully`)
      navigation.navigate("loginafterScreen")
    })
  }

  return(
 
       <KeyboardAvoidingView behavior="position">
    <View style={styles.root}>
      <Text style={styles.signup}>Signup</Text>
      <Text style={styles.create}>Create a new account</Text>
   <TextInput style={styles.input}
       mode="outlined"
       value={name}
       label="Name"
       theme={{colors:{primary:"green"}}}
       onChangeText={(text)=>setName(text)}/>

      <TextInput style={styles.input}
       mode="outlined"
       value={email}
       label="Email" 
       theme={{colors:{primary:"green"}}}
       onChangeText={(text)=>setEmail(text)}/>

    <TextInput style={styles.input}
       mode="outlined"
       value={phoneNumber}
       keyboardType="number-pad"
       label="Phone number" 
       theme={{colors:{primary:"green"}}}
       onChangeText={(text)=>setPhonenumber(text)}/>
      
      <TextInput style={styles.input} 
      secureTextEntry={true} 
      mode="outlined"
      value={password} 
      label="Password"
      theme={{colors:{primary:"green"}}}
      onChangeText={(text)=>setPassword(text)}/>
      
      <View  style={styles.Button}>
        <Button  mode="contained" onPress={()=>submitData()}color="green" width={200}>Signup</Button>
          </View>
    </View>
    </KeyboardAvoidingView>
  )
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

export default SignupScreen;