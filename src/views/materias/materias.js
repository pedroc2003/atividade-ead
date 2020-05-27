import React from 'react'
import { View,Text, Button,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {arte,gramatica,fisica,matematica,literatura} from './index'
import estilo from './estilo';

const Stack = createStackNavigator();


function telaMaterias({navigation}){
    return(
        <ScrollView style={estilo.container}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Arte')}
            >                
            <Text style={estilo.materia}>Arte</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate('Fisica')}
            >                
            <Text style={estilo.materia}>Física</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate('Gramatica')}
            >                
            <Text style={estilo.materia}>Gramática</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate('Literatura')}
            >                
            <Text style={estilo.materia}>Literatura</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={estilo.materia}
            onPress={()=>navigation.navigate('Matematica')}
            >Matemática</Text>
            </TouchableOpacity>
            
        </ScrollView>

    )
}
function materias() {
    return (
        <>
<Stack.Navigator >
        <Stack.Screen name="Materias" component={telaMaterias}
        options={{ title: 'Materias'}}/>
        <Stack.Screen name="Arte" component={arte} />
        <Stack.Screen name="Fisica" component={fisica} />
        <Stack.Screen name="Gramatica" component={gramatica} />
        <Stack.Screen name="Literatura" component={literatura} />
        <Stack.Screen name="Matematica" component={matematica} />
      </Stack.Navigator>
        </>
    )
}

export default materias
