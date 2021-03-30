import React, { Component } from 'react';
import { Alert, Text, AsyncStorage, Image } from 'react-native';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Navbar from '../src/components/Navbar';


export default class CartDetails extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      cartItems: []
    };
  }

  componentWillMount() {
    this.setState({ item: this.props.route.params.item })
    AsyncStorage.getItem("CART", (err, res) => {
      if (!res) this.setState({ cartItems: [] });
      else this.setState({ cartItems: JSON.parse(res) });
    });
  }



  render() {
    const { navigation } = this.props;
    var left = (
      <Left >
        <View style={styles.header}>
          <View>
            
            
          </View>
        </View>
      </Left>
    );
  

    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
       
        {this.state.cartItems.length <= 0 ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="ios-cart" size={38} style={{ fontSize: 38, color: '#95a5a6', marginBottom: 7 }} />
            <Text style={{ color: '#95a5a6' }}>Your cart is empty</Text>
          </View>
          :
          <Content style={{ paddingRight: 10 }}>
            <List>
              {this.renderItems()}
            </List>
            <Grid style={{ marginTop: 20, marginBottom: 10 }}>
              <Col style={{ paddingLeft: 10, paddingRight: 5 }}>
                <Button onPress={(item) => this.props.navigation.navigate("AddScreen",{item:this.state.item})}
                 style={{ backgroundColor: "green" }} block iconLeft>
                  <Icon name='ios-card' />
                  <Text style={{ color: '#fdfdfd',marginLeft:25 }}>Checkout</Text>
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
          last={this.state.cartItems.length === i + 1}
          onPress={() => this.itemClicked(item)}
        >
          {/* <Thumbnail square style={{width: 110, height: 90}} /> */}
          <Body >
            <Image style={{ width: 80, height: 80, }} source={item.image}></Image>
            <Text style={{ fontSize: 18, paddingTop: 20 }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, paddingTop: 20 }}>{item.price}</Text>
          </Body>
          <Left style={{ paddingTop: 100, paddingLeft: 50 }} >
            <Text >Quantity: {item.quantity >= 1 ? item.quantity : null}</Text>
          </Left>

          <Right>
            <Button style={{ marginLeft: -25 }} transparent onPress={() => this.removeItemPressed(item)}>
              <Icon size={30} style={{ fontSize: 30, color: '#95a5a6' }} name='ios-remove-circle-outline' />
            </Button>
          </Right>
        </ListItem>
      );
    });
    return items;
  }

  removeItemPressed(item) {
    Alert.alert(
      'Remove ' + item.title,
      'Are you sure you want this item from your cart ?',
      [
        { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => this.removeItem(item) },
      ]
    )
  }

  removeItem(itemToRemove) {
    let items = [];
    this.state.cartItems.map((item) => {
      if (JSON.stringify(item) !== JSON.stringify(itemToRemove))
        items.push(item);
    });
    this.setState({ cartItems: items });
    AsyncStorage.setItem("CART", JSON.stringify(items));
  }

  removeAllPressed() {
    Alert.alert(
      'Empty cart',
      'Are you sure you want to empty your cart ?',
      [
        { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => this.removeAll() }
      ]
    )
  }

  removeAll() {
    this.setState({ cartItems: [] })
    AsyncStorage.setItem("CART", JSON.stringify([]));
  }

  //checkout() {
  //Actions.checkout({cartItems: this.state.cartItems});

  //}

  //checkout(){
  //props.navigation.navigate('LoadingScreen')
  //}

  itemClicked(item) {
    Actions.product({ product: item });
  }

}

const styles = {
  title: {

    fontWeight: '100'
  },
  header: {
    flexDirection: 'row',
    paddingTop: 30,
    backgroundColor: 'white',
    elevation: 5,
    paddingBottom: 20,
    // paddingLeft:50,
    paddingRight: 1000,
    left: -10

  },
  imageh: {
    width: 120,
    height: 30,
    paddingLeft: 80,


  }
};