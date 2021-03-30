import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { FlatList, StyleSheet,Image, Text, View } from 'react-native';

export default class categScreen extends Component  {
  constructor(){
    super()
    this.state = {
      dataSource: []
    }
  }
renderItem = ({item}) =>{
  return(
    
  <View style={{paddingTop:25}}>
      
    
  <View>
    <Text style={{paddingTop:25}}>
      {item.slug}
    </Text>

  </View>
  <View>
    <Text>
      {item.id}
    </Text>
    
  </View>
  </View>
  )
}

componentDidMount(){
  const url = 'http://192.168.1.6:3000/api/category/getcategory'
  fetch(url)
  .then((response) => response.json())
  .then((responsejson) =>{
        this.setState({
          dataSource:responsejson.categoryList
        })
  })
  .catch((error) => {
    console.log(error)
  })
}

render(){
 return (
    <View style={styles.container}>
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
