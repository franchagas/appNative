import React, { useContext } from "react"; 
import { View, Text, StyleSheet, Button } from "react-native";
import  Logo  from "../components/Logo";
import Teste from "../components/Teste";
import { Provider , Context} from "../context/dataContext";


const Home = (props) => {

  const data = useContext(Context);
  return (
    <View style={styles.view}>
         <Logo/>
         <Text>{data}</Text>
        <Text style={styles.text}>Home inicio com data</Text>
    
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


        <Button title="Formulario" 
         style={styles.buton}
        onPress={() => props.navigation.navigate("Formulario")}
        />

        <Button title="Login" 
         style={styles.buton}
        onPress={() => props.navigation.navigate("SingIn")}
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