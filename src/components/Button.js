import React from "react";
import {  Text, TouchableOpacity } from "react-native";
const Button = ({
    title,
    onPress,
    style
})=>{
    return(
        <TouchableOpacity style={[{backgroundColor:'red',justifyContent:'center',alignItems:'center'},style]} onPress={onPress}>
        <Text style={{color:'white',padding:10,alignSelf:'center'}}>{title}</Text>
      </TouchableOpacity>
    )
}
export default Button