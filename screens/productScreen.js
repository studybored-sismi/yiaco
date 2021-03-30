import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, Image, TextInput, TouchableOpacity,FlatList } from 'react-native';
import { Left } from 'native-base';
import { Button } from 'react-native-paper';
import SideMenuDrawer from '../src/components/SideMenuDrawer';
// import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/FontAwesome5'

const ProductScreen = () => {
    const navigation = useNavigation();
    const [Search, setSearch] = useState('');

    const [product, setProduct] = useState([
        { name: 'Golden Ferns', image: require("../assets/Ferns.jpg"),price:'$ 250',description:'Golden Fern is everything you wish for in your Fern – golden green leaves – check; dense, happy perky foliage – check; low maintenance – check; air purifying – check. With beautiful leaves on delicate fronds that grow directly from the soil, the fern is a great addition to any indoor space with sufficient indirect light.', id: '1' },
        { name: 'Crassula Mini Plant ', image: require("../assets/good.jpg"),price:'$ 150',description:'The Crassula Green Mini will be your dream plant kid. One of the easiest houseplants to look after, the Crassula Green Mini boasts a lush foliage which beautifies any room. Also considered lucky as per Feng Shui for its coin like round plump leaves, so go on, bring some green home, the luck just tags along for free.', id: '2' },
        { name: 'Spider plant', image: require("../assets/flowering.jpg"),price:'$ 275', description:'Chlorophytum Spider, also the Spider Plant is an impressive houseplant which is the perfect plant for any beginner. A NASA certified air purifier, its long, green foliage with white variegations look good in both hanging planters and as desktop setups. In favourable conditions, it blooms with small white flowers and its pups grow on hanging stems.',id: '3' },
        { name: 'Christmas Plant', image: require("../assets/christmascactus.jpg"),price:'$ 375',description:'True to their name, these flat leaves succulents bloom right in time for the holiday season and that too profusely. The Christmas cactus is a flat leaved succulent with stunning pink flowers. Easy to grow and highly rewarding, the blooming lasts for several weeks. Even when not in bloom, its leaves are intriguing.', id: '4' },
        { name: 'kalanchoe red plant', image: require("../assets/kalanchi.jpg"),price:'$ 200', description:'Kalanchoe is your answer. The Kalanchoe Red is a perennial succulent with thick leaves and eye-catching crimson-red flowers that grow in clusters through the year. Easy to grow and care for, the kalanchoe will fill your room with colour without much effort. All that it needs is a patch of sunshine.',id: '5' },
        { name: 'Poinsettia plant', image: require("../assets/poinsettiane.jpg"),price:'$ 90',description:' The Christmas plant carries all the festive cheer and traditional colours. The Poinsettia Plant instantly lifts up any room it is in and is the best Christmas décor money can buy. Colourful, with bright red leaves surrounding the buds amongst dark green leaves, the Poinsettias are the happiest and brightest in the months of December and January.', id: '6' },
        { name: 'Aloe Vera Mini Plant', image: require("../assets/alovera.jpg"), price:'$ 270',description:'The mini aloe vera has all the beauty of its bigger sister and none of the space requirements. With its green fleshy leaves that grow from the centre of the leaf cluster, its great addition to tight spaces. An air purifier that is more famous for its medicinal uses, it has been called the ‘plant of eternity’ through civilizations.',id: '7' },
        { name: 'Syngonium Plant', image: require("../assets/pixie.jpg"),price:'$ 90',description:'The Syngonium Pink Neon is simply the cutest ornamental creeper you will have met. Its adorable pink heart shaped foliage makes him look like an artificial plant. Ideal for both tabletops and floor planters, with proper care, it can grow up to 3 to 6 feet. ', id: '8' },
        { name: 'Aralia Golden Plant', image: require("../assets/ariy.jpg"),price:'$ 250', description:'Aralia Golden will not only beautify your home and satiate your green thumb, but will also eliminate formaldehyde, benzene, trichloroethylene, and carbon dioxide from your home so that you only breathe pure air and stay healthy and happy. The Aralia Golden plant will also help control the humidity of the room she is in, as a thank you for the love.',id: '9' },
        { name: 'Boxwood Buxus', image: require("../assets/boxwood.jpg"), price:'$ 200',description:'Boxwood Buxux plant is a landscaper’s favourites. These bushy evergreen plants compliment any plant and are perfect to be used as borders and hedges. They get along with everyone and compliment most plants in your garden. The bright and glossy foliage generally stays stable throughout the year, ensuring that your garden looks happy and healthy year-round.',id: '10' },
        { name: 'Peperomia Plant', image: require("../assets/peperomiagreen.jpg"),price:'$ 400',description:'The Peperomia Green is a great houseplant. It is low maintenance, looks beautiful AND purifies air. An ornamental succulent with fleshy, thick green leaves that adapts and grows very well in a variety of conditions. If cared for, this one will be by your side for the long run. Add a pop of green to your home by taking home this beauty.', id: '11' },
        { name: 'Crassula Ovata Plant', image: require("../assets/pg-cras.jpg"),price:'$ 150',description:'The Crassula Ovata, commonly known as the Jade Plant, is an excellent plant featuring waxy, fleshy green leaves that can be grown in both indoor and outdoor spaces. This resilient plant is an easy to grow succulent that is famed to bring luck to your home. It can be pruned to any shape you want. Its low maintenance nature makes it ideal for both homes and offices.', id: '12' },
        { name: 'Zamia Zz Plant', image: require("../assets/zz.jpg"),price:'$ 550',description:'Topping the list of indestructible houseplants is the Zamioculcas Zamiifolia more popularly known as the ZZ plant. This plant is loved for his easy going and non-demanding nature. The wide, dark, glossy leaves instantly add life to any interior and he will be a happy trooper in the darkest corners of your home.', id: '13' },
        { name: 'Ficus Plant', image: require("../assets/ficus.jpg"),price:'$ 350',description:'Ficus Microcarpa or the Chinese banyan or Indian Laurel makes for a very good home plant for people looking to dabble in bonsai. It is a hardy houseplant with glossy and oval green leaves and can adjust to a wide range of growing conditions. Plant it in a beautiful shallow pot and prune to shape its growth and the joy of seeing it take shape will be yours.', id: '14' },
    ]);
    return (
       
            <View>
                
                
                <FlatList
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    data={product}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('ProductDetailsScreen',{name:item})} >
                            <View style={styles.itemf}>
                                <Image style={styles.imagef} source={item.image} />
                                <Text >{item.name}</Text>
                                <Text>{item.price}</Text>
                            </View>
                        </TouchableOpacity>

                    )}
                />
            </View>
      

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
        color: '#00bfff',
        borderRadius: 5
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
        paddingBottom: 100
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
        paddingTop: 5,
        paddingBottom: 20,
        fontWeight: 'bold'
    },
    imgdir: {
        height: 50,
        width: 80
    },
    textdir: {
        width: 100,

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
    texth: {
        
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#00bfff'
    },
    texth1: {
        
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#00bfff'

    },
    textviewh: {
        flexDirection: 'row',

    },
    textviewth: {
     paddingRight:20,
     paddingLeft:160

    },
    header:{
        flexDirection:'row',
        paddingTop:30,
        backgroundColor:'white',
        elevation:5,
        paddingBottom:20
    },
    itemf: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: 18,
        marginVertical: 20,
        elevation: 10,
        width: 160,
        alignItems: 'center'
    },
    imagef: {
        width: 50,
        height: 50,
    },

});

export default ProductScreen;