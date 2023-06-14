import React, { useState } from "react";
import { StyleSheet,View,Text, Button } from "react-native";
import { globalStyle } from "../styles/style";
import { TextInput } from "react-native-gesture-handler";

function About ({navigation}){
    const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
    // Implement your login logic here
    console.log('Login:', email, password);
};

const handleRegister = () => {
    // Implement your registration logic here
    console.log('Register:', email, password);
};
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Register" onPress={handleRegister} />
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
    },
  });
export default About;