import React, { Component, props } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { View, Container, Content, Button, Left, Right, Text, Icon, Picker, Item, Grid, Col, Root, Toast, Text as NBText }
  from 'native-base';
//import { Actions } from 'react-native-router-flux';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Our custom files and classes import
//import Colors from '../Colors';
//import Text from '../component/Text';
import Navbar from '../src/components/Navbar';
import { default as ProductComponent } from '../src/components/Product';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
import { useNavigation } from '@react-navigation/native';

export default class ProductDetailsScreen extends Component {

  constructor(props) {
    super(props);
    // console.log(this.props.route.params.name)

    this.state = {
      product: {},
      activeSlide: 0,
      quantity: 1,
      selectedSize: '',
      item: ''
    };
  }

  componentWillMount() {
    //get the product with id of this.props.product.id from your server
    // this.setState({product: dummyProduct});
    this.setState({ item: this.props.route.params.name })

  }



  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Button transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Button transparent>
          <Icon name='ios-search-outline' />
        </Button>

      </Right>
    );
    return (
      <Root>
        <Container style={{ backgroundColor: '#fdfdfd' }}>
          <Navbar left={left} right={right} />
          <Content>
           
            <View style={{ backgroundColor: '#fdfdfd', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12 }}>
              <View style={{flexDirection:'row'}}>
              <Image style={{ width: 220, height: 220 }} source={this.state.item.image} />
              <Button block onPress={this.addToWishlist.bind(this)} icon transparent style={{ backgroundColor: '#fdfdfd' }}>
                <Icon name="ios-heart"  style={{paddingLeft:60,fontSize:30,color:"green"}}></Icon>
                </Button>
                </View>
              <View style={{ flexDirection: 'row', paddingTop: 30, paddingBottom: 30 }}>
                <Text style={{ fontSize: 18, paddingRight: 130 }}>{this.state.item.name}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.state.item.price}</Text>
               
              
              </View>

              <View style={{ flexDirection: 'row' }} >
                <View style={{ flex: 1, justifyContent: 'center', marginTop: 10 }}>
                  <Text>Quantity:</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <Button color="white" onPress={() => this.setState({ quantity: this.state.quantity > 1 ? this.state.quantity - 1 : 1 })} >
                    <Icon name='ios-remove-outline' size={10} color="black" />
                  </Button>

                  <View
                    style={{

                      justifyContent: 'center', alignItems: 'center', paddingLeft: 30, paddingRight: 30
                    }}>
                    <Text style={{ fontSize: 18 }}>{this.state.quantity}</Text>
                  </View>
                  <Button onPress={() => this.setState({ quantity: this.state.quantity + 1 })}>
                    <Icon name='ios-add' size={10} color="black" />
                  </Button>
                </View>
              </View>
              <View style={{ marginTop: 15, padding: 10, borderWidth: 1, borderRadius: 3, borderColor: 'rgba(149, 165, 166, 0.3)' }}>
                <Text style={{ marginBottom: 5 }}>Description</Text>
                <View style={{ width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10 }} />
                <NBText note>
                  {this.state.item.description}
                </NBText>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={{ alignSelf: 'center', paddingTop: 20,paddingLeft:15,paddingRight:20 ,width:"55%"}}>
              <Button block onPress={this.addToCart.bind(this)} style={{ backgroundColor: "green" }}>
                <Text style={{ color: "#fdfdfd" }}>Add to cart</Text>
              </Button>
            </View>
            <View style={{ alignSelf: 'center', paddingTop: 20 ,width:"40%"}}>
              <Button block onPress={()=>this.props.navigation.navigate("CartDetails",{item:this.state.item})} 
              style={{ backgroundColor: "green" }}>
                <Text style={{ color: "#fdfdfd" }}>Buy Now</Text>
              </Button>
            </View>
            </View>
            <Col>
            
            </Col>



          </Content>
        </Container>
      </Root>
    );
  }

  renderImages({ item, index }) {
    return (
      <TouchableWithoutFeedback key={index} onPress={() => this.openGallery(index)}>
        <Image source={require('../assets/download.jpg')} style={{ width: 350, height: 200, resizeMode: "contain", marginTop: 20, marginBottom: 10 }} resizeMode="cover" />
      </TouchableWithoutFeedback>
    );
  }

  openGallery(pos) {
    Actions.imageGallery({ images: this.state.product.images, position: pos });
  }

  addToCart() {
    var product = this.state.item;


    product['quantity'] = this.state.quantity;
    AsyncStorage.getItem("CART", (err, res) => {
      if (!res) AsyncStorage.setItem("CART", JSON.stringify([product]));
      else {
        var items = JSON.parse(res);
        items.push(product);
        AsyncStorage.setItem("CART", JSON.stringify(items));
      }
      Toast.show({
        text: 'Product added to your cart !',
        position: 'bottom',
        type: 'success',
        buttonText: 'Dismiss',
        duration: 3000,
        style: {
          backgroundColor: "green"
        }
      });
      this.props.navigation.navigate("CartScreen",{item:this.state.item})
    });
  }

  addToWishlist() {
    var product = this.state.product;
    var success = true;
    AsyncStorage.getItem("WISHLIST", (err, res) => {
      if (!res) AsyncStorage.setItem("WISHLIST", JSON.stringify([product]));
      else {
        var items = JSON.parse(res);
        if (this.search(items, product)) {
          success = false
        }
        else {
          items.push(product);
          AsyncStorage.setItem("WISHLIST", JSON.stringify(items));
        }
      }
      if (success) {
        Toast.show({
          text: 'Product added to your wishlist !',
          position: 'bottom',
          type: 'success',
          buttonText: 'Dismiss',
          duration: 3000
        });
        this.props.navigation.navigate("wishlist",{item:this.state.item})
      }
      else {
        Toast.show({
          text: 'This product already exist in your wishlist !',
          position: 'bottom',
          type: 'danger',
          buttonText: 'Dismiss',
          duration: 3000
        });
      }
    });
  }

  search(array, object) {
    for (var i = 0; i < array.length; i++)
      if (JSON.stringify(array[i]) === JSON.stringify(object))
        return true;
    return false;
  }

}

const dummyProduct = {
  id: 2,
  title: 'ARTERY FORCEPS',
  description: "Artery forceps are available at Surgical Holdings for grasping and compressing an artery to control bleeding, typically using handles that can be held in place by a locking mechanism.",
  image: '',
  images: [
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg'
  ],
  price: '120$',


  category: 'MAN',

};
const dummyProduct2 = {
  id: 2,
  title: 'ARTERY FORCEPS',
  description: "Artery forceps are available at Surgical Holdings for grasping and compressing an artery to control bleeding, typically using handles that can be held in place by a locking mechanism.",
  image: '',
  images: [
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg'
  ],
  price: '120$',


  category: 'MAN',

};