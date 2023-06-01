import React from "react";
import { StyleSheet,View,Text,Button } from "react-native";
import { globalStyle } from "../styles/style";
function AboutUs({navigation})
{
    return (
        <View style={globalStyle.container}>
            <Text>
            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
            </Text>
            <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
        </View>
        
    )
}
export default AboutUs;