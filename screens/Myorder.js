import React, { Component } from 'react';
import { Alert,Text, AsyncStorage,Image } from 'react-native';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
//import Colors from '../Colors';
//import Text from '../component/Text';
import Navbar from '../src/components/Navbar';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default class Myorder extends Component{
  constructor(props) {
      super(props);
      this.state = {
        cartItems: []
      };
  }

 componentWillMount() {
    AsyncStorage.getItem("CART", (err, res) => {
      if (!res) this.setState({cartItems: []});
      else this.setState({cartItems: JSON.parse(res)});
    });
  }

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button transparent >
          <Icon name="ios-close" size={38} style={{fontSize: 38}} />
        </Button>
      </Left>
    );
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
          <Navbar left={left} title="MY ORDERS" />
          {this.state.cartItems.length <=0 ?
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="ios-cart" size={38} style={{fontSize: 38, color: '#95a5a6', marginBottom: 7}} />
              
            </View>
            :
            <Content style={{paddingRight: 10}}>
              <List>
                  {this.renderItems()}
              </List>
              <Grid style={{marginTop: 20, marginBottom: 10}}>
                <Col style={{paddingLeft: 10,paddingRight: 5}}>
                  <Button  style={{backgroundColor: "green"}} onPress={()=>this.checkout()}  block iconLeft>
                    <Icon name='ios-card' />
                    <Text style={{color: '#fdfdfd'}}>Continue here</Text>
                  </Button>
                </Col>
                
                
              </Grid>
            </Content>
          }
      </Container>
    );
  }

  
  renderItems() {
    let items = [];
    this.state.cartItems.map((item, i) => {
      items.push(
        <ListItem
          key={i}
          last={this.state.cartItems.length === i+1}
          onPress={() => this.itemClicked(item)}
        >
          <Thumbnail square style={{width: 110, height: 90}} />
          <Body style={{paddingLeft: 10}}>
          
            <Text style={{fontSize: 18}}>
              
              {item.title}
              
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
           Quantity: {item.quantity > 0 ? item.quantity : null}
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>{item.price}</Text>
            
            
          </Body>
          <Right>
            <Button style={{marginLeft: -25}} transparent onPress={() => this.removeItemPressed(item)}>
              <Icon size={30} style={{fontSize: 30, color: '#95a5a6'}} name='ios-remove-circle-outline' />
            </Button>
         
          </Right>
        </ListItem>
        
      );
    });
    return items;
  }

  removeItemPressed(item) {
    Alert.alert(
      'Remove '+item.title,
      'Are you sure you want this item from your cart ?',
      [
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.removeItem(item)},
      ]
    )
  }

  removeItem(itemToRemove) {
    let items = [];
    this.state.cartItems.map((item) => {
      if(JSON.stringify(item) !== JSON.stringify(itemToRemove) )
        items.push(item);
    });
    this.setState({cartItems: items});
    AsyncStorage.setItem("CART",JSON.stringify(items));
  }

  removeAllPressed() {
    Alert.alert(
      'Empty cart',
      'Are you sure you want to empty your cart ?',
      [
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.removeAll()}
      ]
    )
  }

  //checkout() {
   // Alert.alert(
     // 'Checkout ',
      //'We will send order details to your Email id',
      //[
       // {text: 'ok', onPress: () => console.log('No Pressed'), style: 'cancel'}
        //{text: 'Yes', onPress: () => console.log('success'), style: 'cancel'}
      //]
    //)
  //}

  removeAll() {
    this.setState({cartItems: []})
    AsyncStorage.setItem("CART",JSON.stringify([]));
  }

  checkout() {
    this.props.navigation.navigate("indoorScreen",{cartItems:this.state.cartItems});
	//Actions.checkout({cartItems: this.state.cartItems});
	
  }

  //checkout(){
    //props.navigation.navigate('LoadingScreen')
  //}

  itemClicked(item) {
     this.props.navigation.navigate("IndoorScreen",{product:item});
   // Actions.product({product: item});
  }

}

const styles={
  title: {
    
    fontWeight: '100'
  }
};
const items = [
  {id: 2, quantity:1, title: 'Artery Forceps', categoryId: 2, categoryTitle: 'MEN', price: '120$', image: 'https://images-na.ssl-images-amazon.com/images/I/31nYhtQ6v4L._SX342_.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
  {id: 2, quantity:3, title: 'V Neck T-Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
  {id: 10, quantity:1, title: 'Black Leather Hat', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
];
