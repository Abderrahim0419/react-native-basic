import React from "react";
import { StyleSheet,View, TextInput,Text, Button,FlatList,TouchableOpacity,Image,Modal,Pressable } from 'react-native';
import { globalStyle } from '../styles/style';
import { Formik } from 'formik';
function addUser (){
    return (
        <View>
        <Formik
              initialValues={{id:'',name:''}}
              onSubmit={(values)=>{

              }}
            >
              {(props)=>(
                <View>
                  <TextInput style={globalStyle.input}
                    placeholder="Add id"
                    onChangeText={props.handleChange('id')}  
                    value = {props.values.id}       
                    />
                    <TextInput style={globalStyle.input}
                    onChangeText={props.handleChange('name')}  
                    value = {props.values.name}       
                    />
                    <Button title="Submit" onPress={handleSubmit} />
                </View>

              )}
               
            </Formik>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
    </View>
    )
    
}
export default addUser;