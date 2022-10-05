
import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Foods = [
  { id: "1", uri: require('./assets/1.jpg') },
  { id: "2", uri: require('./assets/2.jpg') },
  { id: "3", uri: require('./assets/3.jpg') },
  { id: "4", uri: require('./assets/4.jpg') },
  { id: "5", uri: require('./assets/5.jpg') },
]
const Card = ()=>{
    return(<View style={{ flex: 1 }}>
        <View style={{ height: 60 }} />
        <View style={{ flex: 1 }}>
          <Animated.View
            style={[
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10
              }
            ]}
          >
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20
              }}
              source={Users[0].uri}
            />
          </Animated.View>
        </View>
        <View style={{ height: 60 }} />
      </View>)
}