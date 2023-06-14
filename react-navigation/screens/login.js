import React ,{ useState } from "react";
import { globalStyle } from "../styles/style";
import { SafeAreaView,Text,View,Keyboard,Image,TextInput,Button,TouchableWithoutFeedback,Pressable,ScrollView  } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

function Login({navigation}) {
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
        <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss()}}>
            <ScrollView
            // contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            >
                <SafeAreaView>
                <View style={globalStyle.container_login}>
                        <Image source={require('../assets/images/logo.png')} style={{width: 200, height: 200}} />
                        <Text style={globalStyle.title}>Se connecter</Text>
                        <View style={globalStyle.flex_row}>
                            <MaterialIcons name="email" size={20} style={{marginTop:10}} color="black" />
                            <TextInput
                                style={globalStyle.input}
                                placeholder="Email"
                                onChangeText={text => setEmail(text)}
                                value={email}
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={globalStyle.flex_row}>
                            <MaterialIcons name="lock" size={20} style={{marginTop:10}} color="black" />
                            <TextInput
                                style={globalStyle.input}
                                placeholder="Password"
                                onChangeText={text => setPassword(text)}
                                value={password}
                                secureTextEntry
                            />
                        </View>
                       
                            <Pressable style={globalStyle.btn} onPress={handleLogin}>
                                <Text style={globalStyle.title_btn}>Connexion</Text>
                            </Pressable> 
                            <Pressable onPress={handleLogin}>
                                <Text style={globalStyle.text_password}>Mot de passe oublié?</Text>
                            </Pressable> 
                        
                        {/* <Button  title="Login" style={globalStyle.btn}  />
                        <Button title="Register" onPress={handleRegister} /> */}
                        
                    
                </View>
            </SafeAreaView>
            </ScrollView>
            
            
        </TouchableWithoutFeedback>
       
    );    
}
export default Login;