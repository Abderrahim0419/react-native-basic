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
    // input:{
    //     margin:10,
    //     borderWidth: 1,
    //     width:300,
    //     borderColor : "#000000",
    //     borderStyle: "solid",
    // },
    load:{
        paddingTop : 30,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_login: {
        // flex: 1,
        backgroundColor: '#ffffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        margin:20,
        marginTop: 40,
        borderRadius:20,
        
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#8999C8',
        // justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center',
      },
      input: {
        width: '100%',
        height: 40,
        // borderColor: 'gray',
        // borderWidth: 1,
        // marginBottom: 16,
        paddingHorizontal: 8,
      },
      btn :{
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingVertical: 12,
        marginBottom:20,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#064c92',
      },
      title_btn:{
        color : "#ffffffff"
      },
      text_password:{
        color : 'blue',
      },
      flex_row:{
        flexDirection:"row",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom:10,
      },
      card:{
        backgroundColor: 'yellow',
        // flexDirection: "column",
        fontSize : 20,
        width : 300,
        marginTop :30,
        margin:10,
        padding : 10,
        borderWidth:1,
        borderColor:"black",
        borderStyle : 'dashed',
        
    }

     
});