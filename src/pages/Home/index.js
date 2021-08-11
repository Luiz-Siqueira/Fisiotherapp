import * as React from 'react';
import { Text, View,StyleSheet,StatusBar,Image,TouchableOpacity } from 'react-native';


export default function Home({ navigation }) {
  return (
      <View style={styles.container}>
          <StatusBar/>
        <Image
            style={styles.tinyLogo}
            source={require('../../assets/person.png')}
        />
        <Text style={styles.name}>Olá, Luiz!</Text>
        <Text style={styles.textCall}>Vamos iniciar o seu tratamento ?  :)</Text>

        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Exercise')}
        >
            <Text style={styles.txtButton}>Iniciar tratamento</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    name:{
        fontSize:30,
        textAlign:'center',
        marginBottom:30,
        color:'#333333',
    },
    textCall:{
        fontSize:25,
        textAlign:'center',
        color:'#4f4f4f',
    },
    button:{
        backgroundColor:'#5b3fff',
        width:'70%',
        height:40,
        marginTop:60,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    txtButton:{
        fontSize:20,
        color:'#ffff'
    }
    
  });