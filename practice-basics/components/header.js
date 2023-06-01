import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
function Header() {
    return (
            <SafeAreaView style= {styles.header}>
                <Text style= {styles.logo}>Home</Text>
            </SafeAreaView>
    
    )
        
}
const styles = StyleSheet.create({
   header : {
    backgroundColor : '#A459D1',
   },
   logo :{
    textAlign : 'center',
    fontSize : 30,
    fontWeight: 'bold',
   }
  });

export default Header