import React, { Component } from 'react';
import { Alert,Text,Image,AsyncStorage } from 'react-native';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';


// Our custom files and classes import
//import Colors from '../Colors';
//import Text from '../component/Text';
import Navbar from '../src/components/Navbar';


export default class Cart extends React.Component{
 
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
    const { navigation } = this.props;
    var left = (
      <Left style={{flex:1}}>
           <View style={{flexDirection:"row"}}>
        <Image source={require('../assets/logo.jpg')} style={{width:65,height:25,marginTop:10}} />
        
        </View>
      </Left>
    );
    
    return(
      <Container style={{backgroundColor: '#f5f5f5'}}>
          <Navbar left={left} title="MY CART" />
          
          {this.state.cartItems.length <=0 ?
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="ios-cart" size={38} style={{fontSize: 38, color: '#95a5a6', marginBottom: 7}} />
              <Text style={{color: '#95a5a6'}}>Your cart is empty</Text>
            </View>
            :
            <Content style={{paddingRight: 10}}>
              <List>
                  {this.renderItems()}
              </List>
              <Grid style={{marginTop: 20, marginBottom: 10}}>
                <Col style={{paddingLeft: 10,paddingRight: 5}}>
                  <Button onPress={() => this.props.navigation.navigate("AddScreen")} style={{backgroundColor: "#00bfff"}} block iconLeft>
                    <Icon name='ios-card' />
                    <Text style={{color: '#fdfdfd'}}>Checkout</Text>
                  </Button>
                </Col>
                <Col style={{paddingLeft: 5, paddingRight: 10}}>
                  <Button onPress={() => this.removeAllPressed()} style={{borderWidth: 1, borderColor:"#00bfff"}} 
                  block iconRight transparent>
                    <Text style={{color: "#00bfff"}}>Emtpy Cart</Text>
                    <Icon style={{color: "#00bfff"}} name='ios-trash-outline' />
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
              Quantity:{item.quantity > 0? item.quantity : null}</Text>
            

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

  removeAll() {
    this.setState({cartItems: []})
    AsyncStorage.setItem("CART",JSON.stringify([]));
  }

  //checkout() {
	//Actions.checkout({cartItems: this.state.cartItems});
	
  //}

  //checkout(){
    //props.navigation.navigate('LoadingScreen')
  //}

  itemClicked(item) {
    Actions.product({product: item});
  }

}

const styles={
  title: {
    
    fontWeight: '100'
  }
};