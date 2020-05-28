import React from 'react'
import { View, Text, Button,PermissionsAndroid, Alert} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import estilo from './estilo';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
 
function anotacoes({navigation}) {
    const pegaImagem=()=>{
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
         Alert.alert('Sucesso!','A imagem foi inserida')
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };
        
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        
            this.setState({
              avatarSource: source,
            });
          }
        });
   
    }
    return (
        <View
        style={estilo.container}
        >
            <Text style={estilo.titulo}>Pagina da imagem das Anotações</Text>
            <Button
            title="Clique aqui para ver tirar uma foto das suas anotações"
            onPress={pegaImagem}
            style={estilo.botao}
            />
        </View>
    )
}
export default anotacoes;
