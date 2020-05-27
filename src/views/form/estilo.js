import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    conteiner:{
backgroundColor:'black',
flex:1,

    },
    inputUm:{

        backgroundColor:'white',
        height:75,
        fontSize:20,
        justifyContent:"center",
        marginBottom:"2%"
    },
    inputDois:{

        backgroundColor:'white',
        height:150,
        justifyContent:"center"
    },
    botao:{
        height:30,
        fontSize:20,
        color:'white',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        backgroundColor:'green',
        marginTop:10
        
    }
})
export default estilo;
