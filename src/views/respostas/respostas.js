import React from 'react'
import { Text, View} from 'react-native'
import estilo from './estilo'

function respostas() {
    return (
        <View style={estilo.container}>
        <Text style={estilo.titulo}>Tela de respostas</Text>
        </View>
    )
}
export default respostas;