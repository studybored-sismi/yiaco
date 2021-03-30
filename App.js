import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import AddScreen from './screens/AddScreen';
import CartScreen from './screens/CartScreen';
import outdoor from './screens/outdoor';

import AirScreen from './screens/AirScreen';
//import AddressScreen from './screens/AddressScreen';


import indoorScreen from './screens/indoorScreen';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import IndexScreen from './screens/IndexScreen';
import ProductScreen from './screens/productScreen';
import CartDetails from './screens/CartDetails';
import Payment from './screens/Payment';
import PaymentDetails from './screens/PaymentDetails';
import wishlist from './screens/wishlist';
import categScreen from './screens/categScreen';
import flowering from './screens/flowering';
import ThermoScreen from './screens/ThermoScreen';
import Golden from './screens/Golden';
import checkoutScreen from './screens/checkoutScreen';
import AnthuScreen from './screens/AnthuScreen';
import aglonaScreen from './screens/aglonaScreen';
import kalanScreen from './screens/kalanScreen';
import hibiScreen from './screens/hibiScreen';
import spiderScreen from './screens/spiderScreen';
import AloveraScreen from './screens/AloveraScreen';
import FernScreen from './screens/FernScreen';
import zamiaScreen from './screens/zamiaScreen';
import MoneyScreen from './screens/MoneyScreen';
import samScreen from './screens/samScreen';
import Myorder from './screens/Myorder';
import loginafterScreen from './screens/loginafterSCreen';
import searchsam from './screens/searchsam';
import userScreen from './screens/userScreen';



const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      
      <Stack.Navigator>

        <Stack.Screen name="WelcomeScreen"
          component={WelcomeScreen}
          options={
            { headerShown: false }
          }
        />
        <Stack.Screen name="IndexScreen"
          component={IndexScreen}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="SignupScreen"
          component={SignupScreen}
          options={
            { title: 'Signup...' },
            { headerShown: false }

          } />
        <Stack.Screen name="LoginScreen"
          component={LoginScreen}
          options={
            { title: 'Login here....' },
            { headerShown: false }
          } />
         

     
        <Stack.Screen name="SearchScreen"
          component={SearchScreen}
          options={
            { headerShown: false }
          } />

       
        <Stack.Screen name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="indoorScreen"
          component={indoorScreen}
          options={
            { headerShown: false }
          }
        />
        <Stack.Screen name="AirScreen"
          component={AirScreen}
          options={
            { headerShown: false }
          }
        />
         <Stack.Screen name="CartScreen"
          component={CartScreen}
          options={
            { headerShown: false }
          }
        /> 
        <Stack.Screen name="AddScreen"
          component={AddScreen}
          options={
            { headerShown: false }
          }
         
        />
        <Stack.Screen name="ProductScreen"
          component={ProductScreen}
          options={
            { headerShown: false }
          }
        /> 
        
          <Stack.Screen name="CartDetails"
          component={CartDetails}
          options={
            { headerTitle:'Order Summary' }
          }
        />  
        <Stack.Screen name="Payment"
          component={Payment}
          options={
            { headerTitle:'Payments' }
          }
        />
        <Stack.Screen name="PaymentDetails"
          component={PaymentDetails}
          options={
            { headerTitle:'Enter Card Details' }
          }
        /> 
         <Stack.Screen name="wishlist"
          component={wishlist}
          options={
            { headerShown: false }
          }
        /> 
    <Stack.Screen name="categScreen"
          component={categScreen}
          options={
            { headerShown: false }
          }
        /> 
        <Stack.Screen name="flowering"
          component={flowering}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="ThermoScreen"
          component={ThermoScreen}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="outdoor"
          component={outdoor}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="checkoutScreen"
          component={checkoutScreen}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="AnthuScreen"
          component={AnthuScreen}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="Golden"
          component={Golden}
          options={
            { headerShown: false }
          }
        /> 
<Stack.Screen name="aglonaScreen"
          component={aglonaScreen}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="kalanScreen"
          component={kalanScreen}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="hibiScreen"
          component={hibiScreen}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="spiderScreen"
          component={spiderScreen}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="AloveraScreen"
          component={AloveraScreen}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="FernScreen"
          component={FernScreen}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="zamiaScreen"
          component={zamiaScreen}
          options={
            { headerShown: false }
          }
        /> 
<Stack.Screen name="MoneyScreen"
          component={MoneyScreen}
          options={
            { headerShown: false }
          }
        /> 
        <Stack.Screen name="samScreen"
          component={samScreen}
          options={
            { headerTitle:'Add Address' }
          }
        /> 

<Stack.Screen name="Myorder"
          component={Myorder}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="searchsam"
          component={searchsam}
          options={
            { headerShown: false }
          }
        /> 

<Stack.Screen name="loginafterScreen"
          component={loginafterScreen}
          options={
            { headerShown: false }
          }
        /> 

        
<Stack.Screen name="userSCreen"
          component={userScreen}
          options={
            { headerShown: false }
          }
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  signup: {
    paddingTop: 50,
    paddingLeft: 120,
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
  image: {
    width: 20,
    height: 30,
    paddingLeft: 80,

  },
  text: {
    right: 40,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#00bfff'
  },
  text1: {
    right: 20,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#00bfff'

  },
  textview: {
    flexDirection: 'row',

  }
});
export default App;