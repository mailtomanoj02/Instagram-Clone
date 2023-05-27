import React, { useState } from "react";
import { Animated, TouchableOpacity, Text, View, PanResponder } from "react-native";

const App = props => {
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant:()=>{
        pan.setOffset({
          x:pan.x._value,
          y:pan.y._value
        })
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  )[0];
  console.log(panResponder.panHandlers)
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Animated.View style={[{height:100,width:100,borderRadius:50,backgroundColor:'red'},pan.getLayout()]} {...panResponder.panHandlers}/>
    </View>
  )
}


export default App
