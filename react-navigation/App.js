import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, TouchableOpacity,ActivityIndicator,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/home';
import About from './screens/about';
import Details from './screens/details';
import { globalStyle } from './styles/style';
import Login from './screens/login';
import Slider from './screens/slider';
import Addpost from './screens/addpost';

export default function App() {
  const Stack = createStackNavigator();
  const Tabs = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  // const homeStack = createStackNavigator();
  // const aboutStack = createStackNavigator();
  const LogoTitle = ({navigation}) => (
    <View style={{ alignItems: 'center' }}>
      {/* Your logo component */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('./assets/images/logo.png')} style={{ width: 100, height: 100 }} />
      </TouchableOpacity>
    </View>
  );
  const HomeStackScreen = () => (
      <Stack.Navigator screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTitle: props => <LogoTitle {...props} navigation={navigation} />,
      })}>
          <Stack.Screen name='Home' component={Home} options={{title:'Accueil',animationEnabled:false,headerShown: false}} />
          <Stack.Screen name='Details' component={Details} options={{title:'Details',animationEnabled:false,headerShown: false}} />
          <Stack.Screen name='Login' component={Login} options={{title:'Login',animationEnabled:false,headerShown: false}} />
          <Stack.Screen name='Slider' component={Slider} options={{title:'Slide',animationEnabled:false,headerShown: false}} />
          <Stack.Screen name='Addpost' component={Addpost} options={{title:'Add post',animationEnabled:false}} />



      </Stack.Navigator>
  );

  const AboutStackScreen = ()=>(
    <Stack.Navigator>
        <Stack.Screen name='About' component={About} options={{title:'Qui sommes nous', animationEnabled:false}} />
        <Stack.Screen name='Home' component={Home} options={{title:'Accueil', animationEnabled:false}} />

    </Stack.Navigator>
  );
  const TabsScreen = () => (
    <Tabs.Navigator screenOptions={({ navigation }) => ({
      headerTitleAlign: 'center',
      headerTitle: props => <LogoTitle {...props} navigation={navigation} />,
    })}>
        <Tabs.Screen name='Home' component={HomeStackScreen}  options={{title:'Accueil',headerShown: false}} />
        <Tabs.Screen name='About' component={AboutStackScreen} options={{title:'Qui sommes nous',headerShown: false}}/>
    </Tabs.Navigator>
  )
  const [Loading,setLoading] = useState(true);
  const [user,setUser] = useState("dddd");
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1000);
  },[]);
  if (Loading) {
    return <ActivityIndicator style={globalStyle.load} size="large" color="#00ff00" />;
  }
  return (
    <NavigationContainer>
      {user ? (<Drawer.Navigator screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTitle: props => <LogoTitle {...props} navigation={navigation} />,
      })}>
        <Drawer.Screen name='Home' component={TabsScreen}  options={{title:'Accueil'}} />
          <Drawer.Screen name='About' component={AboutStackScreen} options={{title:'Qui sommes nous'}}/>
        </Drawer.Navigator>) : 
      ( <Stack.Navigator screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTitle: props => <LogoTitle {...props} navigation={navigation} />,
      })}>
        <Stack.Screen name='Home' component={Home} options={{title:'Accueil'}} />
        <Stack.Screen name='About' component={About} options={{title:'Qui sommes nous'}} />
        <Stack.Screen name='Login' component={Login} options={{title:'Qui sommes nous'}} />

      </Stack.Navigator>) }
      
    </NavigationContainer>
  );
}


