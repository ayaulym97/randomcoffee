import React from 'react';
import {FlatList,Text, Animated,Dimensions, Image, View, PanResponder} from 'react-native';
import {Button} from '../../components';
import Card from '../../components/Card';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Main = ({navigation}) => {
  const position = React.useRef(new Animated.ValueXY()).current;
  rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 5, 0, SCREEN_WIDTH / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp'
})
  const [currentIndex, setcurrentIndex] = React.useState(1);
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
          position.setValue({x: gestureState.dx, y: gestureState.dy});
        },
        onPanResponderRelease: (evt, gestureState) => {
          if (gestureState.dx > 120) {
            Animated.spring(this.position, {
              toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
            }).start(() => {
              this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                this.position.setValue({ x: 0, y: 0 })
              })
            })
          } else if (gestureState.dx < -120) {
            Animated.spring(this.position, {
              toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
            }).start(() => {
              this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                this.position.setValue({ x: 0, y: 0 })
              })
            })
          }}
      }),
    [],
  );

  const handleNaivgation = () => {
    navigation.navigate('NextStep');
  };

  const Foods = [
    {id: '1', uri: require('../../img/nature.jpg')},
    {id: '2', uri: require('../../img/nature.jpg')},
    {id: '3', uri: require('../../img/nature.jpg')},
  ];
  const likeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp'
 })
 const nopeOpacity = position.x.interpolate({
  inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
  outputRange: [1, 0, 0],
  extrapolate: 'clamp'
})
  const renderFoods = ()=>{
    console.log("CURRENT",currentIndex)
    Foods.map((item, i) => {
      if (i < currentIndex) {
        return <Text>ff</Text>;
      } else if (i == currentIndex) {
        return (
          <Animated.View
            {...PanResponder.panHandlers}
            key={i}
            style={[
            { transform: position.getTranslateTransform() },
            {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10,
                position: "absolute",
                borderWidth:1
            }
          ]}
          >
             <Animated.View
      style={{
        transform: [{ rotate: "-30deg" }],
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
                resizeMode: "cover",
                borderRadius: 20
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={i}
            style={{
              height: SCREEN_HEIGHT - 120,
              width: SCREEN_WIDTH,
              padding: 10,
              position: "absolute",
                 borderWidth:1
            }}
          >
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      }
    });
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1,  }}>
        {/* {renderFoods()} */}
        <FlatList
          data={Foods}
          renderItem={(item, index) => {
            // if (currentIndex < index) {
            //   return null;
            // }
            return(
              <Card
              key={index}
              panResponder={panResponder}
              uri={item.item.uri}
              position={position}
              rotate = {rotate}
              likeOpacity={likeOpacity}
              nopeOpacity={nopeOpacity}
            />
            )
     
            
          }}
        />
      </View>
    </View>
  );
};

export default Main;
