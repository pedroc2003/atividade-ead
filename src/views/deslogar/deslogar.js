import React from 'react'
import {View,Text,Button, Alert} from 'react-native';
import estilo from './estilo'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';


const logout=()=>{
    auth()
      .signOut()
      .then(() => Alert.alert('Uhull','Você foi deslogado'));
  }

function deslogar(){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={estilo.texto}>Para se deslogar clique aqui</Text>
        <Button style={estilo.texto}
        title="Deslogar"
        onPress={logout}
        />
        
      </View>
    )
}

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

export default deslogar;