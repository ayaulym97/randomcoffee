import React from "react";
import {  Text, TouchableOpacity } from "react-native";
const Button = ({
    title,
    onPress
})=>{
    return(
        <TouchableOpacity style={{backgroundColor:'red',width:"80%",alignSelf:'center',marginVertical:20}} onPress={onPress}>
        <Text style={{color:'white',padding:10,alignSelf:'center'}}>{title}</Text>
      </TouchableOpacity>
    )
}
export default Button