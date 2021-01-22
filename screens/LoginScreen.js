import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,AsyncStorage,Alert,KeyboardAvoidingView, View } from 'react-native';
import { Button, TextInput} from 'react-native-paper';


//const LoginScreen=(props)=> {
  export default function LoginScreen(props) {
  const onSubmit = () => {
    fetch('http://192.168.1.6:3000/api/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          "email":email,
           "password":password
        })
      })
      .then(res => res.json())
      .then(async function (res) {
        if (res != null) {
          alert('success');
          console.log(res);
          AsyncStorage.setItem('user', JSON.stringify(res));

          var user = await AsyncStorage.getItem('user');
          var parsed = JSON.parse(user);

          // console.log('fetched user');
          // console.log(parsed);


          props.navigation.navigate('LoadingScreen')
        } else {
          alert('try again')
        }
      })
      .catch(function (error) {
        alert(error);
      });

  }
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  //componentDidMount=()=>{
    //this._loadInitialState().done();
  //}

  //_loadInitialState = async () =>{

    //  var value = await AsyncStorage.getItem('user');
      //if (value!== null){
        //this.props.navigation.navigate('LoadingScreen');
      //}
  //}

  //sendCred=()=>{
    //fetch("http://192.168.1.6:3000/api/login",{
      //method: 'POST',
      //headers:{
        //'Accept': 'application/json',
        //'Content-Type': 'application/json',
      //} ,
      //body:JSON.stringify({
        //email,
        //password,
      //}) 
    //})

    //.then((response) => response.json())
    //.then((res) => {
      //if(res.success === true){
        //AsyncStorage.getItem('user',res.user);
        //this.props.navigation.navigate('LoadingScreen');
      //}
      //else{
        //alert(res.message);
      //}
    //})
    
  //}
  //sendCred= async()=>{
    //fetch("http://192.168.1.6:3000/api/login",{
      //  method:'POST',
        //headers:{
          // 'Content-Type': 'application/json',
        //},
        //body: JSON.stringify({
            
         //   "email":email,
           // "password":password
        //})
        //})
        //.then((response) => response.json())
        //.then((responseJson) => {
    //Alert.alert("Success" + email);
  
     

       // })
        //.catch((error) => {
        //console.error(error);
        //});
    //}


  return (
    <KeyboardAvoidingView behavior="position">
    <View style={styles.container}>
      <Text style={styles.signup}>Login</Text>
   
     
      <TextInput style={styles.input} 
       value={email}
       mode="outlined"
       label="Email"
       theme={{colors:{primary:"green"}}}
       onChangeText={(text)=>setEmail(text)}/>
      
      <TextInput style={styles.input} 
      secureTextEntry={true} 
      value={password}
      mode="outlined" 
      label="Password" 
      theme={{colors:{primary:"green"}}}
      onChangeText={(text)=>setPassword(text)}/>
      
      <View  style={styles.Button}>
        <Button  mode="contained" onPress={onSubmit}  color="green" width={200}>LOGIN</Button>
          </View>
          <Text style={styles.forgott} onPress={() =>props.navigation.navigate("Signup...")}>Click here to Signup</Text>
          </View>
          </KeyboardAvoidingView>
  );
}



//export default LoginScreen;

const styles = StyleSheet.create({
    signup:{
      paddingTop:100,
      paddingLeft:130,
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
    },
    Button:{
      
      alignItems:"center",
      justifyContent:"center"
    },
    input:{
      width:"90%",
      height:50,
      margin:18,
      paddingRight:5
    },
    forgott:{
        paddingLeft:200,
        fontStyle:"italic",
        paddingTop:10
    }
});
