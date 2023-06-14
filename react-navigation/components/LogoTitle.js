// screens/DetailScreen.js
import React from 'react';
import { View, Text, Button,TouchableOpacity,Image } from 'react-native';
import { globalStyle } from '../styles/style';

const LogoTitle = ({ route,navigation }) => {
    // get variable from another screen
    // const { item } = route.params;
    
  return (
    <View style={{ alignItems: 'center' }}>
      {/* Your logo component */}
      <TouchableOpacity onPress={()=>navigation.push('Home')}>
        <Image source={require('../assets/images/logo.png')} style={{ width: 100, height: 100 }} />
      </TouchableOpacity>
    </View>
  );
};

export default LogoTitle;
