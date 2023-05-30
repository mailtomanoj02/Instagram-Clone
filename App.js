import React from 'react';
import {Text, View} from 'react-native';
import AppNavigation from './src/AppNavigation/AppNavigation';

const App = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <AppNavigation />
    </View>
  );
};

export default App;
