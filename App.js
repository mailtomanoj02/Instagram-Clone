import React, {useState} from 'react';
import {
  Animated,
  TouchableOpacity,
  Text,
  View,
  PanResponder,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'

const App = props => {
  return (
    <View>
      <Text style={{fontFamily:'Lobster-Regular'}}>Hello world</Text>
      <Ionic name='play' style={{fontSize:30}}/>

    </View>
  );
};

export default App;
