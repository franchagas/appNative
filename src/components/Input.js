import React,{useState}  from "react"; 
import { View,Text, StyleSheet,TextInput } from "react-native";


const Input = (props) => {

  const [dados,setDados] = useState("");
  return (
    <View>

      <TextInput 
        style={styles.input}
        value={dados}
        onChangeText={(text)=>{
          setDados(text);
        }}
        placeholder={props.placeholder}
        secureTextEntry={props.password} 
      />
    </View>
  );

};

const styles = StyleSheet.create({
  input:{
    fontSize:20,
    borderWidth:2,
    borderColor:"black",
    padding:5,
    margin:10,
  }

});

export default Input;