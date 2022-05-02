import React from "react"; 
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object({
    username: yup.string().required("Informe o seu usuário"),
    email:yup.string().email("Informe um e-mail válido").required("Digite o e-mail"),
    password:yup.string().min(3,"A senha deve ter no mínimo 3 dígitos").required("Senha requerida")
})

const Formulario = (props) => {

    const { control, handleSubmit, watch, formState: { errors } } = useForm({ 
        resolver:yupResolver(schema)
    });

    function handleSignIn(data){
        console.log(data);
    }

  return (
    <View style={styles.view}>
          <Text style={styles.title}>CADASTRO DE USUÁRIO</Text>

    <Controller
        control={control}
        name="username"
        render={({ field:{onChange,onBlur,value}}) => (
            <TextInput 
            style={[styles.input,{ 
                borderWidth: errors.username && 1,
                borderColor: errors.username && '#c41c00',
            }
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Nome do usuário"
            />
        )}
    />
   {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}  

    <Controller
        control={control}
        name="email"
        render={({ field:{onChange,onBlur,value}}) => (
            <TextInput 
            style={[styles.input,{ 
                borderWidth: errors.email && 1,
                borderColor: errors.email && '#c41c00',
            }
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite seu email "
            />
        )}
    />
    {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}  


    <Controller
        control={control}
        name="password"
        render={({ field:{onChange,onBlur,value}}) => (
            <TextInput 
            style={[styles.input,{ 
                borderWidth: errors.password && 1,
                borderColor: errors.password && '#c41c00',
            }
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            />
        )}
    />
   {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}  


    <TouchableOpacity onPress={handleSubmit(handleSignIn)} style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
    </TouchableOpacity>

    </View>
  );

};

const styles = StyleSheet.create({
    view :{
        flex:1,
        borderWidth:3,
        padding:7,
        backgroundColor:"#62efff"
      },
      title:{
        marginTop:20,
        marginBottom:20,
        fontSize:20,
        color:"black",
        fontWeight:"600",
        textAlign:"center"
      },

      text:{
        fontSize:20,
        color:"black",
        fontWeight:"600",
        textAlign:"center"
      },
      input:{
          backgroundColor:"#fff",
          margin:3,
          padding:7,
      },
      button:{
        borderRadius:5,   
        backgroundColor:"#0069c0",
        color:"#fff",
        margin:3,
        padding:15,
      
    },
    buttonText:{
        fontSize:16,
        color:"#fff",
        fontWeight:"600",
        textAlign:"center",
    },
    labelError:{
        alignSelf:"flex-start",
        fontSize:14,
        marginLeft:5,
        marginBottom:8,
        color:"#c41c00",
    },

    error:{
        borderWidth:1,
        borderColor:"#c41c00",
    },

});

export default Formulario;