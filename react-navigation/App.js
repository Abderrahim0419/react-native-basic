import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/home';
import About from './screens/about';
import Details from './screens/details';
import { globalStyle } from './styles/style';
export default function App() {
  const Stack = createStackNavigator();
  const Tabs = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  // const homeStack = createStackNavigator();
  // const aboutStack = createStackNavigator();

  const HomeStackScreen = () => (
      <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{title:'Accueil'}} />
          <Stack.Screen name='Details' component={Details} options={{title:'Details'}} />
      </Stack.Navigator>
  );

  const AboutStackScreen = ()=>(
    <Stack.Navigator>
        <Stack.Screen name='About' component={About} options={{title:'Qui sommes nous'}} />
        <Stack.Screen name='Home' component={Home} options={{title:'Accueil'}} />

    </Stack.Navigator>
  );
  const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name='Home' component={HomeStackScreen}  options={{title:'Accueil',headerShown: false}} />
        <Tabs.Screen name='About' component={AboutStackScreen} options={{title:'Qui sommes nous',headerShown: false}}/>
    </Tabs.Navigator>
  )
  return (
   <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={TabsScreen}  options={{title:'Accueil'}} />
          <Drawer.Screen name='About' component={AboutStackScreen} options={{title:'Qui sommes nous'}}/>
        </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{title:'Accueil'}} />
        <Stack.Screen name='About' component={About} options={{title:'Qui sommes nous'}} />
      </Stack.Navigator> */}
      
   </NavigationContainer>
  );
}


