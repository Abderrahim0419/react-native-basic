import React from "react";
import { StyleSheet,View,Text,Button } from "react-native";
import { globalStyle } from "../styles/style";
function Home ({navigation}){
    return (
        <View style= {globalStyle.container}>
            <Text>Home View</Text>
            <Button title="go about" onPress={()=> navigation.push('About')} />
            <Button title="go details" onPress={()=> navigation.push('Details')} />

        </View>
    )
}
export default Home;