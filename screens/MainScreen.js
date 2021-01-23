import React from 'react';
import {  View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import SearchScreen from './SearchScreen';
import CartScreen from './CartScreen';
import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
    return (
        <Tab.Navigator initialRouteName="Home" activeColor="#ffa500">
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarColor: '#ffa500',
                    tabBarLabel: 'HOME',
                    tabBarIcon: ({ color }) => (
                        <View>
                          <Icon name="ios-home" size={15} color={color} />
                        </View>

                    ),
                }}

            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}

                options={{
                    tabBarColor: '#ffa500',
                    tabBarLabel: 'SEARCH',
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon name="search-outline" size={15} color={color} />
                        </View>
                    ),
                }} />

            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarColor: '#ffa500',
                    tabBarLabel: 'CART',
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon1 name="briefcase-outline" size={15} color={color} />
                        </View>
                    ),
                }} />
            <Tab.Screen
                name="Account"
                component={LoginScreen}
                options={{

                    tabBarColor: '#ffa500',
                    tabBarLabel: 'ACCOUNT',
                    tabBarIcon: ({ focused, color }) => (
                        <View>
                            <Icon2 name="user-o" size={15} color={color} />

                        </View>

                    ),

                }} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

});