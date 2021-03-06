import 'react-native-gesture-handler';
import React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text,KeyboardAvoidingView, View } from 'react-native';
import { Button, TextInput} from 'react-native-paper';


import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import SearchScreen from './screens/SearchScreen';
import medicalScreen from './screens/medicalScreen';
import AddScreen from './screens/AddScreen';
import CartScreen from './screens/CartScreen';
//import ProductDetails from './screens/ProductDetails';

import AirScreen from './screens/AirScreen';
//import AddressScreen from './screens/AddressScreen';
import checkout from './screens/checkout';

import Cart from './screens/Cart';
import ThermoScreen from './screens/ThermoScreen';
import MainScreen from './screens/MainScreen';
import IndexScreen from './screens/IndexScreen';
import surgicalScreen from './screens/surgicalScreen';
import medicScreen from './screens/medicScreen';
import productScreen from './screens/productScreen';

const Stack = createStackNavigator();
const App=()=> {

  return (
 <NavigationContainer>
     <Stack.Navigator>
    
          <Stack.Screen name="WelcomeScreen" 
          component={WelcomeScreen}
          options={
            {headerShown:false}
          }
           />
          <Stack.Screen name="IndexScreen" 
          component={IndexScreen}
          options={
            {headerShown:false}
          }
           />
        
          <Stack.Screen name="SignupScreen" 
          component={SignupScreen}
          options={
            {title:'Signup...'},
            {headerShown: false}
        
          } /> 
          <Stack.Screen name="LoginScreen" 
        component={LoginScreen}
        options={
          {title:'Login here....'},
          {headerShown:false}
        } />

   
        {/* // <Stack.Screen name="LoadingScreen" 
        // component={LoadingScreen} 
        //   options={
        //     {headerShown:false}
        //   }
        //    /> */}
        <Stack.Screen name="SearchScreen"
           component={SearchScreen}
           options={
             {headerShown:false}
           }/>

        <Stack.Screen name="CartScreen" 
        component={CartScreen} 
          options={
            {headerShown:false}
          }
           />
            <Stack.Screen name="medicalScreen" 
        component={medicalScreen} 
          options={
            {headerShown:false}
          }
           />

<Stack.Screen name="ThermoScreen" 
        component={ThermoScreen} 
          options={
            {headerShown:false}
          }
           />
     

    <Stack.Screen name="AirScreen" 
        component={AirScreen} 
          options={
            {headerShown:false}
          }
           /> 
           
    <Stack.Screen name="MainScreen" 
        component={MainScreen} 
          options={
            {headerShown:false}
          }
           />
       
        <Stack.Screen name="AddScreen" 
        component={AddScreen} 
          options={
            {headerShown:false}
          }
           />
        <Stack.Screen name="Cart" 
        component={Cart} 
          options={
            {headerShown:false}
          }
           />
      

<Stack.Screen name="checkout" 
        component={checkout} 
          options={
            {headerShown:false}
          }
           /> 

            
<Stack.Screen name="surgicalScreen" 
        component={surgicalScreen} 
          options={
            {headerShown:false}
          }
           /> 

<Stack.Screen name="medicScreen" 
          component={medicScreen}
          options={
            {headerShown:false}
          }
           />

<Stack.Screen name="productScreen" 
          component={productScreen}
          options={
            {headerShown:false}
          }
           />
      </Stack.Navigator>
 </NavigationContainer>
  );
}



const styles = StyleSheet.create({
    signup:{
      paddingTop:50,
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
    }
});
export default App;