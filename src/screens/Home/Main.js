import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components';

const Main = ({navigation}) => {
    const handleNaivgation =()=>{
navigation.navigate('NextStep')
    }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,borderWidth:1}}>
      <Text>
        Try editing me! 🎉
      </Text>
      <Button title={"Press"} />
    </View>
  );
}

export default Main;