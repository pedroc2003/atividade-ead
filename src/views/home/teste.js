import React from 'react'
import { View,Text, Button,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {artes,biologia,edFisica,fisica,matematica,portugues,quimica} from '../materias/index'
import estilo from './estilo';

const Stack = createStackNavigator();


function TesteScreen({navigation}){
    return(
        <ScrollView>
            <TouchableOpacity>
            <Text style={estilo.item}
            onPress={()=>navigation.navigate('Matematica')}
            >Matematica</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Portugues')}
            >                
            <Text style={estilo.item}>Portugues</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Biologia')}
            >                
            <Text style={estilo.item}>Biologia</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Artes')}
            >                
            <Text style={estilo.item}>Artes</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Educacao Fisica')}
            >                
            <Text style={estilo.item}>Educação fisica</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Quimica')}
            >                
            <Text style={estilo.item}>Quimica</Text>
            </TouchableOpacity>
            
        </ScrollView>

    )
}
function teste() {
    return (
        <>
<Stack.Navigator >
        <Stack.Screen name="Teste" component={TesteScreen}
        options={{ title: 'Materias'}}/>
        <Stack.Screen name="Artes" component={artes} />
        <Stack.Screen name="Biologia" component={biologia} />
        <Stack.Screen name="Educacao Fisica" component={edFisica} />
        <Stack.Screen name="Fisica" component={fisica} />
        <Stack.Screen name="Matematica" component={matematica} />
        <Stack.Screen name="Portugues" component={portugues} />
        <Stack.Screen name="Quimica" component={quimica} />
      </Stack.Navigator>
        </>
    )
}

export default teste
