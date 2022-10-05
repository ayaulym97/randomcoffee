import {transform} from '@babel/core';
import React from 'react';
import {Text, Animated, Image, Dimensions} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Card = ({panResponder, rotate, uri, position,nopeOpacity,likeOpacity,}) => {
  const rotateAndTranslate = {
    transform: [
      {
        rotate: rotate,
      },
      ...position.getTranslateTransform(),
    ],
  };
  console.log({uri});
  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        {
          height: SCREEN_HEIGHT - 120,
          width: SCREEN_WIDTH,
          padding: 10,
          position: 'absolute',
        },
        rotateAndTranslate,
      ]}>
        <Animated.View
      style={{
        transform: [{ rotate: "-30deg" }],
        opacity:likeOpacity,
        position: "absolute",
        top: 50,
        left: 40,
        zIndex: 1000
      }}
    >
      <Text
        style={{
          borderWidth: 1,
          borderColor: "green",
          color: "green",
          fontSize: 32,
          fontWeight: "800",
          padding: 10
        }}
      >
        LIKE
      </Text>
    </Animated.View>
    <Animated.View
      style={{
        opacity:nopeOpacity,
        transform: [{ rotate: "30deg" }],
        position: "absolute",
        top: 50,
        right: 40,
        zIndex: 1000
      }}
    >
      <Text
        style={{
          borderWidth: 1,
          borderColor: "red",
          color: "red",
          fontSize: 32,
          fontWeight: "800",
          padding: 10
        }}
      >
        NOPE
      </Text>
    </Animated.View>
      <Image
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: 'cover',
          borderRadius: 20,
        }}
        source={uri}
      />
    </Animated.View>
  );
};
export default Card;
