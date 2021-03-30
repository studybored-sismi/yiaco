import React from 'react';
import {  View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import CartScreen from './CartScreen';
import LoginScreen from './LoginScreen';
import wishlist from './wishlist';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
    return (
        <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor:"green"}}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarColor: 'green',
                    tabBarLabel: 'HOME',
                    
                    tabBarIcon: ({color}) => (
                        <View>
                          <Icon name="ios-home" size={15}  color={color} />
                        </View>
                  

                    ),
                }}

            />
           
           <Tab.Screen
                name="Account"
                component={LoginScreen}
                options={{

                    tabBarColor: 'green',
                    tabBarLabel: 'ACCOUNT',
                    tabBarIcon: ({ focused, color }) => (
                        <View>
                            <Icon2 name="user-o" size={15} color={color} />

                        </View>

                    ),

                }} />

            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarColor: 'green',
                    tabBarLabel: 'CART',
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon1 name="briefcase-outline" size={15} color={color} />
                        </View>
                    ),
                }} />
         
         <Tab.Screen
                name="Wishlist"
                component={wishlist}
                options={{

                    tabBarColor: 'green',
                    tabBarLabel: 'WISHLIST',
                    tabBarIcon: ({ focused, color }) => (
                        <View>
                            <Icon2 name="heart" size={15} color={color} />

                        </View>

                    ),

                }} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

});