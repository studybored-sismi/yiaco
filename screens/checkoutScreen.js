import React, { Component } from 'react';
import { TouchableHighlight, AsyncStorage } from 'react-native';
import { Container, Content, View, Grid, Col, Left, Right, Button, Icon, Text,List, ListItem, Body, Radio, Input, Item } from 'native-base';
import FAIcon  from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
//import Colors from '../Colors';
//import Text from '../component/Text';
import Navbar from '../src/components/Navbar';

export default class checkoutScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        cartItems: [],
        total: 0,
        card: true,
        paypal: false,
        name: '',
        mobileNumber: '',
        pincode:'',
        address:'',
        City:'',
        state:'',
        landmark:''
        
      };
  }
  

  componentWillMount() {
    //this.setState({cartItems: this.props.cartItems});
    AsyncStorage.getItem("CART", (err, res) => {
        if (!res) this.setState({cartItems: []});
        else this.setState({cartItems: JSON.parse(res)});
      });
    }

    

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this.props.navigation.navigate("CartScreen")} transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => this.props.navigation.navigate("SearchScreen")}transparent>
          <Icon name='ios-search-outline' />
        </Button>
      </Right>
    );
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} right={right} title="CHECKOUT" />
        <Content padder>
        <TouchableHighlight onPress={() => this.props.navigation.navigate("LoginScreen")}>
            <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white', paddingTop: 20, paddingBottom: 20}}>
                <Icon name="ios-warning"
                 style={{color:"green", marginRight: 25, position: 'absolute', left: 11, top: 15, borderRightWidth: 1, borderColor: 'rgba(253, 253, 253, 0.2)', paddingRight: 10}}/>
                <Text style={{color: 'green',paddingLeft:20}}>You are not Logged ? click here to login</Text>
            </View>
          </TouchableHighlight>
          <View>
           
         
          </View>
          <Text style={{marginTop: 15, fontSize: 18}}>Your order</Text>
          <View style={styles.invoice}>
            <List>
            {this.renderItems()}
            </List>
            <View style={styles.line} />
            <Grid style={{paddingLeft: 10, paddingRight: 10, marginTop: 7}}>
              <Col>
                <Text style={{fontSize: 18, fontStyle: 'italic'}}>Total</Text>
              </Col>
              <Col>
                <Text style={{textAlign: 'right', fontSize: 18, fontWeight: 'bold'}}>{this.renderTotal()}</Text>
              </Col>
            </Grid>
          </View>
          <View>
            <Text style={{marginTop: 15, marginBottom: 7, fontSize: 18}}>Payment method</Text>
            <ListItem style={{borderWidth: 1, borderColor: 'rgba(149, 165, 166, 0.3)', paddingLeft: 10, marginLeft: 0}}>
              <Text>Pay with card</Text>
              <FAIcon name="cc-mastercard" size={20} color="#c0392b" style={{marginLeft: 7}} />
              <FAIcon name="cc-visa" size={20} color="#2980b9" style={{marginLeft: 2}} />
              <Right>
                <Radio selected={this.state.card} onPress={() => this.setState({card: true, paypal: false})} />
              </Right>
            </ListItem>
            <ListItem style={{borderWidth: 1, borderColor: 'rgba(149, 165, 166, 0.3)', paddingLeft: 10, marginLeft: 0, borderTopWidth: 0}}>
              <Text>Pay with Paypal</Text>
              <FAIcon name="cc-paypal" size={20} color="#34495e" style={{marginLeft: 7}} />
              <Right>
                <Radio selected={this.state.paypal} onPress={() => this.setState({card: false, paypal: true})} />
              </Right>
            </ListItem>
          </View>
          <View style={{marginTop: 10, marginBottom: 10, paddingBottom: 7}}>
            <Button onPress={() => this.props.navigation.navigate("PaymentDetails")} 
            style={{backgroundColor:"green"}} block iconLeft>
              <Icon name='ios-card' />
              <Text style={{color: '#fdfdfd'}}>Proceed to payment</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
renderTotal(){
    let items = [];
    this.state.cartItems.map((item, i) => {
      items.push(
        <ListItem
          key={i}
          style={{marginLeft: 0}}>
               <Text style={{fontSize: 16,fontWeight: 'bold', marginBottom: 10}}>
                   
               {item.price}
            </Text>
            <Right>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>{item.total}</Text>
          </Right>
          </ListItem>
              );
            });
            return items;
          }
 
  renderItems() {
    let items = [];
    this.state.cartItems.map((item, i) => {
      items.push(
        <ListItem
          key={i}
          style={{marginLeft: 0}}
        >
          <Body style={{paddingLeft: 10}}>
            <Text style={{fontSize: 18, paddingRight:15}}>
              
              {item.title}</Text>
              <Text style={{fontSize: 18, paddingRight:15}}>
              quantity:{item.quantity > 0 ? item.quantity+ ""   : null}
            </Text>
     
          </Body>
          <Right>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>{item.price}</Text>
          </Right>
        </ListItem>
      );
    });
    return items;
  }


  checkout() {
    console.log(this.state);
    alert("Order Success");
  }

}

const styles = {
  invoice: {
    paddingLeft: 20,
    paddingRight: 20
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#bdc3c7'
  }
};

