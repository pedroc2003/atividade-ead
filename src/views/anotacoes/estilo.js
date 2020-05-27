import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:'2%',
        backgroundColor: '#E5B163'
      },
      materia: {
        backgroundColor: '#649454',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 25,
      },
      titulo: {
        fontSize: 35,
        textAlign: 'center'
      },
      texto:{
        fontFamily: 'Montserrat',
        fontSize: 15
      },
        botao:{
            marginTop:15,
            backgroundColor:'yellow',
            fontSize:22,
            height:40,
            width: 40,
            color:'white',
            textAlign:'center',
            alignItems:'center',
            alignContent:'center',
            justifyContent:'center',
        }
      
})
export default estilo;