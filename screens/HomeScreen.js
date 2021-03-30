import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity,Button,Left } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = ({navigation}) => {
   componentDidMount=()=>{
       fetch("http://192.168.1.6:3000/getflowering")
       .then(data=>data.json())
       .then(data2=>{
           console.log(data2)
           navigation.navigate('flowering')
       })
   }

   submitair=()=>{
    fetch("http://192.168.1.6:3000/getair")
    .then(data=>data.json())
    .then(data2=>{
        console.log(data2)
        navigation.navigate('AirScreen')
    })
}

submitindoor=()=>{
    fetch("http://192.168.1.6:3000/getindoor")
    .then(data=>data.json())
    .then(data2=>{
        console.log(data2)
        navigation.navigate('outdoors')
    })
}

submitoutdoor=()=>{
    fetch("http://192.168.1.6:3000/getoutdoor")
    .then(data=>data.json())
    .then(data2=>{
        console.log(data2)
        navigation.navigate('outdoors')
    })
}
    return (
        <ScrollView>
        
                <View >
                <View style={{ height: 105,backgroundColor:"green",width:"200%",flexDirection:'row'}}>
        
          <Icon name='ios-menu-outline' onPress={() => navigation.navigate("AddScreen")}
           style={{fontSize:40,color:"white",marginTop:39,marginLeft:5}} />
         <Text style={{color:"white",fontSize:20,fontWeight:"bold",marginTop:45,paddingLeft:20}}>PlantsStore</Text>
                <Icon name="ios-search" onPress={() =>navigation.navigate("SearchScreen")}
                style={{color:"white",fontSize:25,marginTop:45,paddingLeft:140}}/>
   
                </View>
                </View>
               
           
            
            <View>
            <View style={{backgroundColor:"white"}}><Image source={require("../assets/plantsban.jpg")} 
            style={{resizeMode:'contain',width:"100%",height:200}}></Image></View>
                    <Text style={styles.directionpad}>Featured Categories</Text>
                
                <ScrollView
                    horizontal={true}
                    style={styles.viewdir}
                    showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.touchcon} onPress={()=>submitindoor()} >
                        <Image style={styles.imgdir} source={require("../assets/indoor.jpg")} />
                        <Text style={styles.textdir1} onPress={()=>submitindoor()}>Indoor Plants</Text>

                    </TouchableOpacity>
                    <View style={styles.pad2}></View>
                    <TouchableOpacity style={styles.touchcon} onPress={()=>componentDidMount()}>
                        <Image style={styles.imgdir} source={require("../assets/anthu.jpg")} />
                        <Text style={styles.textdir1} onPress={()=>componentDidMount()}>Flowering Plants</Text>

                    </TouchableOpacity>
                    <View style={styles.pad2}></View>
                    <TouchableOpacity style={styles.touchcon} onPress={()=>submitoutdoor()}>
                        <Image style={styles.imgdir} source={require("../assets/good.jpg")} />
                        <Text style={styles.textdir1} onPress={()=>submitoutdoor()}>Outdoor Plants</Text>

                    </TouchableOpacity>
                    <View style={styles.pad2}></View>
                    <TouchableOpacity style={styles.touchcon} onPress={()=>submitair()}>
                        <Image style={styles.imgdir} source={require("../assets/Ferns.jpg")} />
                        <Text style={styles.textdir1} onPress={()=>submitair()}>Air Purifier Plants</Text>

                    </TouchableOpacity>

                </ScrollView>
            </View>
            <View style={styles.direction}>
                <Text style={styles.directionpad}>More To love</Text>
            </View>
            
            <View style={{ flexDirection: 'row' , marginTop:0}}>
                    <Image source={require('../assets/spider.jpg')} style={styles.indo}  >
                    </Image>
                    <View style={{flexDirection:"column"}}>
                    <Text style={styles.spider} > Spider Plant</Text>
                    <Text style={styles.spidercash}>$ 250</Text>
                    <View style={styles.spiderstar}>
                    <Icon name="ios-star"  style={{color:"green"}}></Icon>
                    <Icon name="ios-star"  style={{color:"green"}} ></Icon>
                    <Icon name="ios-star"   style={{color:"green"}}></Icon>
                    <Icon name="ios-star"  style={{color:"green"}} ></Icon>
                    <Icon name="ios-star-outline"   style={{color:"green"}}></Icon>
                   
                    </View>
                    <Text style={{color:"green", paddingLeft: 20,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 60,
        width: "160%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        color:"green",
        fontWeight:'700',
        fontSize:10}} onPress={() => navigation.navigate("spiderScreen")}>VIEW</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' , marginTop:20}}>
                    <Image source={require('../assets/aglao.jpg')} style={styles.indo}  >
                    </Image>
                    <View style={{flexDirection:"column"}}>
                    <Text style={styles.anthurium} >Aglaonema Plant</Text>
                    <Text style={styles.cashindoor}>$ 250</Text>
                    <View style={styles.star}>
                    <Icon name="ios-star"  style={{color:"green"}}></Icon>
                    <Icon name="ios-star"  style={{color:"green"}} ></Icon>
                    <Icon name="ios-star"   style={{color:"green"}}></Icon>
                    <Icon name="ios-star-outline"  style={{color:"green"}} ></Icon>
                    <Icon name="ios-star-outline"   style={{color:"green"}}></Icon>
                   
                    </View>
                    <Text style={{color:"green", paddingLeft: 20,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 60,
        width: "120%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        color:"green",
        fontWeight:'700',
        fontSize:10}} onPress={() => navigation.navigate("aglonaScreen")}>VIEW</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' , marginTop:20}}>
                    <Image source={require('../assets/zz.jpg')} style={styles.indo}  >
                    </Image>
                    <View style={{flexDirection:"column"}}>
                    <Text style={styles.zz} > Zamia zz plant</Text>
                    <Text style={styles.zzcash}>$ 275</Text>
                    <View style={styles.zzstar}>
                    <Icon name="ios-star"  style={{color:"green"}}></Icon>
                    <Icon name="ios-star"  style={{color:"green"}} ></Icon>
                    <Icon name="ios-star"   style={{color:"green"}}></Icon>
                    <Icon name="ios-star"  style={{color:"green"}} ></Icon>
                    <Icon name="ios-star-outline"   style={{color:"green"}}></Icon>
                   
                    </View>
                    <Text style={{color:"green", paddingLeft: 20,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 60,
        width: "135%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        color:"green",
        fontWeight:'700',
        fontSize:10}} onPress={() => navigation.navigate("zamiaScreen")}>VIEW</Text>
                    </View>
                </View>
            

                <View style={{ flexDirection: 'row' , marginTop:20}}>
                    <Image source={require('../assets/syno.jpg')} style={styles.indo}  >
                    </Image>
                    <View style={{flexDirection:"column"}}>
                    <Text style={styles.anthurium} >Syngonium Plant</Text>
                    <Text style={styles.cashindoor}>$ 250</Text>
                    <View style={styles.star}>
                    <Icon name="ios-star"  style={{color:"green"}}></Icon>
                    <Icon name="ios-star"  style={{color:"green"}} ></Icon>
                    <Icon name="ios-star"   style={{color:"green"}}></Icon>
                    <Icon name="ios-star-outline"  style={{color:"green"}} ></Icon>
                    <Icon name="ios-star-outline"   style={{color:"green"}}></Icon>
                   
                    </View>
                    <Text style={{color:"green", paddingLeft: 20,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 60,
        width: "120%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        color:"green",
        fontWeight:'700',
        fontSize:10}} onPress={() => navigation.navigate("ThermoScreen")}>VIEW</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' , marginTop:20}}>
                    <Image source={require('../assets/alovera.jpg')} style={styles.indo}  >
                    </Image>
                    <View style={{flexDirection:"column"}}>
                    <Text style={styles.alovera} >  Aloe Vera Mini Plant </Text>
                    <Text style={styles.alocash}>$ 150</Text>
                    <View style={styles.alostar}>
                    <Icon name="ios-star"  style={{color:"green"}}></Icon>
                    <Icon name="ios-star"  style={{color:"green"}} ></Icon>
                    <Icon name="ios-star"   style={{color:"green"}}></Icon>
                    <Icon name="ios-star"  style={{color:"green"}} ></Icon>
                    <Icon name="ios-star-outline"   style={{color:"green"}}></Icon>
                   
                    </View>
                    <Text style={{color:"green", paddingLeft: 20,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 60,
        width: "95%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        color:"green",
        fontWeight:'700',
        fontSize:10}} onPress={() => navigation.navigate("AloveraScreen")}>VIEW</Text>
                    </View>
                </View>
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        backgroundColor: 'white'
    },
    icon: {
        paddingBottom: 10,
    },
    indo: {
        paddingTop: 15,
        marginRight: 0,
        marginLeft: 15,
        height: 140,
        width: "55%",
        backgroundColor: "white",
        borderRadius: 1,
        borderColor:"red",
        marginTop: 20,
        resizeMode: 'contain',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5
    },
    cashindoor: {
        paddingLeft: 15,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 17,
        width: "120%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    alocash: {
        paddingLeft: 15,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 17,
        width: "95%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    cashindoor: {
        paddingLeft: 15,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 17,
        width: "120%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    spidercash: {
        paddingLeft: 15,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 17,
        width: "160%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    zzcash: {
        paddingLeft: 15,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 17,
        width: "135%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    zzstar: {
        paddingLeft: 13,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 25,
        width: "135%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        flexDirection:'row',
        color:"green"


    },
   spiderstar: {
        paddingLeft: 13,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 25,
        width: "160%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        flexDirection:'row',
        color:"green"


    },
    star: {
        paddingLeft: 13,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 25,
        width: "120%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        flexDirection:'row',
        color:"green"


    },
    alostar: {
        paddingLeft: 13,
        marginLeft: 0,
        paddingTop:5,
        fontSize: 10,
        height: 25,
        width: "95%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        flexDirection:'row',
        color:"green"


    },
  
    alovera: {
        paddingLeft: 10,
        marginLeft: 0,
        paddingTop: 20,
        fontSize: 13,
        height: 37,
        width: "95%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderLeftColor: "red",
        marginTop:20,
        
    },
    anthurium: {
        paddingLeft: 10,
        marginLeft: 0,
        paddingTop: 20,
        fontSize: 13,
        height: 37,
        width: "120%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderLeftColor: "red",
        marginTop:20,
        
    },
    zz: {
        paddingLeft: 10,
        marginLeft: 0,
        paddingTop: 20,
        fontSize: 13,
        height: 37,
        width: "135%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderLeftColor: "red",
        marginTop:20,
        
    },
    spider: {
        paddingLeft: 10,
        marginLeft: 0,
        paddingTop: 20,
        fontSize: 13,
        height: 37,
        width: "160%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderLeftColor: "red",
        marginTop:20,
        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 15
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: 5
    },
    text1: {
        paddingRight: 150,
        paddingTop: 10
    },
    text2: {
        backgroundColor: 'white',
        elevation: 5,
        marginRight: 260,
        paddingRight: 5,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'green',
        borderRadius: 5,
        width:"35%"
    },
    text3: {
        backgroundColor: 'white',
        elevation: 5,
        marginRight: 260,
        paddingRight: 5,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'green',
        borderRadius: 5,
        width:"25%"
    },
    textcon: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    image: {
        height: 100,
        width: 120,
    },
    imagecon: {
        top: -150,
        left: 250
    },
    pad: {
        paddingTop: 20
    },
    pad1: {
        paddingTop: 40
    },
    pad2: {
        paddingRight: 40
    },
    res: {
        backgroundColor: 'white',
        elevation: 3,
        paddingLeft: 10
    },
    view: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    viewdir: {
        flexDirection: 'row',
        paddingBottom: 50
    },
    imgres: {
        width: 90,
        height: 90
    },
    imgcon: {
        left: 260,
        top: -80
    },
    swipecon: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    swipeicon: {
        padding: 15,
        backgroundColor: 'pink'
    },
    swipetext: {
        alignItems: 'center'
    },
    si: {
        paddingLeft: 8
    },
    si1: {
        paddingLeft: 25
    },
    direction: {
        flexDirection: 'row',
    },

    directionpad: {
        paddingLeft: 10,
        paddingTop: 0,
        paddingBottom: 20,
        fontWeight: 'bold'
    },
    imgdir: {
        height: 80,
        width: 80,
        marginLeft:10
    },
    imgdir1: {
        height: 50,
        width: 80,

    },
    textdir: {
        width: 100,

    },
    textdir1: {
        width: 100,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center'

    },
    dirtext: {
        paddingRight: 60
    },
    imgswiper: {
        width: 400,
        height: 400
    },

    restext: {
        fontWeight: 'bold'
    },
    imageh: {
        width: 20,
        height: 30,
        paddingLeft: 80,


    },
    touchcon: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 20,
        alignContent: 'center',


    },
    texth: {

        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'green',
        
    },
    texth1: {

        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 1,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#00bfff',
        marginRight:20

    },
    textviewh: {
        flexDirection: 'row',

    },
    textviewth: {
        paddingRight: 20,
        paddingLeft: 160

    },
    header: {
        flexDirection: 'row',
        paddingTop: 30,
        backgroundColor: 'white',
        elevation: 5,
        paddingBottom: 20
    }

});

export default HomeScreen;