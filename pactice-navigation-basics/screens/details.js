// screens/DetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyle } from '../styles/style';

const DetailScreen = ({ route,navigation }) => {
    // get variable from another screen
    const { item } = route.params;
  return (
    <View style={globalStyle.container}>
      <Text>Welcome to the Detail Screen!</Text>
      <Text>name selected is {item.name}</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default DetailScreen;
