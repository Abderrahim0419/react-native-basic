import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './routes/homeStack';



export default function App() {
  // const Stack = createStackNavigator();
  // const Drawer = createDrawerNavigator();
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name="About" component={AboutUs} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    
  <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
