import React, { Component ,props} from 'react';
import { Image, Dimensions, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import 
{ View, Container, Content, Button, Left, Right,Text, Icon, Picker, Item, Grid, Col,Root, Toast, Text as NBText }
 from 'native-base';
//import { Actions } from 'react-native-router-flux';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Our custom files and classes import
//import Colors from '../Colors';
//import Text from '../component/Text';
import Navbar from '../src/components/Navbar';
import {default as ProductComponent} from '../src/components/Product';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default class Golden extends Component{

  constructor(props) {
    super(props);
    this.state = {
      product: {},
      activeSlide: 0,
      quantity: 1,
      selectedSize: ''
    };
  }

  componentWillMount() {
    //get the product with id of this.props.product.id from your server
    this.setState({product: dummyProduct});
  }



  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button  transparent>
          <Icon name='ios-arrow-back' onPress={() => this.props.navigation.navigate("indoorScreen")}  />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button  transparent>
          <Icon name='ios-search-outline' onPress={() => this.props.navigation.navigate("SearchScreen")}/>
        </Button>
        <Button   transparent>
          <Icon name='ios-cart' onPress={() => this.props.navigation.navigate("CartScreen")} />
        </Button>
      </Right>
    );
    return(
      <Root>
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} right={right}  />
        <Content>
        
            <Carousel
              ref={(carousel) => { this._carousel = carousel; }}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              enableSnap={true}

              data={this.state.product.images}
              renderItem={this.renderImages}
            >
            </Carousel>
            <Pagination
              dotsLength={this.state.product.images.length}
              activeDotIndex={this.state.activeSlide}
              containerStyle={{ backgroundColor: 'transparent',paddingTop: 0, paddingBottom: 0, marginTop: -15 }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          <View style={{backgroundColor: '#fdfdfd', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, alignItems: 'center'}}>
            <Grid>
              <Col size={3}>
                <Text style={{fontSize: 18,marginBottom:15}}>{this.state.product.title}</Text>
              </Col>
              <Col>
                <Text style={{fontSize: 20, fontWeight: 'bold',paddingLeft:30}}>{this.state.product.price}</Text>
              </Col>
            </Grid>
            
          
            <Grid>
              <Col>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text>Quantity:</Text>
                </View>
              </Col>
              <Col size={3}>
                <View style={{flex: 1, flexDirection: 'row',color:"green"}}>
                <Button color="white" icon light  onPress={() => this.setState({ quantity: this.state.quantity > 1 ? this.state.quantity - 1 : 1 })} >
                    <Icon name='ios-remove-outline' size={10} color="black" />
                  </Button>
                  <View 
                  style={{flex: 4,
                   justifyContent: 'center', alignItems: 'center', paddingLeft: 0, paddingRight: 20,paddingTop:10}}>
                    <Text style={{fontSize: 18}}>{this.state.quantity}</Text>
                  </View>
                  <Button icon light onPress={() => this.setState({ quantity: this.state.quantity + 1 })}>
                    <Icon name='ios-add' size={10} color="black" />
                  </Button>
                </View>
              </Col>
            </Grid>
            <Grid style={{marginTop: 15}}>
              <Col size={3}>
                <Button block onPress={this.addToCart.bind(this)} style={{backgroundColor: "green"}}>
                  <Text style={{color: "#fdfdfd", marginLeft: 5}}>Add to cart</Text>
                </Button>
              </Col>
              <Col>
              <Button block onPress={this.addToWishlist.bind(this)} icon transparent style={{backgroundColor: '#fdfdfd'}}>
                <Icon style={{color: "green"}} name='ios-heart' />
              </Button>
              </Col>
            </Grid>
            <View style={{marginTop: 15, padding: 10, borderWidth: 1, borderRadius: 3, borderColor: 'rgba(149, 165, 166, 0.3)'}}>
              <Text style={{marginBottom: 5}}>Description</Text>
              <View style={{width: 50, height: 1, backgroundColor: 'rgba(44, 62, 80, 0.5)', marginLeft: 7, marginBottom: 10}} />
              <NBText note>
                {this.state.product.description}
              </NBText>
            </View>
          </View>
          
        </Content>
      </Container>
      </Root>
    );
  }

  renderImages({item, index}) {
    return (
      <TouchableWithoutFeedback key={index} onPress={() => this.openGallery(index)}>
        <Image source={require("../assets/drac.jpg")} style={{width: Dimensions.get('window').width, height: 300}} resizeMode="cover"/>
      </TouchableWithoutFeedback>
    );
  }

 
  



 

  openGallery(pos) {
    Actions.imageGallery({images: this.state.product.images, position: pos});
  }

  addToCart() {
    var product = this.state.product;
    
    
    product['quantity'] = this.state.quantity;
    AsyncStorage.getItem("CART", (err, res) => {
      if(!res) AsyncStorage.setItem("CART",JSON.stringify([product]));
      else {
        var items = JSON.parse(res);
        items.push(product);
        AsyncStorage.setItem("CART",JSON.stringify(items));
      }
     Toast.show({
        text: 'Product added to your cart !',
        position: 'bottom',
        type: 'success',
        buttonText: 'Dismiss',
        duration: 3000,
        
      });
    });
  }

  addToWishlist() {
    var product = this.state.product;
    var success = true;
    AsyncStorage.getItem("WISHLIST", (err, res) => {
      if(!res) AsyncStorage.setItem("WISHLIST",JSON.stringify([product]));
      else {
        var items = JSON.parse(res);
        if(this.search(items, product)) {
          success = false
        }
        else {
          items.push(product);
          AsyncStorage.setItem("WISHLIST",JSON.stringify(items));
        }
      }
      if(success) {
        Toast.show({
          text: 'Product added to your wishlist !',
          position: 'bottom',
          type: 'success',
          buttonText: 'Dismiss',
          duration: 3000,
          color:"blue"
        });
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
    for(var i=0; i<array.length; i++)
      if(JSON.stringify(array[i]) === JSON.stringify(object))
        return true;
    return false;
  }

}

const dummyProduct = {
  id: 2,
  title: 'DRACAENA GOLDEN PLANT',
  description: "Whether it is called the Milky Plant for its milk coloured variegations or because the spots are like stars in the Milky Way galaxy, is a valid question. What is obvious is that it is an epic houseplant suited for every space and even the most underconfident plant parents. Get them home, water them, and do not worry about them and watch them grow.",
  image:  'https://media.ugaoo.com/catalog/product/cache/81d2f56800d33f099d2b369affd8e374/d/r/dracaenagoldenmilky_45_1.png',
  images: [
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg'
  ],
  price: '150$',


  
 
};
  

 
  


