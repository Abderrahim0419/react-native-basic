import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
function Addmenu({submitHandler}) {
    const [text ,setText]= useState('');
    return(
        <TouchableOpacity>
            <View style={styles.view}>
                <TextInput style={styles.input}
                placeholder="Add name"
                onChangeText={(val) => setText('val')}         
                />
            </View>
            <View>
            <Button onPress={()=>submitHandler(text)} title="add new menu"/>
            </View>
        </TouchableOpacity>
    )
    
}
const styles = StyleSheet.create({
    view :{
        padding:15,
    },
    input:{
        margin:10,
        borderWidth: 1,
        width:300,
        borderColor : "#000000",
        borderStyle: "solid",
    },
});
export default Addmenu