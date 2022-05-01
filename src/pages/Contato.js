import React from "react"; 
import { View, Text, StyleSheet, Button } from "react-native";
import  Input  from '../components/Input';


const Contato = (props) => {
  return (
    <View>
        <Text>Contato</Text>
        <Input placeholder="BaseOk"/>
        <Input placeholder="Senha" password={true}/>

        <Button title="Navegar" 
        onPress={() => props.navigation.navigate("Home")}
        />
    </View>
  );

};

const styles = StyleSheet.create({});

export default Contato;