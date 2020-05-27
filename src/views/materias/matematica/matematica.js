import React from 'react'
import estilo from './../estilo'
import {
    FlatList,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default function matematica({navigation}) {
    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>
                Matemática
            </Text>
            <Text style={estilo.texto}>
            Conceito de Matemática. A matemática é conhecida como o estudo das propriedades e relações que envolvem
            figuras abstratas, como números e figuras geométricas, através de notações precisas e raciocínio lógico.

            </Text>
        </View>
    )
}