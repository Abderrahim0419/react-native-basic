import React  from 'react';
import { StatusBar }from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [name , setName] = useState('hamid');
  const [employe,setEmploye]= useState([
    {name:'hamid',function:'devloper',dateAniv:'01-02-2030',key:'1'},
    {name:'marwan',function:'devloper',dateAniv:'01-02-2030',key:'2'},
    {name:'reda',function:'devloper',dateAniv:'01-03-2030',key:'3'},
    {name:'anwar',function:'devloper',dateAniv:'01-02-2030',key:'4'},
    {name:'amin',function:'devloper',dateAniv:'01-02-2030',key:'5'},
    {name:'ayman',function:'devloper',dateAniv:'01-02-2030',key:'6'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'7'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'8'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'9'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'10'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'11'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'71'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'722'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'73'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'74'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'75'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'67'},
    {name:'badr',function:'devloper',dateAniv:'01-02-2030',key:'657'},

  ]);
  const [user,setUser]=useState([
    {nom:'h1',id:'1'},
    {nom:'h2',id:'2'},
    {nom:'h3',id:'3'},
    {nom:'h4',id:'4'},
    {nom:'h5',id:'5'},
    {nom:'h6',id:'6'},

  ]);
  const clickHandler=()=>{
    setName('hamid hamid')
    // setEmploye({name:'hassan hamid',function : 'fullstack devloper' , dateAniv:'10-10-1990'})

  }
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    
    <View style={styles.container}>
      <SafeAreaView style={styles.card}>
        <Text>ddd</Text>
      </SafeAreaView>
      <View>
        <Text style={styles.txt}>Hello world!</Text>
      </View>
      <Text>Enter name :</Text>
      <TextInput multiline style={styles.input} placeholder='enter name' 
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter age :</Text>
      <TextInput keyboardType='numeric' style={styles.input} placeholder='enter age' 
        
      />
      <Text>My name is {name} </Text>
      <Text>hello my name is {employe.name} im a {employe.function} . my birthday is {employe.dateAniv}</Text>
      <Button title='change name' onPress={clickHandler} />
      <StatusBar style="auto" />
      <FlatList numColumns={3}
        data={user}
        renderItem={({item}) =>
        <TouchableOpacity style={styles.button} onPress={onPress}>
         <Text style={styles.card}>{item.nom} {count}</Text>
         </TouchableOpacity>

        }
        keyExtractor={item => item.id}
      />
     
      <ScrollView>
        {employe.map((item)=>{
          return (
            
              <View key={item.key}>
                <Text style={styles.card}>{item.name}</Text>
              </View>
            
          )
        })}
        </ScrollView>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding :10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt : {
    fontWeight : 'bold',
    color : 'yellow',
    backgroundColor : 'purple'
  },
  input:{
    borderWidth: 1,
    width:200,
    borderColor : "red",
  },
  card:{
      backgroundColor: 'yellow',
      fontSize : 20,
      width : 300,
      marginTop :30,
      margin:10,
      padding : 10,
      
  }
});
