import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/header';
import MenuItems from './components/menuItem';
import Addmenu from './components/addmenu';

export default function App() {
  const [menu,setMenu] = useState([
    {name:'Home',key:'1'},
    {name:'Add',key:'2'},
    {name:'Exit',key:'3'},

  ]);
  const pressHandler = (key)=>{
    setMenu((prevMenu)=>{
      return prevMenu.filter(menu => menu.key!= key);
    });
  }
  const submitHandler=(text)=>{
    if (text.length > 0) {
      setMenu((prevMenu)=>{
        return [
          {name : text,key:Math.random().toString()},
          ...prevMenu
        ];
      });  
    }
    else{
      Alert.alert('Warning!','text is required',[
        {text:'Close',onPress:()=> console.log("close")}
      ]);
    }
    
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
          {/* header */}
          <Header></Header>
          <Addmenu submitHandler={submitHandler}></Addmenu>
          <View>
            <FlatList
            data={menu}
            renderItem={({item})=>(
              <MenuItems item={item} pressHandler={pressHandler}/>
            )}
            />
          </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
   
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop : 30,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
