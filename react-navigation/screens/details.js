// screens/DetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyle } from '../styles/style';

const Details = ({ route,navigation }) => {
    // get variable from another screen
    const { item } = route.params;
  return (
    <View style={globalStyle.container}>
      <Text>Welcome to the Detail Screen!</Text>
      <Text>id post selected is {item.id} </Text>
      <Text>Title selected is {item.title}  </Text>
      <Text>content selected is {item.content}  </Text>
      <Text>date creation selected is {item.created_at}  </Text>
      <Text>post created by {item.name}  </Text>

      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Details;
