import React, { useState } from 'react';
import { View,
TextInput,
Text,
TouchableOpacity,
} from "react-native";
import estilo from "./estilo";
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

function login({navigation}) {
  const [IsSign,setIsSign]=useState("false");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
//criar um if caso login e senha vazio

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@IsSign', value)
  } catch (e) {
    // saving error
  }
}

    isLogado=()=>{
     //  try{
        auth()
        .signInWithEmailAndPassword(login,senha)
         .then(() => {
           console.log('Usuario logado com sucesso');
           setIsSign("true");
           storeData(IsSign);
           
           
         })
         .catch(error => {
   console.log(error);
           })
       
     //  }catch(e){
       //  console.log(e);
     //  }
     }
  


//[auth/invalid-email] The email address is badly formatted.
//[auth/wrong-password] The password is invalid or the user does not have a password.

  return (
    <View
      style={estilo.conteiner}>
      <TextInput
      style={estilo.inputUm}
      placeholder="Login"
      onChangeText={text => setLogin(text)}
    >

      </TextInput>
      <TextInput style={estilo.inputDois}
      placeholder="Senha"
      secureTextEntry={true}
      onChangeText={text => setSenha(text)}
      >
      </TextInput>
      {
        
      }
      <TouchableOpacity
      onPress={isLogado}
      >
          <Text
          style={estilo.botao}
          >Entrar</Text>
        </TouchableOpacity>
    </View>

  )

}
export default login;
