import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from '../screens/home';
import DetailScreen from '../screens/details';
import AboutUs from "../screens/about";
function Routes_drw(){
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <SlideMenu {...props} />}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="About" component={AboutUs} />
            </Drawer.Navigator>
            
        </NavigationContainer>
    )
}
export default Routes_drw;
