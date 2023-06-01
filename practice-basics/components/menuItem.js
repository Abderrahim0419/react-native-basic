import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
function MenuItems({item,pressHandler}) {
    return (
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.items}>
            <MaterialIcons name="delete" size={24} color="red" />
            <Text>{item.name}</Text>
            </View>
           
        </TouchableOpacity>
    
    )
        
}
const styles = StyleSheet.create({
   items :{
     padding:5,
     margin:5,
     backgroundColor:"yellow",
     fontWeight: "bold",
     borderColor:"#000000",
     borderStyle: "dashed",
     flexDirection: 'row',
     borderRadius:15,
     borderWidth : 1,
   }
  });

export default MenuItems