import React, {useState} from "react"; 
import { View, Text, StyleSheet, Button } from "react-native";


const Contador = (props) => {

const [valor, setValor] = useState(0);

  return (
    <View>
      <Text>Contador</Text>
      <Text style={styles.contador}>{valor}</Text>
<Button
title="Aumentar (+)"
onPress = {()=>{setValor(valor + 1); console.log(valor)}}
/>

<Button
title="Diminuir (-)"
onPress = {()=>{setValor(valor - 1); console.log(valor)}}
/>


    </View>
  );

};

const styles = StyleSheet.create({
  contador:{
    fontSize:30,
    textAlign:"center",
    alignItems:"center"
  }

});

export default Contador;