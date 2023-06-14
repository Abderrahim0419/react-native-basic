// screens/HomeScreen.js
import React ,{useState} from 'react';
import { StyleSheet,View, TextInput,Text, Button,FlatList,TouchableOpacity,Image,Modal,Pressable } from 'react-native';
import { globalStyle } from '../styles/style';
import { Formik } from 'formik';
const HomeScreen = ({ navigation }) => {
    const [modalVisible,setModalVisible]= useState(false);
    const [user,setUser]=useState([
        {id:1,name:'hamid'},
        {id:2,name:'hamid2'},
        {id:3,name:'hamid3'},
        {id:4,name:'hamid4'},

    ]);
    const handleSubmit = (values) => {
      setUser((user)=>{
        return[{id : Math.random().toString(),
          name: values.name
        }];
      });
       values.id = Math.random().toString();
       values.name = 
      console.log(values);
    };
  return (
    <View style={globalStyle.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
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
          
          
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show</Text>
      </Pressable>
      <FlatList
        data={user}
        renderItem={({item})=>(
            <TouchableOpacity style={globalStyle.card} onPress={() => navigation.navigate('Detail',{item})}>
                <Text style={globalStyle.txt}>{item.name}</Text>
            </TouchableOpacity>
        )}
    />
      <Button
        title="Go to Detail Screen"
        onPress={() => navigation.navigate('Detail')}
      />
      <Image source={require('../images/1.jpg')} />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>

  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default HomeScreen;
