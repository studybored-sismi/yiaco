import React from 'react';
import { Text, Image, View, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

//import CartDetails from './CartDetails';

const Cart = ({ route }) => {
    const navigation = useNavigation();
    
    
    if (route.params) {
        const item = route.params.items

        return (
            <ScrollView>
                <View>
                    <View style={styles.cardContainerCart} >
                        <View style={styles.cardContainer} >
                            <View >
                                <Image
                                    source={require("../assets/good.jpg")}
                                    resizeMode="cover"
                                    style={styles.imageCart}
                                />
                            </View>
                            <View style={styles.textContainerCart}>
                                <View style={styles.containerCart}>
                                    <Text style={styles.textCart}>{item.name}</Text>
                                </View>
                                <View style={styles.containerCart1}>
                                    <Text style={styles.textCart1}>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.iconContainer} >
                            <View style={styles.iconContainer1} >
                                <Icon name="md-square-outline" size={15} color="green" />
                                <Icon1 style={styles.iconCart} name="circle" size={7} color="green" />
                                <Text>{item.items.desc}</Text>
                            </View>
                            <View style={styles.iconContainer2} >
                                <TouchableOpacity activeOpacity={3.0}>
                                    <Icon2 style={styles.icon1} name="minus" size={12} color="grey" />
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.text}>1</Text>
                                </View>
                                <TouchableOpacity activeOpacity={3.0}>
                                    <Icon2 style={styles.icon2} name="plus" size={12} color="green" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.iconContainer3} >
                                <Icon1 style={styles.icon3} name="rupee" size={11} color="grey" />
                                <Text>{item.sold}</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.iconContainer4}>
                            <Icon3 style={styles.icon4} name="profile" size={25} color="grey" />
                            <TextInput placeholder="Any restaurant request? We will try our best to convience" />
                        </View>

                    </View>
                    
                    <View style={styles.containerbillCart}>
                        <View style={styles.containerbill}>
                            <View style={styles.textcontainerbill}>
                                <Text style={styles.textbill}>Bill Details</Text>
                            </View>
                            <View style={styles.itemcontainerbill}>
                                <Text>Item Total</Text>
                                <View style={styles.itembill}>
                                    <Icon1 style={styles.iconbill} name="rupee" size={11} color="black" />
                                    <Text>{item.price}</Text>
                                </View>
                            </View>
                            <View style={styles.itemcontainerbill}>
                                <Text style={styles.text1}>Delivery fee</Text>
                                <View style={styles.itembill}>
                                    <Icon1 style={styles.iconbill} name="rupee" size={11} color="black" />
                                    <Text>00.00</Text>
                                </View>
                            </View>
                            
                            <View style={styles.linebill}></View>
                           
                            <View style={styles.itemcontainerbill1}>
                                <Text style={styles.text1}>Taxes and Charges</Text>
                                <View style={styles.itembill}>
                                    <Icon1 style={styles.iconbill} name="rupee" size={11} color="black" />
                                    <Text>0.00</Text>
                                </View>
                            </View>
                            <View style={styles.linebill}></View>
                            <View style={styles.itemcontainerbill1}>
                                <Text>To Pay</Text>
                                <View style={styles.itembill}>
                                    <Icon1 style={styles.iconbill} name="rupee" size={11} color="black" />
                                    <Text>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <CartDetails 
                items={item} />
            </ScrollView>
        )
    }

    else {
          return (
                <View style={styles.cartContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("../assets/download.jpg")} />
                    </View>
                    <View >
                        <Text style={styles.textstyle}>GOOD FOOD IS ALWAYS COOKING</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} >Your cart is empty.</Text>
                        <Text style={styles.text}>Add something from the menu</Text>
                    </View>
                        <TouchableOpacity
                            style={styles.container}
                            activeOpacity={1.0}
                            onPress={()=>navigation.navigate('Restaurant')}
                        >
                            <Text style={styles.containertext}>BROWSE RESTAURANTS</Text>
                        </TouchableOpacity>
                </View>
            )
    }
}


const styles = StyleSheet.create({
    cardContainerCart: {
        backgroundColor: 'white',
        paddingRight: 15,
        paddingLeft: 10,
        paddingTop: 30

    },
    imageCart: {
        width: 70,
        height: 70,
    },

    textContainerCart: {
        paddingLeft: 15,
        justifyContent: 'center'
    },
    cardContainer: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
    },
    iconContainer1: {
        flexDirection: 'row',
        //paddingLeft: 10,
    },
    iconContainer2: {
        flexDirection: 'row',
        borderWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: 'grey',
        top: -6
    },
    iconContainer3: {
        flexDirection: 'row',
        // paddingRight:15,
    },
    iconCart: {
        position: 'relative',
        paddingTop: 4,
        right: 11
    },
    icon1: {
        paddingRight: 10,
        paddingTop: 3,
    },
    icon2: {
        paddingLeft: 10,
        paddingTop: 3,

    },
    text: {
        color: 'green'
    },
    text1: {
        color: '#87cefa'
    },
    textcolor1: {
        color: '#6495ed'
    },
    textcolor2: {
        color: 'grey'
    },
    icon3: {
        paddingTop: 3,
    },
    iconContainer4: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 15,
    },
    line: {
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',
        paddingTop: 30,

    },
    icon4: {
        paddingRight: 10
    },
    Containertip: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    Containertexttip: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 15,

    },
    Containertippress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    Containertipstext: {
        textAlign: 'center',
        paddingBottom: 20,
        paddingTop: 15,
    },
    Containertips: {
        flexDirection: 'row',
        marginLeft: 32,
        paddingLeft: 15,
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        width: 60,
        paddingTop: 8,
        paddingBottom: 8
    },
    Containertipsicon: {
        paddingTop: 4,
    },
    Containertip1: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
    },
    tipCart: {
        paddingTop: 30,
    },
    tip: {
        backgroundColor: 'white',
        paddingTop: 15,
    },
    coupontip: {
        paddingTop: 30,
    },
    coupontiptext: {
        paddingLeft: 10,
        paddingTop: 2
    },
    coupontipicon: {
        paddingLeft: 220,
        paddingTop: 2
    },
    containerbill: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
    containerbillCart: {

        paddingTop: 30
    },
    textcontainerbill: {
        paddingTop: 10,
    },
    textbill: {
        fontWeight: 'bold'
    },
    itemcontainerbill: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    itemcontainerbill1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
    },
    itembill: {
        flexDirection: 'row'
    },
    iconbill: {
        paddingTop: 4,
    },
    linebill: {
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',
    },
    textbill1: {
        fontWeight: 'bold',
        color: 'orange'
    },
    support: {
        paddingLeft: 15,
        paddingRight: 7,
    },
    supporttext: {
        paddingLeft: 45,
        paddingBottom: 15,
    },
    supporticon: {
        left: 16,
        top: 22
    },
    image:{
        width:200,
        height:200,
        
    },
    imageContainer:{
        paddingTop:210,
        paddingBottom:40,
        
   },
   cartContainer:{
       alignItems:'center'
   },
   textstyle:{
       fontWeight:'bold'
   },
   textContainer:{
       paddingBottom:30,
       paddingTop:20,
       alignItems:'center',
       
   },
   text:{
       color:'grey'
   },
   container:{
       borderWidth:2,
       paddingTop:8,
       paddingBottom:8,
       paddingLeft:25,
       paddingRight:25,
       borderColor:'#ffa500'

   },
   containertext:{
       color:'#ffa500',
       fontWeight:'bold',
   }
});

export default Cart;