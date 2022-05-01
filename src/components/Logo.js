import React from "react"; 
import { View, StyleSheet, Image } from "react-native";


const Logo = () => {
  return (
    <View>
        <Image
          style={{
            width:200,
            height:200,
            borderColor:"blue",
            alignSelf:"center"
          }}
          resizeMode="cover"
          source={require("../../assets/Logo.png")}
        />
    </View>
  );

};

const styles = StyleSheet.create({});

export default Logo;