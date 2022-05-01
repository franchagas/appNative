import React from "react"; 
import { View, Text, StyleSheet, Button } from "react-native";
import  Logo  from '../components/Logo';


const Home = (props) => {
  return (
    <View style={styles.view}>
         <Logo/>
        <Text style={styles.text}>Home</Text>
        <Button title="Sobre" 
        style={styles.button}
        onPress={() => props.navigation.navigate("Sobre")}
        />

  
        <Button title="Contato" 
         style={styles.buton}
        onPress={() => props.navigation.navigate("Contato")}
        />

        <Button title="Contador" 
         style={styles.buton}
        onPress={() => props.navigation.navigate("Contador")}
        />


    </View>
  );

};

const styles = StyleSheet.create({
  view :{
    flex:1,
    borderWidth:3,
    backgroundColor:"#62efff"
  },
  text:{
    fontSize:14,
    color:"blue",
    fontWeight:"600",
    textAlign:"center"
  },
  buton:{
    backgroundColor:"red",
    fontSize:10
  }

});

export default Home;