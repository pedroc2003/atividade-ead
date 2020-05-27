import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,Button } from "react-native";
import estilo from "./estilo";
import services from './../../config/services'
function form() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  estouTevendo=()=>{
  services(titulo,descricao);
  }

  return (
    <View
      style={estilo.conteiner}>
      <TextInput
        style={estilo.inputUm}
        placeholder="Titulo"
        onChangeText={text => setTitulo(text)}
      >

      </TextInput>
      <TextInput
        style={estilo.inputDois}
        placeholder="descrição"
        onChangeText={text => setDescricao(text)}
      >
      </TextInput>
      <TouchableOpacity
      onPress={estouTevendo}
      >
          <Text
          style={estilo.botao}
          >Enviar</Text>
        </TouchableOpacity>
    </View>

  )

}
export default form;