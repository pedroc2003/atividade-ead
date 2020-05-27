import React from 'react'
import estilo from './../estilo'
import {
    FlatList,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default function literatura({navigation}) {
    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>
                Literatura
            </Text>
            <Text style={estilo.texto}>
            Literatura é uma palavra com origem no termo em latim littera,
            que significa letra. A literatura remete para um conjunto de habilidades
            de ler e escrever de forma correta. Existem diversas definições e tipos de literatura,
            pode ser uma arte, uma profissão, um conjunto de produções, e etc.

            </Text>
        </View>
    )
}