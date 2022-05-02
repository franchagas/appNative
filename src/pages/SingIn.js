import React from "react"; 
import { View, Text, StyleSheet, Button } from "react-native";
import  Input  from '../components/Input';


const SingIn = (props) => {
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

export default SingIn;

// import React from "react"; 
// import {View,Text,StyleSheet,TextInput,Button} from 'react-native-paper';


// const SingIn = (props) => {
//   return (
//     <View>
//       <Text>Login</Text>
//     </View>
//   );

// };

// const styles = StyleSheet.create({});

// export default SingIn;