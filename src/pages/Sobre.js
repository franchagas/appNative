import React from "react"; 
import { View, Text, StyleSheet,Button } from "react-native";


const Sobre = (props) => {
  return (
    <View>
        <Text>Sobre</Text>
        <Button title="Navegar" 
        onPress={() => props.navigation.navigate("Home")}
        />
    </View>
  );

};

const styles = StyleSheet.create({});

export default Sobre;