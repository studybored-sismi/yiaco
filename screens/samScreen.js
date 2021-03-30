import React, { useState } from 'react';
import { StyleSheet, Text, View,Alert,KeyboardAvoidingView,ScrollView } from 'react-native';
import { Button, TextInput} from 'react-native-paper';

const samScreen =({navigation})=>{
  const [name, setName] = useState("")
  const [mobileNumber,setMobilenumber] = useState("")
  const [pincode,setPincode] = useState("")
  const [address,setAddress] = useState("")
  const [City,setCity] = useState("")
  const [state,setState] = useState("")
  const [landmark,setLanmark] = useState("")
  const [modal,setModal] = useState(false)
  
  const submitData = () =>{
    fetch("http://192.168.1.6:3000/api/address",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name":name,
        "mobileNumber": mobileNumber,
        "pincode": pincode,
        "address":address,
        "City":City,
        "state": state,
        "landmark":landmark
    })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      console.log("address saved")
     
      navigation.navigate("checkoutScreen")
    })
  }

  return(
    
       <KeyboardAvoidingView behavior="position">
        <ScrollView>
    <View style={styles.root}>

   <TextInput style={styles.input}
       mode="outlined"
       value={name}
       label="Name"
       theme={{colors:{primary:"green"}}}
       onChangeText={(text)=>setName(text)}/>

    
    
    <TextInput style={styles.input}
       mode="outlined"
       value={mobileNumber}
       label="Mobile" 
       keyboardType="number-pad"
       theme={{colors:{primary:"green"}}}
       onChangeText={(text)=>setMobilenumber(text)}/>

    <TextInput style={styles.input}
       mode="outlined"
       value={pincode}
       keyboardType="number-pad"
       label="Pincode" 
       theme={{colors:{primary:"green"}}}
       onChangeText={(text)=>setPincode(text)}/>
      
      <TextInput style={styles.input} 
   
      mode="outlined"
      value={address} 
      label="Address"
      theme={{colors:{primary:"green"}}}
      onChangeText={(text)=>setAddress(text)}/>

<TextInput style={styles.input} 
      
      mode="outlined"
      value={City} 
      label="City"
      theme={{colors:{primary:"green"}}}
      onChangeText={(text)=>setCity(text)}/>

<TextInput style={styles.input} 
      
      mode="outlined"
      value={state} 
      label="State"
      theme={{colors:{primary:"green"}}}
      onChangeText={(text)=>setState(text)}/>

      

      
      <TextInput style={styles.input} 
      
      mode="outlined"
      value={landmark} 
      label="Landmark"
      theme={{colors:{primary:"green"}}}
      onChangeText={(text)=>setLanmark(text)}/>
      
      <View  style={styles.Button}>
        <Button  mode="contained" onPress={()=>navigation.navigate("checkoutScreen")}color="green" width={200}>Save address</Button>
          </View>
    </View>
    </ScrollView>
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

export default samScreen;