import React,{useEffect, useState} from "react";
import { TextInput,Text,View,Button,TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyle } from "../styles/style";
import axios from "axios";
function Addpost({navigation}) {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [user,setUser] = useState('');
    const Submit=()=>{
        // useEffect(()=>{
            axios.post('http://10.0.2.2:8080/api/Apistore',{
                title:title,
                content:content,
                user:user,
            }
            ).then(respose =>{
                console.log(respose.data);
                navigation.push('Home');
            }).catch(error=>{
                console.log(error);
            });
        // },[title, content, user]);
    }
   
    return (
        <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss()}}>
            <View>
                <TextInput placeholder="Title" style={globalStyle.input} onChangeText={val => setTitle(val)}/>
                <TextInput placeholder="Content" style={globalStyle.input} onChangeText={val => setContent(val)}/>
                <TextInput placeholder="User" style={globalStyle.input} onChangeText={val => setUser(val)}/>
                <Button title="Submit" onPress={Submit} />
            </View>
        </TouchableWithoutFeedback>
        
    )

}
export default Addpost;