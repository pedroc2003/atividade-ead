import React from 'react';
import estilo from './../estilo'
import {
    FlatList,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default function arte({navigation}) {
    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>
                Arte
            </Text>
            <Text style={estilo.texto}>
            Arte é a atividade humana ligada a manifestações de ordem estética,
            feita por artistas a partir de percepção, emoções e ideias,
            com o objetivo de estimular esse interesse de consciência
            em um ou mais espectadores, e cada obra de arte possui um significado
            único e diferente.

            </Text>
        </View>
    )
}