import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View,Text ,ImageBackground,ScrollView,Image,TextInput} from 'react-native';
import { Left } from 'native-base';
import { Button} from 'react-native-paper';
import SideMenuDrawer from '../src/components/SideMenuDrawer';


import Icon from 'react-native-vector-icons/Ionicons';


const LoadingScreen=(props)=> {
  const [Search,setSearch] = useState('');

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
//}
  return (
    
    <View style={{flex:1}}>
      <View style={{ height: 105, justifyContent:'center',paddingHorizontal: 5,backgroundColor:"green"}}>
        
        <View style={{flexDirection:'row'}}>
      
      <Left style={{flex:1,marginTop:36}}>
        <Button >
          <Icon name='ios-menu-outline' style={{fontSize:30,color:"white",marginTop:25}} />
        </Button>
      </Left>
    
      <Text style={{color:"white",fontSize:20,paddingLeft:5,fontWeight:"bold",marginTop:45}}>PlantsStore</Text>
       <Icon name="ios-search" onPress={() =>props.navigation.navigate("SearchScreen")}
        style={{fontSize:24, marginTop:45, paddingLeft:100,color:"white",marginRight:10}}/>
       
       
        </View>
        
    </View>
    <Text style={{paddingLeft:10,paddingTop:20,fontWeight:"bold",fontSize:18,color:"darkgray"}}>Featured Categories</Text>
   
    <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginTop:20}}
               >
                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"white",
                       marginHorizontal:15,
                       borderRadius:10,
                       paddingVertical:5,
                       paddingHorizontal:15,
                       
                   }}>
                       <Image
                        source={require('../assets/good.jpg')}
                        style={{height:300,width:100,resizeMode:"contain"}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:13,
                           paddingLeft:5
                       }}>
                           Indoor plants
                       </Text>
                   </View>

                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"white",
                       marginHorizontal:15,
                       borderRadius:10,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/flowering.jpg')}
                        style={{height:300,width:100,resizeMode:"contain"}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:13,
                           paddingLeft:10
                       }} >
                           Flowering plants
                       </Text>
                   </View>

                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"white",
                       marginHorizontal:15,
                       borderRadius:10,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../assets/Ferns.jpg')}
                        style={{height:300,width:100,resizeMode:"contain"}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:13,
                           paddingLeft:8
                       }} onPress={() =>props.navigation.navigate("AirScreen")}>
                           Air Purifier Plants
                       </Text>
                   </View>
                   </ScrollView>
                       <View style={{flexDirection:"row"}}>
                   <Text style={{marginLeft:25,fontWeight:"bold",fontSize:20,paddingTop:10,color:"darkgray"}}>More to Love</Text>
                   <Icon
                            name="ios-ellipsis-horizontal"
                            size={25}
                            color="#848385" style={{paddingTop:10,paddingLeft:160}}
                           />
                  </View>
  <ScrollView>
 
  <View style={{flexDirection:'row'}}>
    
  <Image source={require('../assets/indoor.jpg')} style={styles.indo} >
    
    </Image>
   <Image source={require('../assets/good.jpg')} style={styles.Image} >
    
   </Image>
   
 
    </View>
    <View style={{flexDirection:'row'}}>
    <Text style={styles.seeds} onPress={()=>props.navigation.navigate("MoneyPlantScreen")}>Money Plants</Text>
  <Text style={styles.good}>Crassula Green Mini Plant</Text>

  </View> 
  <View style={{flexDirection:'row'}}>
  <Text style={styles.cashindoor}>$ 250</Text>
  <Text style={styles.cash}>$ 150</Text>
  </View>


  

  <View style={{flexDirection:'row'}}>
    
    <Image source={require('../assets/spider.jpg')} style={styles.indo} >
      
      </Image>
     <Image source={require('../assets/christmascactus.jpg')} style={styles.Image} >
      
     </Image>
      </View>

      <View style={{flexDirection:'row'}}>
    <Text style={styles.seeds}>spider plant</Text>
  <Text style={styles.good}>Christmas Cactus Plant</Text>

  </View> 
  <View style={{flexDirection:'row'}}>
  <Text style={styles.cashindoor}>$ 275</Text>
  <Text style={styles.cash}>$ 350</Text>
  </View>
 

  <View style={{flexDirection:'row'}}>
    
    <Image source={require('../assets/flowering.jpg')} style={styles.indo} >
      
      </Image>
     <Image source={require('../assets/Ferns.jpg')} style={styles.Image} >
      
     </Image>
      </View>

      <View style={{flexDirection:'row'}}>
    <Text style={styles.anthurium} > Anthurium Red Mini Plant</Text>
  <Text style={styles.golden}>Golden Ferns</Text>

  </View> 
  <View style={{flexDirection:'row'}}>
  <Text style={styles.cashindoor}>$ 200</Text>
  <Text style={styles.cash}>$ 90</Text>
  </View>


 
  <View style={{flexDirection:'row'}}>
    
    <Image source={require('../assets/poinsettianew.jpg')} style={styles.indo} >
      
      </Image>
      
     <Image source={require('../assets/kalanchi.jpg')} style={styles.Image} >
      
     </Image>
      </View>

      <View style={{flexDirection:'row'}}>
    <Text style={styles.anthurium} >      Poinsettia plant</Text>
  <Text style={styles.golden}>kalanchoe red plant</Text>

  </View> 
  <View style={{flexDirection:'row'}}>
  <Text style={styles.cashindoor}>$ 270</Text>
  <Text style={styles.cash}>$ 90</Text>
  </View>
 
  </ScrollView>


  <View style={{flexDirection:'row', backgroundColor:"white",height:50}}>
        <Icon name="ios-home" onPress={()=>props.navigation.navigate("medicalScreen")}
        style={{fontSize:25,paddingLeft:35,paddingTop:15,color:"green"}}/>

<Icon name="ios-person" style={{fontSize:25,color:"green",paddingTop:15,marginLeft:1,paddingLeft:65}} 
      onPress={()=>props.navigation.navigate("Login here....")}/> 
       
      <Icon name="ios-cart" style={{fontSize:25,color:"green",paddingTop:15,marginLeft:1,paddingLeft:65}} 
      onPress={()=>props.navigation.navigate("CartScreen")}/> 
      <Icon name="ios-heart-outline" style={{fontSize:25,color:"green",paddingTop:15,marginLeft:1,paddingLeft:65}} 
      onPress={()=>props.navigation.navigate("checkout")}/>

      </View>
        
    </View>
    
  );
}

export default LoadingScreen;

const styles = StyleSheet.create({
  
    login:{
      paddingTop:42,
      paddingLeft:180,
      paddingBottom:10,
      paddingRight:25,
      fontSize:20,
      color:"white"
    },
    indoorplant:{
      width:"0%",
      height:"50%",
      resizeMode:'contain',
      marginTop:20,
      paddingLeft:35
      
    },
    flower:{
      fontSize:10,
      marginTop:20,
      height:40,
      width:"20%",
      backgroundColor:"white",
      borderRadius:5,
      elevation:10,
      marginLeft:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      paddingTop:10,
      paddingLeft:15,

    },
    text:{
      fontSize:10,
      marginTop:20,
      height:40,
      width:"20%",
      backgroundColor:"white",
      borderRadius:5,
      elevation:10,
      marginLeft:15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      paddingTop:14,
      paddingLeft:5,
      marginBottom:5
    },
    signup:{
      paddingLeft:180,
      paddingTop:40,
      fontSize:20,
      flexDirection:'row',
      color:"white"
    },
    create:{
      paddingLeft:105,
      fontStyle:"italic",
      fontSize:15,
      paddingTop:5,
      paddingBottom:5,
      color:"green"
    },
    fernss:{
      width:"35%",
      height:"120%",
      backgroundColor:"white",
      marginLeft:18,
      marginTop:20
    },
    flowr:{
      paddingTop:15,
      marginRight:5,
      
      height:100,
      width:"25%",
      backgroundColor:"white",
      borderRadius:1,
      marginTop:10,
      marginLeft:15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5
    
    },
    ferns:{
      marginTop:80,
      paddingLeft:50,
      marginLeft:35,
      marginBottom:20,
      paddingTop:5,
      fontSize:10,
      height:75,
      width:"35%",
      backgroundColor:"white",
      borderRadius:1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5
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
    plants:{
      paddingLeft:55,
      paddingTop:50,

      
    },
    
    Image:{
     
      marginLeft:25,
      marginTop:20,
      backgroundColor:"white",
      height:100,
      width:"35%",
      backgroundColor:"white",
      borderRadius:1,
      resizeMode:'contain',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      marginRight:5
      
    },
    flowering:{
      paddingLeft:20,
      marginLeft:23,
      paddingTop:5,
      fontSize:7,
      height:25,
      width:"26%",
      backgroundColor:"white",
      borderRadius:1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      
    },
    pots:{
      paddingTop:10,
      marginRight:40,
      paddingLeft:55,
      height:100,
      width:"25%",
      backgroundColor:"white",
      borderRadius:1,
      marginTop:20,
      marginBottom:20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      marginLeft:25
    },
    good:{
      paddingLeft:26,
      marginLeft:35,
      paddingTop:3,
      fontSize:7,
      height:15,
      width:"35%",
      backgroundColor:"white",
      borderRadius:1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5
    },
    seeds:{
      paddingLeft:45,
      marginLeft:35,
      paddingTop:3,
      fontSize:7,
      height:15,
      width:"35%",
      backgroundColor:"white",
      borderRadius:1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      borderLeftColor:"green"
    },
    cash:{
      paddingLeft:55,
      marginLeft:35,
      
      fontSize:7,
      height:15,
      width:"35%",
      backgroundColor:"white",
      borderRadius:1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5
    },
   
    pest:{
      paddingTop:15,
      marginRight:18,
      
      height:100,
      width:"26%",
      backgroundColor:"white",
      borderRadius:1,
      marginTop:100,
      marginLeft:18,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5
    },
    indo:{
      paddingTop:15,
      marginRight:10,
      marginLeft:35,
      height:100,
      width:"35%",
      backgroundColor:"white",
      borderRadius:1,
      marginTop:20,
      resizeMode:'contain',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5
    },
    image:{
      width:"100%",
      height:"30%"
    },
    cashindoor:{
      paddingLeft:55,
      marginLeft:35,
     
      fontSize:7,
      height:15,
      width:"35%",
      backgroundColor:"white",
      borderRadius:1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5
      

    },
    addcart:{
      paddingLeft:50,
      marginLeft:35,
     paddingTop:2,
      fontSize:7,
      height:15,
      width:"35%",
      backgroundColor:"white",
      borderRadius:1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      backgroundColor:"green",
      color:"white"
    },
    anthurium:{
      paddingLeft:25,
      marginLeft:35,
      paddingTop:3,
      fontSize:7,
      height:15,
      width:"35%",
      backgroundColor:"white",
      borderRadius:1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      borderLeftColor:"red"
    },
    golden:{
      paddingLeft:40,
      marginLeft:35,
      paddingTop:3,
      fontSize:7,
      height:15,
      width:"35%",
      backgroundColor:"white",
      borderRadius:1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5
    }
   

});
