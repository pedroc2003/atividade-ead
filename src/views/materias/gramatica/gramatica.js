import React from 'react'
import estilo from './../estilo'
import {
    FlatList,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default function gramatica({navigation}) {
    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>
                Gramática
            </Text>
            <Text style={estilo.texto}>
            Conceito de gramática. ... O conceito provém do termo
            latim grammatĭca e faz referência, por outro lado, à arte de falar e escrever
            uma língua de forma correta. A gramática é portanto o conjunto de regras e princípios
            que regem o uso de uma linguagem determinada (cada linguagem tem a sua própria gramática).

            </Text>
        </View>
    )
}