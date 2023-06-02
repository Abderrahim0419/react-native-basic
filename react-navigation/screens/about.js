import React from "react";
import { StyleSheet,View,Text, Button } from "react-native";
import { globalStyle } from "../styles/style";
function About ({navigation}){
    return (
        <View style= {globalStyle.container}>
            <Text>about View</Text>
            <Button title="go home" onPress={()=> navigation.push('Home')}/>
        </View>
    )
}
export default About;