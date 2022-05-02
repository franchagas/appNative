import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Contato  from './src/pages/Contato';
import  Sobre  from './src/pages/Sobre';
import  Home  from './src/pages/Home';
import  Contador  from './src/pages/Contador';
import  Formulario  from './src/pages/Formulario';
import  Input  from './src/components/Input';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Home" 
          component={Home} 
          options={{
            title: 'AppNative',
            headerStyle: {
              backgroundColor: '#008ba3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }}
       
       />
       <Stack.Screen name="Sobre" component={Sobre} />
       <Stack.Screen name="Contato" component={Contato} />
       <Stack.Screen name="Contador" component={Contador} />
       <Stack.Screen name="Input" component={Input} />
       <Stack.Screen name="Formulario" component={Formulario} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};


export default App;