import React from "react";
import {  Text, TouchableOpacity } from "react-native";
const Card = ({
    title
})=>{
    return(
        <View style={{backgroundColor:'red',width:"80%",alignSelf:'center',marginVertical:20}} onPress={()=>handleNaivgation()}>
        <Text style={{color:'white',padding:10,alignSelf:'center'}}>{title}</Text>
      </View>
    )
}
export default Card;