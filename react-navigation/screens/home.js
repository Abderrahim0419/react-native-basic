import React, { useEffect, useState } from "react";
import { StyleSheet,View,Text,Button,FlatList, TouchableOpacity } from "react-native";
import { globalStyle } from "../styles/style";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
function Home ({navigation}){
    const [post,setPost]= useState([]);
   useEffect(() => {
    const interval = setInterval(() => {
        axios.get('http://10.0.2.2:8080/api/getPost')
          .then(response => {
            /*console.log(response.data);*/
            setPost(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    },1000)
    return () => clearInterval(interval);
      }, []);
    
    return (
        <View style= {globalStyle.container}>
            <Text>Home View</Text>
            <Button title="go about" onPress={()=> navigation.navigate('About')} />
            <Button title="go details" onPress={()=> navigation.navigate('Details')} />
            <Button title="go Login" onPress={()=> navigation.navigate('Login')} />
            <Button title="go Slide" onPress={()=> navigation.navigate('Slider')} />
            <Button title="Add post" onPress={()=> navigation.navigate('Addpost')} />

            <Text>Posts</Text>
            <ScrollView>

                <FlatList
                data={post}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Details',{item})}>
                        <View style={globalStyle.card}>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                        
                    
                )}
                />
            </ScrollView>



        </View>
    )
}
export default Home;