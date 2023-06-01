import { StyleSheet } from "react-native";
export const globalStyle = StyleSheet.create({
    txt : {
        color: 'green',
        fontWeight:'bold',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    menuItem: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    container : {
        padding:10,
        margin : 20,
       
    },
    card : {
        padding:5,
        margin : 5,
        backgroundColor:"yellow",
        fontWeight: "bold",
        borderColor:"#000000",
        borderStyle: "dashed",
        // flexDirection: 'row',
        borderRadius:15,
        borderWidth : 1,
    },
    input:{
        margin:10,
        borderWidth: 1,
        width:300,
        borderColor : "#000000",
        borderStyle: "solid",
    },
     
});