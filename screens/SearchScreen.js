import React,{useEffect} from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
//import Header from "../src/components/Header";
import SearchBar from "../src/components/SearchBar";
import { items } from "../src/context/data";
import { TouchableOpacity } from "react-native-gesture-handler";

  export default class Search extends React.Component {
   // static navigationOptions = {
     // header: null,
    //};
  
    state = {
      items: [],
      searchedItem: "",
    };
    componentDidMount() {
      this.setState({ items });
    }
  
    componentWillMount() {
      this.startHeaderHeight = 30;
      if (Platform.OS === "android") {
        this.startHeaderHeight = 70 + StatusBar.currentHeight;
      }
    }
  
    searchQuery = val => {
      this.setState({ searchedItem: val });
    };
  
    _executeSearch = val => {
      this.props.navigation.navigate("MainScreen", {
        searchedValue: val,
      });
    };
  
    render() {
      const { searchedItem, items } = this.state;
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" ,paddingTop:1,paddingBottom:170}}>
          <View style={{ flex: 1 ,backgroundColor:"white"}}>
           
              <SearchBar
                onChangeQuery={this.searchQuery}
                onSubmit={this._executeSearch}
                placeholderTextColor={this.props.searchInputPlaceholderTextColor}
                textColor={this.props.searchInputTextColor}
                selectionColor={this.props.searchInputSelectionColor}
                underlineColorAndroid={
                  this.props.searchInputUnderlineColorAndroid ||
                  this.props.headerBackgroundColor
                }
                tintColor={
                  this.props.searchInputTintColor || this.props.headerTintColor
                }
              />
          
            <View style={{ flex: 1 }}>
              {searchedItem !== "" &&
                items.map(item => {
                  if (
                    item.name.toLowerCase().includes(searchedItem.toLowerCase())
                  ) {
                    return (
                      <View
                        key={item.id}
                        style={{
                          borderWidth: 1,
                          borderColor: "lightgray",
                          padding: 15
                        }}
                      >
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate("ThermoScreen", {
                              item,
                            })
                          }
                        >
                           

                          <Text style={{ paddingHorizontal: 15 }} >
                            {item.name} 
                          </Text>

                          <Text style={{ paddingHorizontal: 15 }}>
                           $ {item.price}
                          </Text>
                        </TouchableOpacity>

                        
                             
                      </View>
                    );
                  }
                })}
            </View>
          </View>
        </SafeAreaView>
      );
    }
  }
              