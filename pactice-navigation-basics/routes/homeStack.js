import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/home';
import DetailScreen from '../screens/details';
import AboutUs from "../screens/about";
function Routes(){
    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
             <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="About" component={AboutUs} />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{ title: 'Details first App' }}
                />
            </Drawer.Navigator>
            {/* <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'First App',
                    headerStyle : {
                        alignItems : 'center',
                    }
                }}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{ title: 'Details first App' }}
                />
            </Stack.Navigator> */}
        </NavigationContainer>
    )
}
export default Routes;
