import * as React from 'react';
import { Text, View,StyleSheet, Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';



export default function Exercise({ navigation }) {
  return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.iconBack}>
            <Icon name="chevron-left" size={25} onPress={() => navigation.navigate('Home')}/>
          </View>
        </View>

        <View style={styles.containerVideo}>
          <Image
            style={styles.ImageExample}
            source={require('../../assets/hand.png')}
          />
        </View>

        <View style={styles.instrucao}>
          <Text style={styles.instrucaoTxt}>Fechar e abrir as mãos</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Feito!</Text>
        </TouchableOpacity>


        <View style={styles.containerInfo}>
          <View style={styles.col}>
              <Text style={styles.txtInfo1}>Series</Text>
              <Text style={styles.txtInfo2}>1</Text>
          </View>
          <View style={styles.col}>
              <Text style={styles.txtInfo1}>Repetições</Text>
              <Text style={styles.txtInfo2}>10</Text>
          </View>
          <View style={styles.col}>
              <Text style={styles.txtInfo1}>Descanso</Text>
              <Text style={styles.txtInfo2}>20seg</Text>
          </View>
        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },
  header:{
    width:'100%',
    height:60,
    justifyContent:'center',
    borderBottomWidth:1,
    borderBottomColor:'#cccc'
  },
  iconBack:{
    marginLeft:30
  },
  containerVideo:{
    width:'80%',
    height:250,
    marginTop:10,
  },
  ImageExample:{
    width:'100%',
    height:'100%',
  },
  instrucao:{
    width:'80%',
    height:80,
  },
  instrucaoTxt:{
    fontSize:30,
    textAlign:'center',
    color:'#4c4c4c',
  },
  button:{
    width:'70%',
    height:40,
    backgroundColor:'#5b3fff',
    justifyContent:'center',
    alignItems:'center',
    marginTop:15,
    borderRadius:5,
  },
  buttonTxt:{
    fontSize:20,
    color:'#ffff',
  },
  containerInfo:{
    width:'100%',
    height:60,
    marginTop:30,
    flexDirection:'row',
    textAlign:'center'
  },
  col:{
    flex:1,
    alignItems:'center',
  },
  txtInfo1:{
    color:'gray',
    fontSize:22,
  },
  txtInfo2:{
    color:'#c130a9',
    fontSize:18,
  }
  
});