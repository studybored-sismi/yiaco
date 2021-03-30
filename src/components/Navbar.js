import React, { Component } from 'react';
import { Header, Body, Title, Left, Right, Icon } from 'native-base';

// Our custom files and classes import
//import Colors from '../Colors';

export default class Navbar extends Component {
  render() {
    return(
      <Header
        style={{backgroundColor: "green"}}
        backgroundColor="green"
        androidStatusBarColor="green"
        noShadow={true}
        >
        {this.props.left ? this.props.left : <Left style={{flex: 1}} />}
        <Body style={styles.body}>
          <Title style={styles.title}>{this.props.title}</Title>
        </Body>
        {this.props.right ? this.props.right : <Right style={{flex: 1}} />}
      </Header>
    );
  }
}

const styles={
  body: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color:"white",
    fontWeight: '200',
    fontSize:20,
    paddingLeft:0
  }
};
