import React from 'react'
import {View,Text,Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {respostas,anotacoes,login,form,deslogar} from './../'
import AsyncStorage from '@react-native-community/async-storage';
import estilo from './estilo'

getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@IsSign')
    
    if(value !== null) {
      console.log(value)
    }
  } catch(e) {
    // error reading value
  }
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen(){
    return(
        <View style={estilo.container}>
        <Text style={estilo.texto}>Bem vindo à sua Home, daqui você pode acessar todas as suas telas.</Text>
        
      </View>
    )
}

function home({navigation}) {
      return (
        <>
      <Drawer.Navigator initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Respostas" component={respostas} />
        <Drawer.Screen name="Anotações" component={anotacoes} />
        <Drawer.Screen name="Login" component={login} />
        <Drawer.Screen name="Deslogar" component={deslogar} />
        <Drawer.Screen name="Formulario" component={form} />
      </Drawer.Navigator>    
      </>
    );
  }
export default home;
