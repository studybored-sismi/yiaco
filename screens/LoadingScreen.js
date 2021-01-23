import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { Left } from 'native-base';
import { Button } from 'react-native-paper';
import SideMenuDrawer from '../src/components/SideMenuDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();
  const [Search, setSearch] = useState('');

  // sendCred= ()=>{
  // fetch("http://192.168.1.6:3000/api/category/getcategory",{
  //   method:'POST',
  //headers:{
  //     'Accept': 'application/json',
  //   'Content-Type': 'application/json',
  //},
  //body: JSON.stringify({

  //})
  //})
  //.then(res=>res.json())
  //.then (data=>{
  //  console.log(data)
  //})
  //}

  //componentDidMount =()=>{
  //fetch("http://192.168.1.6:3000/api/product/getProduct")
  //.then(data=>data.json())
  //.then(data2=>{
  //console.log(data2)

  //})
  //

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ height: 105, justifyContent: 'center', paddingHorizontal: 5, backgroundColor: "#00BFFF" }}> */}
      {/* <View style={{ flexDirection: 'row' }}>
              <Left style={{ flex: 1, marginTop: 36 }}>
                <Button >
                  <Icon name='ios-menu-outline' style={{ fontSize: 30, color: "white", marginTop: 20 }} />
                </Button>
              </Left>
              <Text style={{ color: "white", fontSize: 30, paddingRight: 35, fontStyle: "italic", fontWeight: "bold", marginTop: 40 }}>YIACO</Text>
              <Icon name="ios-search" onPress={() => props.navigation.navigate("SearchScreen")}
                style={{ fontSize: 24, marginTop: 45, paddingLeft: 100, color: "white", marginRight: 10 }} />
            </View> */}
      {/* </View> */}
      <Text style={{ paddingLeft: 10, paddingTop: 20, fontWeight: "bold", fontSize: 18, color: "darkgray" }}>Featured Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }} >
        <View style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "white",
          marginHorizontal: 15,
          borderRadius: 10,
          paddingVertical: 5,
          paddingHorizontal: 15
        }}>
          <TouchableOpacity onPress={() => navigation.navigate("surgicalScreen")}>
            <Image
              source={require('../assets/surgical_equipments.jpg')}
              style={styles.img}
            />
            <Text style={{
              fontWeight: "bold",
              fontSize: 13,
              paddingLeft: 5
            }} >
              Surgical Equipments
              </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "white",
          marginHorizontal: 15,
          borderRadius: 10,
          paddingVertical: 5,
          paddingHorizontal: 15
        }}>
          <TouchableOpacity onPress={() => navigation.navigate("AirScreen")}>
            <Image
              source={require('../assets/non_surgical_equipments.jpg')}
              style={styles.img} />

            <Text style={{
              fontWeight: "bold",
              fontSize: 13,
              paddingLeft: 10
            }} >
              Non-Surgical Equipments
               </Text>
          </TouchableOpacity>

        </View>
        <View style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "white",
          marginHorizontal: 15,
          borderRadius: 10,
          paddingVertical: 5,
          paddingHorizontal: 15
        }}>
          <TouchableOpacity onPress={() => navigation.navigate("AirScreen")}>
            <Image
              source={require('../assets/dental_equipments.jpg')}
              style={styles.img} />
            <Text style={{
              fontWeight: "bold",
              fontSize: 13,
              paddingLeft: 8
            }} >
              Dental Equipments
                 </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "white",
          marginHorizontal: 15,
          borderRadius: 10,
          paddingVertical: 5,
          paddingHorizontal: 15
        }}>
          <TouchableOpacity onPress={() => navigation.navigate("AirScreen")}>
            <Image
              source={require('../assets/first_aid_kit.jpeg')}
              style={styles.img} />
            <Text style={{
              fontWeight: "bold",
              fontSize: 13,
              paddingLeft: 8
            }} >
              First Aid Kit
               </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View >

        <Icon
          name="ios-ellipsis-horizontal"
          size={25}
          color="#848385" style={{ paddingTop: 10, paddingLeft: 183 }} />
        <Text style={{ marginLeft: 25, fontWeight: "bold", fontSize: 20, paddingTop: 10, color: "darkgray" }}>More to Love</Text>
      </View>

      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image onPress={() => navigation.navigate("ThermoScreen")} source={require('../assets/thermometer.jpg')} style={styles.indo} >
          </Image>
          <Image source={require('../assets/pen_knifes.jpeg')} style={styles.Image} >
          </Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.anthurium} onPress={() => navigation.navigate("ThermoScreen")}>Thermometer</Text>
          <Text style={styles.golden}>Pen Knife</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/sthethescope.jpg')} style={styles.indo} >
          </Image>
          <Image source={require('../assets/artery_foreceps.jpg')} onPress={() => navigation.navigate("medicalScreen")} style={styles.Image} >
          </Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.anthurium}>Sthethescope</Text>
          <Text style={styles.golden} onPress={() => navigation.navigate("medicalScreen")}>Artery Foreceps </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/KN95_mask.jpeg')} style={styles.indo} >
          </Image>
          <Image source={require('../assets/surgical_gloves.jpg')} style={styles.Image} >
          </Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.anthurium} >KN95 Mask</Text>
          <Text style={styles.golden}>Surgical Gloves</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/walking_crutches.jpg')} style={styles.indo} >
          </Image>
          <Image source={require('../assets/bp_monitor.jpg')} style={styles.Image} >
          </Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.anthurium}>Walking Crutches</Text>
          <Text style={styles.golden}>Blood Pressure Monitor</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/wheel_chair.jpg')} style={styles.indo} >
          </Image>
          <Image source={require('../assets/microscope.jpg')} style={styles.Image} >
          </Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.anthurium} > Wheel Chair</Text>
          <Text style={styles.golden}>Microscope</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/dental_chair.jpg')} style={styles.indo} >
          </Image>
          <Image source={require('../assets/hygenic_tools.jpg')} style={styles.Image} >
          </Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.anthurium} >Dental Chair</Text>
          <Text style={styles.golden}>Hygenic Tools</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/surgical_table.jpg')} style={styles.indo} >
          </Image>
          <Image source={require('../assets/therapy_equipment.jpg')} style={styles.Image} >
          </Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.anthurium}>Surgical Table</Text>
          <Text style={styles.golden}>Therapy Equipment</Text>
        </View>
      </ScrollView>
      {/* <View style={{ flexDirection: 'row', backgroundColor: "white", height: 50 }}>
            <Icon name="ios-home"
              style={{ fontSize: 25, paddingLeft: 35, paddingTop: 15, color: "#00BFFF" }} />
            <Icon name="ios-person" style={{ fontSize: 25, color: "#00BFFF", paddingTop: 15, marginLeft: 1, paddingLeft: 65 }}
              onPress={() => props.navigation.navigate("Login here....")} />
            <Icon name="ios-cart" style={{ fontSize: 25, color: "#00BFFF", paddingTop: 15, marginLeft: 1, paddingLeft: 65 }}
              onPress={() => props.navigation.navigate("CartScreen")} />
            <Icon name="ios-heart-outline" style={{ fontSize: 25, color: "#00BFFF", paddingTop: 15, marginLeft: 1, paddingLeft: 65 }}
              onPress={() => props.navigation.navigate("checkout")} />
          </View> */}
    </View>
  );
}
export default LoadingScreen;
const styles = StyleSheet.create({
  anthurium: {
    textAlign: 'center',
    marginRight: 10,
    marginLeft: 20,
    paddingTop: 3,
    fontSize: 10,
    height: 15,
    width: "40%",
    backgroundColor: "white",
    borderRadius: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderLeftColor: "red"
  },
  indo: {
    paddingTop: 15,
    marginRight: 10,
    marginLeft: 20,
    height: 110,
    width: "40%",
    backgroundColor: "white",
    borderRadius: 1,
    marginTop: 20,
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  Image: {
    marginLeft: 25,
    marginTop: 20,
    marginLeft: 30,
    backgroundColor: "white",
    height: 110,
    width: "40%",
    backgroundColor: "white",
    borderRadius: 1,
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginRight: 5
  },
  golden: {
    textAlign: 'center',
    marginLeft: 30,
    paddingTop: 3,
    fontSize: 10,
    height: 15,
    width: "40%",
    backgroundColor: "white",
    borderRadius: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  img: {
    height: 300,
    width: 100,
    resizeMode: 'contain'
  }
});
        