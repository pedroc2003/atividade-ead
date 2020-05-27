import React from 'react'
import estilo from './../estilo'
import {
    FlatList,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default function fisica({navigation}) {
    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>
                Física
            </Text>
            <Text style={estilo.texto}>
            Física é um termo com origem no Grego “physis” que significa “natureza”.
            É a ciência que estuda as leis que regem os fenômenos naturais suscetíveis de
            serem examinados pela observação experimentação, procurando enquadrá-los em esquemas lógicos.

            </Text>
        </View>
    )
}