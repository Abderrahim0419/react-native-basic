// components/SlideMenu.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/style';

const SlideMenu = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={globalStyle.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text style={globalStyle.menuItem}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('About')}>
        <Text style={globalStyle.menuItem}>AboutUS</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigateToScreen('Settings')}>
        <Text style={styles.menuItem}>Settings</Text>
      </TouchableOpacity> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   menuItem: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

export default SlideMenu;
