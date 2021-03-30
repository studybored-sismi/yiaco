
import React, { useState } from 'react';
import { TextInput, View, Button,Text} from 'react-native';


export default searchsam=()=>{
    const [city,setCity] = useState('')
    return (
        <View style={{flex:1}}>
            <Text name="SearchScreen" />
            <TextInput label="cityname"
            value={city}
            onChangeText={(text)=>setCity(text)}/>

        <Button title="click"></Button>
        </View>
    );
}